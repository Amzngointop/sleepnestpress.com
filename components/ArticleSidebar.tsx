"use client";

import { useEffect, useRef, useState } from "react";

export interface AnchorLink {
  id: string;
  label: string;
}

export default function ArticleSidebar({
  title,
  links,
}: {
  title: string;
  links: AnchorLink[];
}) {
  const [activeId, setActiveId] = useState<string>(links[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="hidden lg:block sticky top-24 self-start w-56 shrink-0 max-h-[calc(100vh-7rem)] overflow-y-auto">
      <p className="eyebrow mb-3">{title}</p>
      <ul className="space-y-1 border-l border-[#E7E2D8]">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`block pl-3 py-1.5 text-sm border-l-2 -ml-px transition-colors ${
                activeId === link.id
                  ? "border-[#4D4A99] text-[#4D4A99] font-semibold"
                  : "border-transparent text-[#59566B] hover:text-[#211F2B]"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
