"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="card divide-y divide-[#ECE7DC]">
      {items.map((item, i) => (
        <div key={item.question} className="px-5">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left font-semibold text-[#211F2B] text-sm"
          >
            {item.question}
            <ChevronDown
              className={`w-4 h-4 shrink-0 ml-3 text-[#8B879C] transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <p className="pb-4 text-sm text-[#59566B] leading-relaxed">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
