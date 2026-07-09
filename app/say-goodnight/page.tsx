import type { Metadata } from "next";
import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Say Goodnight — Contact Us",
  description: "Get in touch with the SleepNestPress editorial team for questions, corrections, or partnership inquiries.",
  openGraph: { title: `Say Goodnight | ${site.name}`, description: "Contact the SleepNestPress team.", url: `${site.url}/say-goodnight` },
};

export default function SayGoodnightPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
      <p className="eyebrow-accent mb-2">Contact</p>
      <h1 className="text-3xl font-bold text-[#211F2B] tracking-tight mb-3">Say Goodnight</h1>
      <p className="text-[#59566B] leading-relaxed mb-10">Questions, corrections, or just want to talk sleep? We&rsquo;re happy to hear from you.</p>

      <div className="space-y-8">
        <div className="card p-6">
          <h2 className="font-semibold text-[#211F2B] mb-3">Editorial Inquiries</h2>
          <p className="text-sm text-[#59566B] mb-2">For corrections, content questions, or feedback on our reviews:</p>
          <a href={`mailto:${site.email}`} className="text-[#4D4A99] hover:underline font-semibold">{site.email}</a>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[#211F2B] mb-3">Mailing Address</h2>
          <address className="text-sm text-[#59566B] not-italic leading-relaxed">
            {site.address.line1}<br />
            {site.address.line2}<br />
            {site.address.city}, {site.address.state} {site.address.zip}<br />
            {site.address.country}
          </address>
          <p className="text-xs text-[#8B879C] mt-2">Note: We are a digital publication and do not have walk-in hours.</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[#211F2B] mb-3">Partnership Inquiries</h2>
          <p className="text-sm text-[#59566B]">We do not accept payment for product placement or rankings. For other editorial partnership questions, reach us at <a href={`mailto:${site.email}`} className="text-[#4D4A99] hover:underline">{site.email}</a>.</p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
