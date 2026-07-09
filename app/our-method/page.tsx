import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Method",
  description: "How SleepNestPress selects, evaluates, and ranks sleep products — our editorial standards and methodology explained.",
  openGraph: { title: `Our Method | ${site.name}`, description: "SleepNestPress editorial standards and product selection methodology.", url: `${site.url}/our-method` },
};

export default function OurMethodPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <p className="eyebrow-accent mb-2">Methodology</p>
      <h1 className="text-3xl font-bold text-[#211F2B] tracking-tight mb-3">Our Method</h1>
      <p className="text-[#59566B] leading-relaxed mb-10">How we select, evaluate, and rank the sleep products we cover — and what we don&rsquo;t do.</p>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-[#211F2B] mb-3">Who We Are</h2>
          <p className="text-sm text-[#59566B] leading-relaxed">SleepNestPress is an independent editorial team focused on bedroom and sleep accessories. We cover pillows, blankets, sheets, mattress protectors, sleep masks, and related products. We don&rsquo;t sell products directly and we don&rsquo;t accept payment from manufacturers in exchange for coverage or favorable rankings. Our revenue comes from affiliate commissions on purchases made through our links — but those commissions don&rsquo;t influence what we recommend or how we rank products.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#211F2B] mb-3">How We Select Products</h2>
          <p className="text-sm text-[#59566B] leading-relaxed mb-3">We start by mapping the category — understanding what types of products exist, what the relevant specifications are (loft, fill type, thread count, weight, material), and what sleep science says about their role. From there, we identify products that represent a meaningful range of options within that category.</p>
          <p className="text-sm text-[#59566B] leading-relaxed">We evaluate materials and construction quality, certifications (Oeko-Tex, CertiPUR-US, GREENGUARD), manufacturer claims against available evidence, and large pools of verified buyer feedback. We weight sustained feedback from many users more heavily than individual reviews.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#211F2B] mb-3">How We Rank Products</h2>
          <p className="text-sm text-[#59566B] leading-relaxed mb-3">Rankings within each category reflect our editorial judgment on overall value, quality, and suitability for the broadest range of sleepers. The product ranked #1 is the one we believe represents the best overall pick for most people — not necessarily the most expensive, the most feature-rich, or the best-rated on any single metric.</p>
          <p className="text-sm text-[#59566B] leading-relaxed">We also designate specific badges (Best for Hot Sleepers, Best Value, Editor&rsquo;s Pick, etc.) to help readers identify options that better suit specific needs. Affiliate earnings do not affect rankings.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#211F2B] mb-3">What We Don&rsquo;t Do</h2>
          <ul className="text-sm text-[#59566B] leading-relaxed space-y-2 list-disc list-inside">
            <li>We don&rsquo;t publish prices — they change too quickly to be reliable in editorial content.</li>
            <li>We don&rsquo;t claim to have personally tested every product we cover.</li>
            <li>We don&rsquo;t use fake star ratings or invented review aggregates.</li>
            <li>We don&rsquo;t copy manufacturer descriptions or marketing language.</li>
            <li>We don&rsquo;t accept compensation for product placement or ranking position.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#211F2B] mb-3">Our Editorial Standards</h2>
          <p className="text-sm text-[#59566B] leading-relaxed">Sleep health guidance in our articles and guides is informed by research from institutions including the <a href="https://www.sleepfoundation.org" target="_blank" rel="noopener noreferrer" className="text-[#4D4A99] hover:underline">Sleep Foundation</a>, the <a href="https://www.nih.gov/health-information/sleep-disorders" target="_blank" rel="noopener noreferrer" className="text-[#4D4A99] hover:underline">National Institutes of Health</a>, and the <a href="https://www.cdc.gov/sleep/index.html" target="_blank" rel="noopener noreferrer" className="text-[#4D4A99] hover:underline">CDC&rsquo;s sleep health resources</a>. We link directly to primary sources wherever possible and update our content as new information becomes available.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#211F2B] mb-3">Affiliate Disclosure</h2>
          <div className="card p-4 bg-[#F3EEE4] border-[#ECE7DC]">
            <p className="text-sm text-[#59566B]">{site.affiliateDisclosure}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
