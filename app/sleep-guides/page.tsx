import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { guides } from "@/data/guides";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sleep Guides",
  description: "Evidence-based guides covering every aspect of sleep setup — from bedding layering to sleep hygiene habits — written to help you sleep better starting tonight.",
  openGraph: {
    title: `Sleep Guides | ${site.name}`,
    description: "Browse all SleepNestPress guides on sleep health, bedding setup, and bedroom optimization.",
    url: `${site.url}/sleep-guides`,
  },
};

export default function SleepGuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <p className="eyebrow-accent mb-2">All Guides</p>
      <h1 className="text-3xl font-bold text-[#211F2B] tracking-tight mb-3">Sleep Guides</h1>
      <p className="text-[#59566B] leading-relaxed mb-10 max-w-2xl">Practical, evidence-informed guides covering sleep hygiene, bedroom setup, bedding choices, and more — written without fluff or filler.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((g) => (
          <article key={g.slug} className="card overflow-hidden flex flex-col">
            <div className="relative w-full h-48">
              <Image src={g.heroImage} alt={g.title} fill className="object-cover rounded-t-[14px]" sizes="33vw" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <p className="eyebrow-accent mb-2">{g.category}</p>
              <Link href={`/guides/${g.slug}`} className="headline-link font-semibold text-[#211F2B] leading-snug block mb-2 flex-1">
                {g.title}
              </Link>
              <p className="text-sm text-[#59566B] leading-relaxed mb-3">{g.excerpt}</p>
              <p className="text-xs text-[#8B879C]">{g.minutesToRead} min read</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
