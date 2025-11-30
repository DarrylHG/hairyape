import React, { createContext, useContext, useState } from "react";
import clsx from "clsx";

const AccordionContext = createContext(null);
const ItemContext = createContext(null);

export function Accordion({ type = "single", collapsible = true, children, ...props }) {
  const [openItem, setOpenItem] = useState(null);
  return (
    <AccordionContext.Provider value={{ type, collapsible, openItem, setOpenItem }}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, children, ...props }) {
  return (
    <ItemContext.Provider value={{ value }}>
      <div className="border-b border-slate-100 py-2" {...props}>
        {children}
      </div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({ className = "", children, ...props }) {
  const { openItem, setOpenItem, type, collapsible } = useContext(AccordionContext);
  const { value } = useContext(ItemContext);
  const isOpen = openItem === value;

  const toggle = () => {
    if (type === "single") {
      if (isOpen && collapsible) setOpenItem(null);
      else setOpenItem(value);
    } else {
      if (isOpen && collapsible) setOpenItem(null);
      else setOpenItem(value);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={clsx(
        "flex w-full items-center justify-between text-sm py-3",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <span className="ml-2 text-xs text-slate-500">{isOpen ? "−" : "+"}</span>
    </button>
  );
}

export function AccordionContent({ className = "", children, ...props }) {
  const { openItem } = useContext(AccordionContext);
  const { value } = useContext(ItemContext);
  const isOpen = openItem === value;
  if (!isOpen) return null;
  return (
    <div className={clsx("pb-3 text-sm text-slate-600", className)} {...props}>
      {children}
    </div>
  );
}
