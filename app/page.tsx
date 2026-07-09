import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Layers, Snowflake, Moon, Bed, ShieldCheck } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import NewsletterForm from "@/components/NewsletterForm";
import ProductCard from "@/components/ProductCard";
import SleepSetupCalculator from "@/components/SleepSetupCalculator";
import ArticleSidebar from "@/components/ArticleSidebar";
import RelatedSidebar from "@/components/RelatedSidebar";
import { products } from "@/data/products";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sleep Better, Starting Tonight",
  description: site.description,
  openGraph: {
    title: "SleepNestPress — Better Sleep, Backed by Better Gear",
    description: site.description,
    url: site.url,
    images: [{ url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200" }],
  },
};

const topRatedProducts = products.filter((p) => p.rank === 1);

const categoryCards = [
  { slug: "best-pillows", icon: Layers, label: "Pillows", desc: "Support for every sleep position, from side to back to stomach." },
  { slug: "best-weighted-cooling-blankets", icon: Snowflake, label: "Weighted & Cooling Blankets", desc: "Deep pressure or cooling airflow — find your perfect blanket type." },
  { slug: "best-sleep-masks-earplugs", icon: Moon, label: "Sleep Masks & Earplugs", desc: "Block light and muffle noise for deeper, uninterrupted sleep." },
  { slug: "best-bed-sheets-bedding-sets", icon: Bed, label: "Bed Sheets & Bedding Sets", desc: "Breathable sheets and complete bedding sets for every season." },
  { slug: "best-mattress-protectors-toppers", icon: ShieldCheck, label: "Mattress Protectors & Toppers", desc: "Protect and soften your mattress with waterproof and plush options." },
];

const glossaryPreview = [
  { term: "Sleep Latency", def: "The time it takes to fall asleep from lights out. Healthy range is typically 10–20 minutes." },
  { term: "REM Sleep", def: "Rapid Eye Movement sleep, associated with vivid dreaming and memory consolidation." },
  { term: "Sleep Architecture", def: "The pattern of sleep stages across a full night, including light, deep, and REM cycles." },
  { term: "Thread Count", def: "Threads per square inch in fabric — higher isn't always better; weave type matters more for feel." },
  { term: "Fill Power", def: "A measure of down fluffiness; higher fill power means more loft per ounce of fill." },
  { term: "Weighted Blanket Pressure", def: "Deep pressure stimulation from blanket weight — typically 8–12% of body weight is recommended." },
];

const onThisPageLinks = [
  { id: "top-rated", label: "Top-Rated Picks" },
  { id: "browse-by-category", label: "Browse by Category" },
  { id: "latest-guides", label: "Latest Guides" },
  { id: "sleep-calculator", label: "Sleep Setup Calculator" },
  { id: "the-wind-down-preview", label: "Glossary Preview" },
  { id: "how-we-pick", label: "How We Pick Products" },
  { id: "newsletter", label: "Newsletter" },
];

const editorQuotes = [
  { quote: "A cooler room and a breathable sheet set made more difference for my sleep than any supplement I've tried.", name: "Dana R.", role: "Senior Editor" },
  { quote: "I switched to a shredded foam pillow with adjustable loft and woke up without neck pain for the first time in years.", name: "Marcus T.", role: "Bedding Specialist" },
  { quote: "The right weighted blanket weight is individual — most people find that starting lighter is the better move.", name: "Priya K.", role: "Sleep Wellness Writer" },
];

export default function HomePage() {
  const newestGuide = guides[0];
  const otherGuides = guides.slice(1, 3);
  const editorPick = products.find((p) => p.articleSlug === "best-weighted-cooling-blankets" && p.rank === 2)!;

  return (
    <div>
      {/* Zone A */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Guides column */}
          <div className="flex flex-col gap-0">
            <p className="eyebrow-accent mb-4">Latest Guides</p>
            <div className="card overflow-hidden mb-4">
              <div className="relative w-full h-48">
                <Image src={newestGuide.heroImage} alt={newestGuide.title} fill className="object-cover rounded-t-[14px]" sizes="33vw" />
              </div>
              <div className="p-5">
                <p className="eyebrow mb-2">{newestGuide.category}</p>
                <Link href={`/guides/${newestGuide.slug}`} className="headline-link font-semibold text-[#211F2B] leading-snug block mb-2">{newestGuide.title}</Link>
                <p className="text-sm text-[#59566B] leading-relaxed mb-3">{newestGuide.excerpt}</p>
                <Link href={`/guides/${newestGuide.slug}`} className="text-sm font-semibold text-[#4D4A99] hover:underline">Read Guide →</Link>
              </div>
            </div>
            <div className="border-t border-[#E7E2D8] mb-4" />
            <div className="grid grid-cols-2 gap-4 mb-3">
              {otherGuides.map((g) => (
                <div key={g.slug} className="card overflow-hidden">
                  <div className="relative w-full h-28">
                    <Image src={g.heroImage} alt={g.title} fill className="object-cover rounded-t-[14px]" sizes="20vw" />
                  </div>
                  <div className="p-3">
                    <p className="eyebrow mb-1">{g.category}</p>
                    <Link href={`/guides/${g.slug}`} className="headline-link text-sm font-semibold text-[#211F2B] leading-snug block">{g.title}</Link>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/sleep-guides" className="text-sm font-semibold text-[#4D4A99] hover:underline">View all guides →</Link>
          </div>

          {/* Top Pick column */}
          <div className="flex flex-col">
            <p className="eyebrow mb-2">Editor&rsquo;s Choice</p>
            <p className="eyebrow-accent mb-4">Top Pick This Week</p>
            <div className="card overflow-hidden flex-1 flex flex-col">
              <div className="relative w-full h-48 bg-[#F3EEE4]">
                <Image src={editorPick.imageUrl} alt={editorPick.name} fill className="object-contain p-6" sizes="33vw" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="eyebrow mb-2">{editorPick.badge}</p>
                <Link href={`/best/${editorPick.articleSlug}#${editorPick.id}`} className="headline-link font-semibold text-[#211F2B] leading-snug block mb-2">{editorPick.name}</Link>
                <p className="text-sm text-[#59566B] leading-relaxed mb-4 flex-1">{editorPick.summary}</p>
                <p className="text-xs text-[#8B879C] mb-3">Affiliate commission may apply. See our <Link href="/affiliate-disclosure" className="underline">disclosure</Link>.</p>
                <a href={editorPick.affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-sm font-semibold text-[#4D4A99] hover:underline mb-3 block">View on Amazon →</a>
                <CTAButton href="#top-rated">See All Top Picks</CTAButton>
              </div>
            </div>
          </div>

          {/* From Our Editors */}
          <div className="flex flex-col gap-5">
            <p className="eyebrow mb-1">From Our Editors</p>
            <div className="space-y-4">
              {editorQuotes.map((q) => (
                <blockquote key={q.name} className="border-l-2 border-[#4D4A99] pl-4">
                  <p className="text-sm italic text-[#59566B] leading-relaxed mb-1">&ldquo;{q.quote}&rdquo;</p>
                  <footer className="text-xs text-[#8B879C]">— {q.name}, {q.role}</footer>
                </blockquote>
              ))}
            </div>
            <div className="border-t border-[#E7E2D8] pt-4">
              <p className="eyebrow mb-2">Latest Guide</p>
              <Link href={`/guides/${guides[3].slug}`} className="headline-link text-sm font-semibold text-[#211F2B] block mb-1">{guides[3].title}</Link>
              <p className="text-xs text-[#8B879C]">{guides[3].minutesToRead} min read</p>
            </div>
            <div className="bg-[#F3EEE4] rounded-[14px] p-5">
              <p className="text-4xl font-bold text-[#4D4A99] mb-1">⅓</p>
              <p className="text-sm text-[#59566B] leading-snug">of your life is spent asleep — the right bedding makes it count.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone B */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex gap-10">
          <ArticleSidebar title="On This Page" links={onThisPageLinks} />

          <div className="flex-1 min-w-0 space-y-20">
            {/* Top-Rated */}
            <section id="top-rated">
              <h2 className="text-2xl font-semibold text-[#211F2B] mb-2">Top-Rated Sleep Picks</h2>
              <p className="text-xs text-[#8B879C] mb-6">{site.affiliateDisclosure}</p>
              <div className="flex flex-wrap justify-center gap-6">
                {topRatedProducts.map((p) => (
                  <div key={p.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            </section>

            {/* Browse by Category */}
            <section id="browse-by-category">
              <h2 className="text-2xl font-semibold text-[#211F2B] mb-6">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {categoryCards.map(({ slug, icon: Icon, label, desc }) => (
                  <div key={slug} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                    <Link href={`/best/${slug}`} className="card p-5 flex flex-col gap-3 hover:border-[#4D4A99] transition-colors group h-full">
                      <Icon className="w-6 h-6 text-[#4D4A99]" />
                      <div>
                        <p className="font-semibold text-[#211F2B] mb-1 group-hover:underline">{label}</p>
                        <p className="text-sm text-[#59566B]">{desc}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Latest Guides */}
            <section id="latest-guides">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-2xl font-semibold text-[#211F2B]">Latest Guides</h2>
                <Link href="/sleep-guides" className="text-sm font-semibold text-[#4D4A99] hover:underline">View all →</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.map((g) => (
                  <div key={g.slug} className="card overflow-hidden flex flex-col">
                    <div className="relative w-full h-40">
                      <Image src={g.heroImage} alt={g.title} fill className="object-cover rounded-t-[14px]" sizes="33vw" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <p className="eyebrow-accent mb-2">{g.category}</p>
                      <Link href={`/guides/${g.slug}`} className="headline-link font-semibold text-[#211F2B] text-sm leading-snug mb-2 flex-1 block">{g.title}</Link>
                      <p className="text-xs text-[#8B879C]">{g.minutesToRead} min read</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Calculator */}
            <section id="sleep-calculator">
              <SleepSetupCalculator />
            </section>

            {/* Glossary Preview */}
            <section id="the-wind-down-preview">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-2xl font-semibold text-[#211F2B]">The Wind-Down Glossary</h2>
                <Link href="/the-wind-down" className="text-sm font-semibold text-[#4D4A99] hover:underline">View all →</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {glossaryPreview.map(({ term, def }) => (
                  <div key={term} className="border-l-2 border-[#4D4A99] pl-4 py-1">
                    <p className="font-semibold text-[#211F2B] text-sm mb-1">{term}</p>
                    <p className="text-xs text-[#59566B] leading-relaxed">{def}</p>
                  </div>
                ))}
              </div>
              <CTAButton href="/the-wind-down">Explore the Full Glossary →</CTAButton>
            </section>

            {/* How We Pick */}
            <section id="how-we-pick">
              <h2 className="text-2xl font-semibold text-[#211F2B] mb-6">How We Pick Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { step: "Step 1", heading: "Category Research", body: "We start with the category landscape — understanding what types of products exist, what sleep science says about their role, and what common pain points real sleepers report." },
                  { step: "Step 2", heading: "Product Evaluation", body: "We evaluate materials, certifications, construction quality, and suitability for different sleeper types. We also weigh verified buyer feedback from thousands of real users." },
                  { step: "Step 3", heading: "Independent Ranking", body: "Rankings reflect our editorial judgment, not paid placement. Affiliate earnings don't influence which products are recommended or how they rank." },
                ].map(({ step, heading, body }) => (
                  <div key={step} className="card p-5">
                    <p className="eyebrow-accent mb-2">{step}</p>
                    <h3 className="font-semibold text-[#211F2B] mb-2">{heading}</h3>
                    <p className="text-sm text-[#59566B] leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <div className="card p-6 mb-6 overflow-x-auto">
                <p className="eyebrow mb-4 text-center">Our Editorial Process</p>
                <svg viewBox="0 0 610 80" className="w-full min-w-[400px]" aria-label="Editorial process flow">
                  <defs>
                    <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                      <path d="M0,1 L7,4 L0,7 Z" fill="#8B879C" />
                    </marker>
                  </defs>
                  {["Research", "Evaluate", "Rank", "Publish", "Update"].map((step, i) => (
                    <g key={step}>
                      <rect x={i * 122 + 2} y={15} width={108} height={38} rx={8} fill="#F3EEE4" stroke="#ECE7DC" />
                      <text x={i * 122 + 56} y={39} textAnchor="middle" fontSize="13" fill="#4D4A99" fontWeight="600">{step}</text>
                      {i < 4 && <line x1={i * 122 + 112} y1={34} x2={i * 122 + 122} y2={34} stroke="#8B879C" strokeWidth="1.5" markerEnd="url(#arr)" />}
                    </g>
                  ))}
                </svg>
              </div>
              <p className="text-sm text-[#59566B] leading-relaxed mb-2">
                Our editorial standards are guided by sleep health research from institutions like the{" "}
                <a href="https://www.sleepfoundation.org" target="_blank" rel="noopener noreferrer" className="text-[#4D4A99] hover:underline">Sleep Foundation</a>{" "}
                and the{" "}
                <a href="https://www.cdc.gov/sleep/index.html" target="_blank" rel="noopener noreferrer" className="text-[#4D4A99] hover:underline">CDC&rsquo;s sleep health resources</a>.
              </p>
              <p className="text-xs text-[#8B879C]">{site.affiliateDisclosure}</p>
            </section>

            {/* Newsletter */}
            <section id="newsletter">
              <div className="rounded-[14px] bg-[#211F2B] text-[#F3EEE4] p-8 md:p-12">
                <p className="eyebrow text-[#A9A6BD] mb-2">Sleep Better Starting Now</p>
                <h2 className="text-2xl font-semibold mb-3">Join the SleepNestPress Newsletter</h2>
                <p className="text-sm text-[#A9A6BD] mb-6 max-w-lg">No fluff, no filler — just practical sleep tips, new guide alerts, and honest product picks, delivered once a week.</p>
                <NewsletterForm />
                <p className="text-xs text-[#8B879C] mt-3">No spam. Unsubscribe anytime.</p>
              </div>
            </section>
          </div>

          <RelatedSidebar
            title="More Nest Picks"
            links={articles.map((a) => ({ href: `/best/${a.slug}`, title: a.title }))}
          />
        </div>
      </div>
    </div>
  );
}
