"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#ECE7DC] first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-3 text-left text-sm font-semibold text-[#211F2B]"
      >
        {title}
        <ChevronDown className={`w-4 h-4 text-[#8B879C] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-4 text-sm text-[#59566B] leading-relaxed">{children}</div>}
    </div>
  );
}
