import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SleepNestPress privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <p className="eyebrow mb-2">Legal</p>
      <h1 className="text-3xl font-bold text-[#211F2B] tracking-tight mb-3">Privacy Policy</h1>
      <p className="text-xs text-[#8B879C] mb-8">Last updated: January 2026</p>

      <div className="space-y-6 text-sm text-[#59566B] leading-relaxed">
        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">Information We Collect</h2>
          <p>When you visit SleepNestPress, we may collect basic analytics data such as page views, referring URLs, browser type, and geographic region. This data is collected in aggregate and is not linked to identifiable individuals. If you submit a contact form or newsletter signup, we collect the information you provide (name, email address).</p>
        </section>

        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">How We Use Information</h2>
          <p>Analytics data is used to understand how readers find and use our content, helping us improve it over time. Contact form submissions are used solely to respond to your inquiry. Newsletter email addresses are used to send our editorial newsletter; we do not sell or share email lists with third parties.</p>
        </section>

        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">Third-Party Links and Amazon</h2>
          <p>Our site contains links to Amazon.com. When you click these links, you leave SleepNestPress and are subject to Amazon&rsquo;s privacy policy and terms. We are not responsible for the privacy practices of third-party sites. As an Amazon Associate, we earn from qualifying purchases made through our links.</p>
        </section>

        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">Cookies</h2>
          <p>We may use basic cookies for analytics purposes. We do not use cookies for advertising tracking or cross-site user profiling. You can disable cookies in your browser settings without affecting your ability to read our content.</p>
        </section>

        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">Data Retention</h2>
          <p>Contact form submissions are retained for as long as necessary to respond to your inquiry. Analytics data is retained in aggregate form with no individual identifiers.</p>
        </section>

        <section>
          <h2 className="font-semibold text-[#211F2B] mb-2">Contact</h2>
          <p>Questions about this policy can be directed to <a href={`mailto:${site.email}`} className="text-[#4D4A99] hover:underline">{site.email}</a>.</p>
        </section>
      </div>
    </div>
  );
}
