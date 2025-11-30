import React from "react";
import clsx from "clsx";

export function Button({ className = "", variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center text-sm font-medium rounded-md px-4 py-2 transition-colors " +
    "disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500";

  let variantClasses;
  if (variant === "outline") {
    variantClasses =
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50";
  } else {
    variantClasses = "bg-cyan-600 text-white hover:bg-cyan-700";
  }

  return (
    <button
      className={clsx(base, variantClasses, className)}
      {...props}
    />
  );
}
