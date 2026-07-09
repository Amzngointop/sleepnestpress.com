import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "SleepNestPress affiliate disclosure — how we earn commissions and how that affects our recommendations.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <p className="eyebrow mb-2">Legal</p>
      <h1 className="text-3xl font-bold text-[#211F2B] tracking-tight mb-3">Affiliate Disclosure</h1>
      <p className="text-xs text-[#8B879C] mb-8">Last updated: January 2026</p>

      <div className="space-y-6 text-sm text-[#59566B] leading-relaxed">
        <p>SleepNestPress (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>

        <p>This means that when you click a product link on our site and make a purchase on Amazon, we may receive a small commission. This happens at no additional cost to you — the price you pay is the same whether or not you arrived via our link.</p>

        <p>We only include affiliate links for products we genuinely believe are worth recommending. Affiliate commissions do not influence which products we recommend, how we rank them, or what we write about them. Products are selected and ranked based on our editorial assessment of quality, suitability, and value — not on commission rates or manufacturer relationships.</p>

        <p>Our affiliate tag is <code className="text-[#4D4A99] bg-[#F3EEE4] px-1 rounded">YOURTAG-20</code>. This tag may appear in product links throughout our site.</p>

        <p>In accordance with FTC guidelines on endorsements and testimonials, we disclose our affiliate relationship prominently on any page that contains affiliate links. The disclosure appears near the top of those pages.</p>

        <p>If you have questions about our affiliate relationships or editorial standards, please contact us at <a href={`mailto:${site.email}`} className="text-[#4D4A99] hover:underline">{site.email}</a>.</p>
      </div>
    </div>
  );
}
