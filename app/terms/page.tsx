import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "SleepNestPress terms of use.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <p className="eyebrow mb-2">Legal</p>
      <h1 className="text-3xl font-bold text-[#211F2B] tracking-tight mb-3">Terms of Use</h1>
      <p className="text-xs text-[#8B879C] mb-8">Last updated: January 2026</p>

      <div className="space-y-6 text-sm text-[#59566B] leading-relaxed">
        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">Use of Content</h2>
          <p>All content on SleepNestPress, including articles, guides, and imagery, is for informational purposes only. You may not reproduce, redistribute, or republish our content without written permission. Brief quotations with attribution and a link back to the original article are acceptable for editorial or journalistic purposes.</p>
        </section>

        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">No Medical Advice</h2>
          <p>Content on this site is for informational purposes and does not constitute medical or health advice. Sleep disorders, chronic pain, and related conditions should be evaluated by a qualified healthcare provider. Nothing on SleepNestPress should be used as a substitute for professional medical guidance.</p>
        </section>

        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">Affiliate Links and Product Recommendations</h2>
          <p>We participate in the Amazon Associates program and earn commissions on qualifying purchases. Product recommendations represent our editorial opinion and are not guarantees of performance or fitness for any specific purpose. Product availability, specifications, and quality may change over time.</p>
        </section>

        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">Accuracy</h2>
          <p>We make reasonable efforts to ensure the accuracy of information published on this site. However, we make no warranties about completeness, reliability, or accuracy. Information may become outdated as products change or new research emerges.</p>
        </section>

        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">Limitation of Liability</h2>
          <p>SleepNestPress is not liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or the products discussed on it. Use of information on this site is at your own risk.</p>
        </section>

        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">Contact</h2>
          <p>Questions about these terms can be directed to <a href={`mailto:${site.email}`} className="text-[#4D4A99] hover:underline">{site.email}</a>.</p>
        </section>
      </div>
    </div>
  );
}
