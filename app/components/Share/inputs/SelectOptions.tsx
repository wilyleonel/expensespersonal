import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  options: string[];
  border?: boolean;
}

const SelectOptions = forwardRef<HTMLSelectElement, SelectProps>(function Input(
  { label, options, name, border, ...props },
  ref
) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-text-color text-title-content font-bold">
          {label}:
        </label>
      )}
      <select
        className={`border w-full rounded-input ${
          border ? "border-primary-color" : "border-placeholder-color"
        } h-[30px] bg-transparent`}
        ref={ref}
        name={name}
        {...props}
      >
        {label && (
          <option className="italic text-placeholder-color">{label}</option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default SelectOptions;
