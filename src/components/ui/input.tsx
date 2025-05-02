import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {startIcon && (
          <span
            tabIndex={-1}
            className="absolute inset-y-0 left-0 flex items-center pl-3"
          >
            {startIcon}
          </span>
        )}
        {endIcon && (
          <span
            tabIndex={-1}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {endIcon}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-sm border border-input px-3 py-2 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 border-none",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
