import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Check, X, Info, AlertCircle } from "lucide-react";

// Theme Toggle Component - automatically styled
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 p-2 bg-card border border-border rounded-lg">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-md transition-colors ${
          theme === "light"
            ? "bg-primary text-primary-foreground"
            : "bg-background hover:bg-accent text-foreground"
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-md transition-colors ${
          theme === "dark"
            ? "bg-primary text-primary-foreground"
            : "bg-background hover:bg-accent text-foreground"
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-md transition-colors ${
          theme === "system"
            ? "bg-primary text-primary-foreground"
            : "bg-background hover:bg-accent text-foreground"
        }`}
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
}

// Card Component - automatically themed
interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "muted";
}

export function ThemedCard({
  title,
  children,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={`
      rounded-lg border p-6 transition-colors
      ${
        variant === "default"
          ? "bg-card text-card-foreground border-border"
          : "bg-muted text-muted-foreground border-border"
      }
    `}
    >
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      {children}
    </div>
  );
}

// Button Component - automatically themed
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function ThemedButton({
  variant = "primary",
  size = "md",
  children,
  onClick,
  disabled,
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        rounded-md transition-colors font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// Form Components - automatically themed
interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export function ThemedFormField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full px-3 py-2 rounded-md border transition-colors
          bg-input text-foreground border-border
          focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
          placeholder:text-muted-foreground
          ${error ? "border-destructive focus:ring-destructive" : ""}
        `}
      />
      {error && (
        <p className="text-sm text-destructive flex items-center gap-1">
          <X className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  );
}

// Status Components - automatically themed
interface StatusBadgeProps {
  status: "success" | "warning" | "error" | "info";
  children: React.ReactNode;
}

export function ThemedStatusBadge({ status, children }: StatusBadgeProps) {
  const statusStyles = {
    success:
      "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800",
    warning:
      "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800",
    error:
      "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800",
    info: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800",
  };

  const icons = {
    success: <Check className="w-3 h-3" />,
    warning: <AlertCircle className="w-3 h-3" />,
    error: <X className="w-3 h-3" />,
    info: <Info className="w-3 h-3" />,
  };

  return (
    <span
      className={`
      inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border
      ${statusStyles[status]}
    `}
    >
      {icons[status]}
      {children}
    </span>
  );
}

// Navigation Component - automatically themed
interface NavItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export function ThemedNavItem({
  label,
  isActive,
  onClick,
  icon,
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors w-full text-left
        ${
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
}

// Data Table Component - automatically themed
interface TableProps {
  headers: string[];
  rows: string[][];
}

export function ThemedTable({ headers, rows }: TableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-medium text-muted-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-background">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t border-border hover:bg-muted/50 transition-colors"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-sm text-foreground"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Modal Component - automatically themed
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function ThemedModal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card border border-border rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-card-foreground">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 text-card-foreground">{children}</div>
      </div>
    </div>
  );
}

// Demo Component showing all examples
export function ThemeExamplesDemo() {
  const [inputValue, setInputValue] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const tableData = {
    headers: ["Name", "Status", "Date"],
    rows: [
      ["John Doe", "Active", "2024-01-15"],
      ["Jane Smith", "Inactive", "2024-01-14"],
      ["Bob Wilson", "Pending", "2024-01-13"],
    ],
  };

  return (
    <div className="space-y-6 p-6 bg-background text-foreground min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Theme Examples</h1>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ThemedCard title="Buttons">
          <div className="space-y-3">
            <ThemedButton variant="primary">Primary Button</ThemedButton>
            <ThemedButton variant="secondary">Secondary Button</ThemedButton>
            <ThemedButton variant="outline">Outline Button</ThemedButton>
            <ThemedButton variant="ghost">Ghost Button</ThemedButton>
            <ThemedButton variant="destructive">
              Destructive Button
            </ThemedButton>
          </div>
        </ThemedCard>

        <ThemedCard title="Form Fields">
          <div className="space-y-4">
            <ThemedFormField
              label="Username"
              placeholder="Enter your username"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <ThemedFormField
              label="Email"
              type="email"
              placeholder="Enter your email"
              error="Please enter a valid email"
            />
          </div>
        </ThemedCard>

        <ThemedCard title="Status Badges">
          <div className="flex flex-wrap gap-2">
            <ThemedStatusBadge status="success">Success</ThemedStatusBadge>
            <ThemedStatusBadge status="warning">Warning</ThemedStatusBadge>
            <ThemedStatusBadge status="error">Error</ThemedStatusBadge>
            <ThemedStatusBadge status="info">Info</ThemedStatusBadge>
          </div>
        </ThemedCard>

        <ThemedCard title="Navigation">
          <div className="space-y-1">
            <ThemedNavItem
              label="Dashboard"
              isActive
              icon={<Monitor className="w-4 h-4" />}
            />
            <ThemedNavItem
              label="Settings"
              icon={<Sun className="w-4 h-4" />}
            />
            <ThemedNavItem
              label="Profile"
              icon={<Moon className="w-4 h-4" />}
            />
          </div>
        </ThemedCard>
      </div>

      <ThemedCard title="Data Table">
        <ThemedTable headers={tableData.headers} rows={tableData.rows} />
      </ThemedCard>

      <div className="flex gap-4">
        <ThemedButton onClick={() => setShowModal(true)}>
          Open Modal
        </ThemedButton>
      </div>

      <ThemedModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Example Modal"
      >
        <p>This modal automatically adapts to the current theme!</p>
        <div className="mt-4 flex justify-end">
          <ThemedButton onClick={() => setShowModal(false)}>Close</ThemedButton>
        </div>
      </ThemedModal>
    </div>
  );
}
