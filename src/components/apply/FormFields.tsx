import React from 'react';
import { AlertCircle, Upload, X, FileCheck2 } from 'lucide-react';

const baseInputClasses =
  'w-full bg-muted/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors';

function ErrorText({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <p className="flex items-center gap-1.5 text-xs text-red-600 mt-1.5">
      <AlertCircle size={13} className="shrink-0" />
      {error}
    </p>
  );
}

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

export const FieldWrapper = React.forwardRef<HTMLDivElement, FieldWrapperProps>(
  ({ label, htmlFor, required, error, hint, children }, ref) => (
    <div className="space-y-1.5" ref={ref}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-primary">
        {label} {required && <span className="text-secondary">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
      <ErrorText error={error} />
    </div>
  )
);
FieldWrapper.displayName = 'FieldWrapper';

interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  hint?: string;
}

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({ label, name, value, onChange, type = 'text', placeholder, required, error, hint }, ref) => (
    <FieldWrapper label={label} htmlFor={name} required={required} error={error} hint={hint} ref={ref}>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className={`${baseInputClasses} ${error ? 'border-red-400' : 'border-border'}`}
      />
    </FieldWrapper>
  )
);
TextField.displayName = 'TextField';

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  rows?: number;
}

export const TextAreaField = React.forwardRef<HTMLDivElement, TextAreaFieldProps>(
  ({ label, name, value, onChange, placeholder, required, error, rows = 3 }, ref) => (
    <FieldWrapper label={label} htmlFor={name} required={required} error={error} ref={ref}>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`${baseInputClasses} resize-none ${error ? 'border-red-400' : 'border-border'}`}
      />
    </FieldWrapper>
  )
);
TextAreaField.displayName = 'TextAreaField';

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export const SelectField = React.forwardRef<HTMLDivElement, SelectFieldProps>(
  ({ label, name, value, onChange, options, placeholder = 'Please select', required, error }, ref) => (
    <FieldWrapper label={label} htmlFor={name} required={required} error={error} ref={ref}>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className={`${baseInputClasses} appearance-none ${error ? 'border-red-400' : 'border-border'}`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </FieldWrapper>
  )
);
SelectField.displayName = 'SelectField';

interface FileFieldProps {
  label: string;
  name: string;
  file: File | null;
  onChange: (name: string, file: File | null) => void;
  required?: boolean;
  error?: string;
  hint?: string;
}

export function FileField({ label, name, file, onChange, required, error, hint }: FileFieldProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <FieldWrapper label={label} htmlFor={name} required={required} error={error} hint={hint}>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        onChange={(e) => onChange(name, e.target.files?.[0] ?? null)}
      />
      {file ? (
        <div className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 bg-muted/50 ${error ? 'border-red-400' : 'border-border'}`}>
          <div className="flex items-center gap-2.5 min-w-0">
            <FileCheck2 size={18} className="text-secondary shrink-0" />
            <span className="text-sm text-primary truncate">{file.name}</span>
            <span className="text-xs text-muted-foreground shrink-0">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
          </div>
          <button
            type="button"
            onClick={() => onChange(name, null)}
            className="text-muted-foreground hover:text-red-500 shrink-0"
            aria-label={`Remove ${label}`}
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={`w-full flex items-center justify-center gap-2 border-2 border-dashed rounded-xl px-4 py-4 text-sm text-muted-foreground hover:border-secondary hover:text-secondary transition-colors ${error ? 'border-red-400' : 'border-border'}`}
        >
          <Upload size={16} />
          Click to upload file
        </button>
      )}
    </FieldWrapper>
  );
}

export { baseInputClasses };
