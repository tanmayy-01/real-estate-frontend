import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

/**
 * Reusable labeled input with optional leading icon and password visibility toggle.
 */
export default function FormInput({
  id,
  name,
  label,
  type = 'text',
  autoComplete,
  placeholder,
  value,
  onChange,
  icon: Icon,
  isPassword = false,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const inputType = isPassword ? (isVisible ? 'text' : 'password') : type;

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="mb-1 block text-[12.5px] font-medium text-neutral-800"
        >
          {label}
        </label>
      )}
      <div className="flex h-9.5 items-center gap-2.5 rounded-xl border border-neutral-300 bg-white px-3.5 transition-colors focus-within:border-[#8B5CF6] focus-within:ring-2 focus-within:ring-[#8B5CF6]/15">
        {Icon && <Icon className="h-4 w-4 shrink-0 text-neutral-400" strokeWidth={1.75} />}
        <input
          id={id}
          name={name}
          type={inputType}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
            aria-label={`${isVisible ? 'Hide' : 'Show'} ${label ? label.toLowerCase() : 'password'}`}
            className="cursor-pointer text-neutral-400 transition-colors hover:text-neutral-600"
          >
            {isVisible ? (
              <EyeOff className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <Eye className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
