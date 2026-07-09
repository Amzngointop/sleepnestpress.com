import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ArticleSidebar from "@/components/ArticleSidebar";
import RelatedSidebar from "@/components/RelatedSidebar";
import CTAButton from "@/components/CTAButton";
import { guides } from "@/data/guides";
import { articles } from "@/data/articles";
import { site } from "@/data/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.metaDescription,
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: `${site.url}/guides/${slug}`,
      images: [{ url: guide.heroImage }],
    },
  };
}

const processDiagrams: Record<string, React.ReactNode> = {
  "building-a-sleep-sanctuary": (
    <svg viewBox="0 0 600 120" className="w-full" aria-label="Sleep sanctuary setup steps">
      <defs>
        <marker id="ga" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="#8B879C" />
        </marker>
      </defs>
      {["Temperature", "Darkness", "Quiet", "Bedding", "Air Quality"].map((step, i) => (
        <g key={step}>
          <rect x={i * 118 + 4} y={30} width={106} height={44} rx={8} fill="#F3EEE4" stroke="#ECE7DC" />
          <text x={i * 118 + 57} y={56} textAnchor="middle" fontSize="12" fill="#4D4A99" fontWeight="600">{step}</text>
          {i < 4 && <line x1={i * 118 + 112} y1={52} x2={i * 118 + 120} y2={52} stroke="#8B879C" strokeWidth="1.5" markerEnd="url(#ga)" />}
        </g>
      ))}
      <text x={300} y={18} textAnchor="middle" fontSize="12" fill="#211F2B" fontWeight="600">The Five Elements of a Sleep Sanctuary</text>
    </svg>
  ),
  "hot-sleepers-guide-staying-cool": (
    <svg viewBox="0 0 600 120" className="w-full" aria-label="Cool sleep layer system">
      {[
        { label: "Cooling Sheet", y: 30, fill: "#EDE9F8" },
        { label: "Breathable Blanket", y: 58, fill: "#F3EEE4" },
        { label: "Breathable Topper", y: 86, fill: "#ECE7DC" },
      ].map(({ label, y, fill }) => (
        <g key={label}>
          <rect x={100} y={y} width={400} height={22} rx={5} fill={fill} stroke="#ECE7DC" />
          <text x={300} y={y + 15} textAnchor="middle" fontSize="12" fill="#211F2B">{label}</text>
        </g>
      ))}
      <text x={300} y={18} textAnchor="middle" fontSize="12" fill="#211F2B" fontWeight="600">Cooling Bed Layer System</text>
    </svg>
  ),
  "sleep-hygiene-101": (
    <svg viewBox="0 0 600 120" className="w-full" aria-label="Sleep hygiene routine">
      <defs>
        <marker id="sha" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="#8B879C" />
        </marker>
      </defs>
      {["Wind-Down", "No Screens", "Cool Room", "Dark + Quiet", "Consistent Time"].map((step, i) => (
        <g key={step}>
          <rect x={i * 118 + 4} y={35} width={106} height={44} rx={8} fill="#F3EEE4" stroke="#ECE7DC" />
          <text x={i * 118 + 57} y={61} textAnchor="middle" fontSize="11" fill="#4D4A99" fontWeight="600">{step}</text>
          {i < 4 && <line x1={i * 118 + 112} y1={57} x2={i * 118 + 120} y2={57} stroke="#8B879C" strokeWidth="1.5" markerEnd="url(#sha)" />}
        </g>
      ))}
      <text x={300} y={20} textAnchor="middle" fontSize="12" fill="#211F2B" fontWeight="600">Nightly Sleep Hygiene Routine</text>
    </svg>
  ),
  "layer-your-bed-like-a-hotel": (
    <svg viewBox="0 0 500 150" className="w-full" aria-label="Hotel bed layering diagram">
      {[
        { label: "Top Blanket or Duvet Cover", y: 30, fill: "#EDE9F8" },
        { label: "Duvet / Comforter", y: 58, fill: "#F3EEE4" },
        { label: "Flat Sheet", y: 86, fill: "#ECE7DC" },
        { label: "Fitted Sheet + Mattress Pad", y: 114, fill: "#E2DDD3" },
      ].map(({ label, y, fill }) => (
        <g key={label}>
          <rect x={60} y={y} width={380} height={22} rx={4} fill={fill} stroke="#ECE7DC" />
          <text x={250} y={y + 15} textAnchor="middle" fontSize="11" fill="#211F2B">{label}</text>
        </g>
      ))}
      <text x={250} y={18} textAnchor="middle" fontSize="12" fill="#211F2B" fontWeight="600">Hotel Bed Layer Order (Top to Bottom)</text>
    </svg>
  ),
  "understanding-sleep-cycles": (
    <svg viewBox="0 0 600 130" className="w-full" aria-label="Sleep cycle diagram">
      {[
        { stage: "Awake", h: 10, fill: "#EDE9F8" },
        { stage: "Light Sleep", h: 30, fill: "#D8D5E5" },
        { stage: "Deep Sleep", h: 60, fill: "#4D4A99" },
        { stage: "REM", h: 45, fill: "#6A67B8" },
        { stage: "Light Sleep", h: 25, fill: "#D8D5E5" },
      ].map(({ stage, h, fill }, i) => (
        <g key={`${stage}-${i}`}>
          <rect x={i * 115 + 10} y={115 - h} width={100} height={h} rx={4} fill={fill} opacity={0.8} />
          <text x={i * 115 + 60} y={125} textAnchor="middle" fontSize="10" fill="#59566B">{stage}</text>
        </g>
      ))}
      <text x={300} y={18} textAnchor="middle" fontSize="12" fill="#211F2B" fontWeight="600">A Simplified Sleep Cycle</text>
      <line x1={10} y1={20} x2={10} y2={115} stroke="#E7E2D8" strokeWidth="1" />
      <line x1={10} y1={115} x2={590} y2={115} stroke="#E7E2D8" strokeWidth="1" />
    </svg>
  ),
  "weighted-blankets-explained": (
    <svg viewBox="0 0 500 120" className="w-full" aria-label="Weighted blanket weight selection">
      <text x={250} y={18} textAnchor="middle" fontSize="12" fill="#211F2B" fontWeight="600">Weight Selection by Body Weight</text>
      {[
        { range: "Under 120 lbs", weight: "10 lbs", x: 10 },
        { range: "120–150 lbs", weight: "12–15 lbs", x: 135 },
        { range: "150–200 lbs", weight: "15–20 lbs", x: 260 },
        { range: "Over 200 lbs", weight: "20–25 lbs", x: 385 },
      ].map(({ range, weight, x }) => (
        <g key={range}>
          <rect x={x} y={30} width={115} height={70} rx={10} fill="#F3EEE4" stroke="#ECE7DC" />
          <text x={x + 57} y={58} textAnchor="middle" fontSize="10" fill="#59566B">{range}</text>
          <text x={x + 57} y={78} textAnchor="middle" fontSize="13" fill="#4D4A99" fontWeight="700">{weight}</text>
        </g>
      ))}
    </svg>
  ),
};

function renderBody(body: string) {
  const paragraphs = body.trim().split(/\n\n+/);
  return paragraphs.map((para, i) => {
    if (para.startsWith("## ")) {
      return <h2 key={i} className="text-xl font-semibold text-[#211F2B] mt-8 mb-3">{para.slice(3)}</h2>;
    }
    if (para.startsWith("### ")) {
      return <h3 key={i} className="font-semibold text-[#211F2B] mt-5 mb-2">{para.slice(4)}</h3>;
    }
    if (para.startsWith("- ")) {
      const items = para.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="list-disc list-inside space-y-1 text-sm text-[#59566B] mb-4">
          {items.map((item, j) => <li key={j}>{item.slice(2)}</li>)}
        </ul>
      );
    }
    return <p key={i} className="text-[#59566B] text-sm leading-relaxed mb-4">{para}</p>;
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const otherGuides = guides.filter((g) => g.slug !== slug);
  const relatedArticles = articles.filter((a) => guide.relatedArticleSlugs.includes(a.slug));

  const sections = guide.body
    .split(/\n\n+/)
    .filter((p) => p.startsWith("## "))
    .map((p, i) => ({ id: `section-${i}`, label: p.slice(3) }));

  const inThisGuideLinks = [
    { id: "intro", label: "Introduction" },
    ...sections,
    { id: "further-reading", label: "Further Reading" },
  ];

  const diagram = processDiagrams[slug];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex gap-10">
        <ArticleSidebar title="In This Guide" links={inThisGuideLinks} />

        <article className="flex-1 min-w-0">
          <nav className="text-xs text-[#8B879C] mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            {" › "}
            <Link href="/sleep-guides" className="hover:underline">Sleep Guides</Link>
            {" › "}
            <span>{guide.category}</span>
          </nav>

          <p className="eyebrow-accent mb-2">{guide.category}</p>
          <h1 className="text-3xl font-bold text-[#211F2B] tracking-tight mb-3">{guide.title}</h1>
          <p className="text-sm text-[#8B879C] mb-4">{guide.publishedLabel} · {guide.minutesToRead} min read</p>
          <p className="text-[#59566B] leading-relaxed mb-6">{guide.excerpt}</p>

          <div className="relative w-full h-[420px] mb-8 rounded-[14px] overflow-hidden">
            <Image src={guide.heroImage} alt={guide.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 700px" />
          </div>

          <div id="intro" className="prose-like">
            {renderBody(guide.body)}
          </div>

          {diagram && (
            <div className="card p-6 my-8">
              {diagram}
            </div>
          )}

          <div className="bg-[#F3EEE4] border-l-4 border-[#4D4A99] rounded-r-[14px] p-4 my-6">
            <p className="text-xs font-semibold text-[#4D4A99] uppercase tracking-wide mb-1">Key Takeaway</p>
            <p className="text-sm text-[#59566B]">Small, consistent changes to your sleep environment tend to have a cumulative effect. Start with one element from this guide and give it two weeks before adding another. Trying to change everything at once makes it harder to identify what&rsquo;s actually helping.</p>
          </div>
          <div className="bg-[#F3EEE4] border-l-4 border-[#4D4A99] rounded-r-[14px] p-4 my-6">
            <p className="text-xs font-semibold text-[#4D4A99] uppercase tracking-wide mb-1">Authoritative Sources</p>
            <p className="text-sm text-[#59566B]">The guidance in this article is informed by research from the{" "}
              <a href="https://www.sleepfoundation.org" target="_blank" rel="noopener noreferrer" className="text-[#4D4A99] hover:underline">Sleep Foundation</a>{" "}
              and sleep health publications from the{" "}
              <a href="https://www.nih.gov/health-information/sleep-disorders" target="_blank" rel="noopener noreferrer" className="text-[#4D4A99] hover:underline">National Institutes of Health</a>.
            </p>
          </div>

          {/* Further Reading */}
          <section id="further-reading" className="mt-10">
            <h2 className="text-xl font-semibold text-[#211F2B] mb-4">Further Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((a) => (
                <Link key={a.slug} href={`/best/${a.slug}`} className="card p-4 hover:border-[#4D4A99] transition-colors">
                  <p className="eyebrow mb-1">{a.category}</p>
                  <p className="font-semibold text-[#211F2B] text-sm headline-link">{a.title}</p>
                </Link>
              ))}
              {otherGuides.slice(0, 2).map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="card p-4 hover:border-[#4D4A99] transition-colors">
                  <p className="eyebrow mb-1">{g.category}</p>
                  <p className="font-semibold text-[#211F2B] text-sm headline-link">{g.title}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>

        <RelatedSidebar
          title="More Guides"
          links={otherGuides.map((g) => ({ href: `/guides/${g.slug}`, title: g.title }))}
        />
      </div>
    </div>
  );
}
