import React, { useEffect, useState } from "react";
import { AlertCircle, Eye, EyeOff, Lightbulb, Monitor } from "lucide-react";
import { detectDarkReader, monitorDarkReader, getDarkReaderRecommendations } from "../utils/darkReaderCompat";
import type { DarkReaderInfo } from "../utils/darkReaderCompat";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function DarkReaderStatus() {
  const [darkReaderInfo, setDarkReaderInfo] = useState<DarkReaderInfo>({
    isEnabled: false,
    isInstalled: false,
  });
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Initial detection
    setDarkReaderInfo(detectDarkReader());

    // Monitor for changes
    const cleanup = monitorDarkReader((info) => {
      setDarkReaderInfo(info);
      // Reset dismissed state when Dark Reader state changes
      setDismissed(false);
    }, 2000);

    return cleanup;
  }, []);

  const recommendations = getDarkReaderRecommendations(darkReaderInfo);

  if (dismissed || (!darkReaderInfo.isInstalled && !darkReaderInfo.isEnabled)) {
    return null;
  }

  const getStatusIcon = () => {
    if (darkReaderInfo.isEnabled) {
      return <Eye className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />;
    }
    if (darkReaderInfo.isInstalled) {
      return <EyeOff className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
    return <Monitor className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
  };

  const getAlertVariant = () => {
    switch (recommendations.type) {
      case 'warning': return 'destructive';
      case 'success': return 'default';
      default: return 'default';
    }
  };

  return (
    <Card className="p-4 border-l-4 border-l-blue-500 bg-card text-card-foreground">
      <div className="space-y-3">
        {/* Status Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <h3 className="font-semibold text-foreground">
              Dark Reader Extension Status
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full ${
              darkReaderInfo.isEnabled
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200'
                : darkReaderInfo.isInstalled
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200'
            }`}>
              {darkReaderInfo.isEnabled ? 'Active' :
               darkReaderInfo.isInstalled ? 'Installed' : 'Not Found'}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDismissed(true)}
            className="text-muted-foreground hover:text-foreground"
          >
            ×
          </Button>
        </div>

        {/* Recommendation Alert */}
        <Alert variant={getAlertVariant()}>
          <Lightbulb className="h-4 w-4" />
          <AlertDescription>
            {recommendations.message}
          </AlertDescription>
        </Alert>

        {/* Detailed Information */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-medium text-foreground">Extension Status:</span>
              <br />
              {darkReaderInfo.isInstalled ? 'Detected' : 'Not detected'}
            </div>
            <div>
              <span className="font-medium text-foreground">Currently Active:</span>
              <br />
              {darkReaderInfo.isEnabled ? 'Yes' : 'No'}
            </div>
          </div>

          {darkReaderInfo.version && (
            <div>
              <span className="font-medium text-foreground">Version:</span> {darkReaderInfo.version}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {darkReaderInfo.isEnabled && (
            <div className="text-xs text-muted-foreground bg-muted p-3 rounded-md">
              <div className="font-medium text-foreground mb-1">Why use our native themes?</div>
              <ul className="space-y-1">
                <li>• Faster performance (no CSS filters)</li>
                <li>• Consistent design across all devices</li>
                <li>• Better color accuracy</li>
                <li>• Works on mobile browsers</li>
                <li>• No extension required</li>
              </ul>
            </div>
          )}

          {!darkReaderInfo.isEnabled && darkReaderInfo.isInstalled && (
            <div className="text-xs text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/20 p-3 rounded-md">
              <div className="font-medium mb-1">Perfect!</div>
              Dark Reader is installed but not active. Our native themes will provide the best experience.
            </div>
          )}
        </div>

        {/* Help Links */}
        <div className="flex gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
          <a
            href="https://darkreader.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground hover:underline"
          >
            About Dark Reader
          </a>
          <a
            href="#theme-demo"
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'theme-demo' }))}
            className="hover:text-foreground hover:underline"
          >
            Try Our Themes
          </a>
        </div>
      </div>
    </Card>
  );
}

export default DarkReaderStatus;
