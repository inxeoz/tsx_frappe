/**
 * Custom hook for search functionality with advanced features
 *
 * This hook provides comprehensive search capabilities including debounced search,
 * search history, advanced filtering, and result highlighting.
 *
 * @author IT Support Dashboard Team
 * @version 1.0.0
 */

import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Ticket, UseSearchReturn } from '../types';

// =============================================================================
// INTERFACES
// =============================================================================

interface SearchOptions {
  /** Debounce delay in milliseconds */
  debounceMs?: number;
  /** Maximum number of search history items */
  maxHistoryItems?: number;
  /** Enable search history persistence */
  enableHistory?: boolean;
  /** Local storage key for search history */
  historyStorageKey?: string;
  /** Minimum query length to trigger search */
  minQueryLength?: number;
  /** Enable fuzzy search */
  enableFuzzySearch?: boolean;
  /** Fields to search in */
  searchFields?: (keyof Ticket)[];
}

interface SearchResult extends Ticket {
  /** Search relevance score (0-1) */
  relevanceScore?: number;
  /** Matched fields */
  matchedFields?: string[];
  /** Highlighted content */
  highlights?: Record<string, string>;
}

interface SearchHistory {
  /** Search query */
  query: string;
  /** Number of results */
  resultCount: number;
  /** Timestamp */
  timestamp: number;
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Calculate Levenshtein distance for fuzzy search
 */
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i++) {
    matrix[0][i] = i;
  }

  for (let j = 0; j <= str2.length; j++) {
    matrix[j][0] = j;
  }

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[j][i] = matrix[j - 1][i - 1];
      } else {
        matrix[j][i] = Math.min(
          matrix[j - 1][i] + 1,
          matrix[j][i - 1] + 1,
          matrix[j - 1][i - 1] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
};

/**
 * Calculate similarity score between two strings
 */
const calculateSimilarity = (str1: string, str2: string): number => {
  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
  const maxLength = Math.max(str1.length, str2.length);
  return maxLength === 0 ? 1 : 1 - distance / maxLength;
};

/**
 * Highlight search terms in text
 */
const highlightText = (text: string, query: string): string => {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${query.split(' ').join('|')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

/**
 * Check if text matches query with fuzzy search
 */
const fuzzyMatch = (text: string, query: string, threshold: number = 0.6): boolean => {
  const words = query.toLowerCase().split(' ');
  const textLower = text.toLowerCase();

  return words.some(word => {
    // Exact match
    if (textLower.includes(word)) return true;

    // Fuzzy match
    const textWords = textLower.split(' ');
    return textWords.some(textWord => calculateSimilarity(textWord, word) >= threshold);
  });
};

/**
 * Search tickets with scoring and highlighting
 */
const searchTicketsAdvanced = (
  tickets: Ticket[],
  query: string,
  options: SearchOptions
): SearchResult[] => {
  if (!query.trim() || query.length < (options.minQueryLength || 1)) {
    return tickets as SearchResult[];
  }

  const {
    enableFuzzySearch = false,
    searchFields = ['title', 'description', 'tags', 'agent']
  } = options;

  const queryWords = query.toLowerCase().split(' ').filter(word => word.length > 0);

  return tickets.map(ticket => {
    let relevanceScore = 0;
    const matchedFields: string[] = [];
    const highlights: Record<string, string> = {};

    searchFields.forEach(field => {
      const fieldValue = ticket[field];
      if (!fieldValue) return;

      let fieldText = '';
      if (Array.isArray(fieldValue)) {
        fieldText = fieldValue.join(' ');
      } else {
        fieldText = String(fieldValue);
      }

      let fieldMatches = false;
      let fieldScore = 0;

      if (enableFuzzySearch) {
        fieldMatches = fuzzyMatch(fieldText, query);
        if (fieldMatches) {
          fieldScore = queryWords.reduce((score, word) => {
            const similarity = calculateSimilarity(fieldText, word);
            return Math.max(score, similarity);
          }, 0);
        }
      } else {
        const fieldTextLower = fieldText.toLowerCase();
        fieldMatches = queryWords.some(word => fieldTextLower.includes(word));
        if (fieldMatches) {
          // Calculate exact match score
          fieldScore = queryWords.reduce((score, word) => {
            if (fieldTextLower.includes(word)) {
              const exactMatch = fieldTextLower === word ? 1.0 : 0.7;
              const containsMatch = fieldTextLower.includes(word) ? 0.5 : 0;
              return Math.max(score, Math.max(exactMatch, containsMatch));
            }
            return score;
          }, 0);
        }
      }

      if (fieldMatches) {
        matchedFields.push(field as string);
        highlights[field as string] = highlightText(fieldText, query);

        // Weight different fields differently
        const fieldWeights: Record<string, number> = {
          title: 2.0,
          description: 1.0,
          tags: 1.5,
          agent: 1.2,
          priority: 1.0
        };

        const weight = fieldWeights[field as string] || 1.0;
        relevanceScore += fieldScore * weight;
      }
    });

    return {
      ...ticket,
      relevanceScore,
      matchedFields,
      highlights
    } as SearchResult;
  }).filter(result => result.matchedFields && result.matchedFields.length > 0)
    .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
};

// =============================================================================
// MAIN HOOK
// =============================================================================

/**
 * Custom hook for advanced search functionality
 */
export const useSearch = (tickets: Ticket[], options: SearchOptions = {}): UseSearchReturn & {
  /** Advanced search results with scoring */
  searchResults: SearchResult[];
  /** Search history */
  searchHistory: SearchHistory[];
  /** Clear search history */
  clearHistory: () => void;
  /** Get suggestions based on history */
  getSuggestions: (query: string) => string[];
  /** Toggle fuzzy search */
  toggleFuzzySearch: () => void;
  /** Update search options */
  updateOptions: (newOptions: Partial<SearchOptions>) => void;
} => {
  const {
    debounceMs = 300,
    maxHistoryItems = 10,
    enableHistory = true,
    historyStorageKey = 'search-history',
    minQueryLength = 1,
    enableFuzzySearch = false,
    searchFields = ['title', 'description', 'tags', 'agent']
  } = options;

  // ==========================================================================
  // STATE
  // ==========================================================================

  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>(() => {
    if (enableHistory) {
      try {
        const stored = localStorage.getItem(historyStorageKey);
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
    return [];
  });
  const [searchOptions, setSearchOptions] = useState<SearchOptions>(options);

  // Refs for debouncing
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();
  const debouncedQueryRef = useRef('');

  // ==========================================================================
  // DEBOUNCED QUERY EFFECT
  // ==========================================================================

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      debouncedQueryRef.current = query;
    }, debounceMs);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [query, debounceMs]);

  // ==========================================================================
  // SEARCH RESULTS
  // ==========================================================================

  const searchResults = useMemo<SearchResult[]>(() => {
    const debouncedQuery = debouncedQueryRef.current;

    if (!debouncedQuery.trim() || debouncedQuery.length < minQueryLength) {
      return tickets as SearchResult[];
    }

    return searchTicketsAdvanced(tickets, debouncedQuery, searchOptions);
  }, [tickets, debouncedQueryRef.current, searchOptions, minQueryLength]);

  // Simple results for the basic interface
  const results = useMemo(() => {
    return searchResults.map(({ relevanceScore, matchedFields, highlights, ...ticket }) => ticket);
  }, [searchResults]);

  // ==========================================================================
  // ACTIONS
  // ==========================================================================

  /**
   * Update search query
   */
  const setQueryHandler = useCallback((newQuery: string) => {
    setQuery(newQuery);

    // Add to history if query is executed
    if (newQuery.trim() && newQuery.length >= minQueryLength && enableHistory) {
      const historyItem: SearchHistory = {
        query: newQuery.trim(),
        resultCount: 0, // Will be updated by effect
        timestamp: Date.now()
      };

      setSearchHistory(prev => {
        const filtered = prev.filter(item => item.query !== historyItem.query);
        const updated = [historyItem, ...filtered].slice(0, maxHistoryItems);

        try {
          localStorage.setItem(historyStorageKey, JSON.stringify(updated));
        } catch (error) {
          console.warn('Failed to save search history:', error);
        }

        return updated;
      });
    }
  }, [minQueryLength, enableHistory, maxHistoryItems, historyStorageKey]);

  /**
   * Toggle search active state
   */
  const toggleActive = useCallback(() => {
    setIsActive(prev => {
      if (prev) {
        setQuery('');
        debouncedQueryRef.current = '';
      }
      return !prev;
    });
  }, []);

  /**
   * Clear search
   */
  const clear = useCallback(() => {
    setQuery('');
    debouncedQueryRef.current = '';
    setIsActive(false);
  }, []);

  /**
   * Clear search history
   */
  const clearHistory = useCallback(() => {
    setSearchHistory([]);
    try {
      localStorage.removeItem(historyStorageKey);
    } catch (error) {
      console.warn('Failed to clear search history:', error);
    }
  }, [historyStorageKey]);

  /**
   * Get search suggestions based on history
   */
  const getSuggestions = useCallback((inputQuery: string): string[] => {
    if (!inputQuery.trim()) return [];

    const inputLower = inputQuery.toLowerCase();
    return searchHistory
      .filter(item => item.query.toLowerCase().includes(inputLower))
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 5)
      .map(item => item.query);
  }, [searchHistory]);

  /**
   * Toggle fuzzy search
   */
  const toggleFuzzySearch = useCallback(() => {
    setSearchOptions(prev => ({
      ...prev,
      enableFuzzySearch: !prev.enableFuzzySearch
    }));
  }, []);

  /**
   * Update search options
   */
  const updateOptions = useCallback((newOptions: Partial<SearchOptions>) => {
    setSearchOptions(prev => ({ ...prev, ...newOptions }));
  }, []);

  // ==========================================================================
  // UPDATE RESULT COUNT IN HISTORY
  // ==========================================================================

  useEffect(() => {
    if (query.trim() && enableHistory) {
      setSearchHistory(prev => {
        const updated = [...prev];
        const currentItem = updated.find(item => item.query === query.trim());
        if (currentItem) {
          currentItem.resultCount = searchResults.length;
          try {
            localStorage.setItem(historyStorageKey, JSON.stringify(updated));
          } catch (error) {
            console.warn('Failed to update search history:', error);
          }
        }
        return updated;
      });
    }
  }, [query, searchResults.length, enableHistory, historyStorageKey]);

  // ==========================================================================
  // CLEANUP
  // ==========================================================================

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  // ==========================================================================
  // RETURN INTERFACE
  // ==========================================================================

  return {
    // Basic interface
    query,
    isActive,
    results,
    setQuery: setQueryHandler,
    toggleActive,
    clear,

    // Extended interface
    searchResults,
    searchHistory,
    clearHistory,
    getSuggestions,
    toggleFuzzySearch,
    updateOptions,

    // Computed values
    hasResults: searchResults.length > 0,
    resultCount: searchResults.length,
    isSearching: query.trim().length >= minQueryLength,
    isFuzzyEnabled: searchOptions.enableFuzzySearch || false
  };
};

export default useSearch;
