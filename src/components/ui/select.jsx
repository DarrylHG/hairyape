import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import clsx from "clsx";

const SelectContext = createContext(null);

export function Select({ value, onValueChange, children }) {
  const [internalValue, setInternalValue] = useState(value ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (value !== undefined) setInternalValue(value);
  }, [value]);

  const setValue = (v) => {
    if (onValueChange) onValueChange(v);
    if (value === undefined) setInternalValue(v);
    setOpen(false);
  };

  return (
    <SelectContext.Provider
      value={{ value: value ?? internalValue, setValue, open, setOpen }}
    >
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ className = "", children, ...props }) {
  const { value, setOpen } = useContext(SelectContext);
  return (
    <button
      type="button"
      onClick={() => setOpen((prev) => !prev)}
      className={clsx(
        "flex w-full items-center justify-between rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50",
        className
      )}
      {...props}
    >
      {React.cloneElement(children, { value })}
    </button>
  );
}

export function SelectValue({ placeholder, value: _ignored, ...props }) {
  const { value } = useContext(SelectContext);
  return <span {...props}>{value || placeholder}</span>;
}

export function SelectContent({ className = "", children, ...props }) {
  const { open } = useContext(SelectContext);
  if (!open) return null;
  return (
    <div
      className={clsx(
        "absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md border border-slate-200 bg-white py-1 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SelectItem({ value, children, className = "", ...props }) {
  const { setValue, value: current } = useContext(SelectContext);
  const isActive = current === value;

  const handleSelect = () => setValue(value);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleSelect();
      }}
      className={clsx(
        "cursor-pointer px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100",
        isActive && "bg-slate-100 font-medium",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
