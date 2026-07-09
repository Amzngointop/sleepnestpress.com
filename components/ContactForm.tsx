"use client";

import { site } from "@/data/site";

export default function ContactForm() {
  return (
    <div className="card p-6">
      <h2 className="font-semibold text-[#211F2B] mb-3">Send a Message</h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#8B879C] uppercase tracking-wide mb-1" htmlFor="name">Name</label>
          <input id="name" type="text" className="w-full px-4 py-2 border border-[#E7E2D8] rounded-[10px] text-sm text-[#211F2B] bg-white focus:outline-none focus:border-[#4D4A99]" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#8B879C] uppercase tracking-wide mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" className="w-full px-4 py-2 border border-[#E7E2D8] rounded-[10px] text-sm text-[#211F2B] bg-white focus:outline-none focus:border-[#4D4A99]" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#8B879C] uppercase tracking-wide mb-1" htmlFor="message">Message</label>
          <textarea id="message" rows={5} className="w-full px-4 py-2 border border-[#E7E2D8] rounded-[10px] text-sm text-[#211F2B] bg-white focus:outline-none focus:border-[#4D4A99] resize-none" placeholder="Your message..." />
        </div>
        <button type="submit" className="cta-3d">Send Message</button>
      </form>
      <p className="text-xs text-[#8B879C] mt-3">This form is for demonstration purposes. To contact us directly, email <a href={`mailto:${site.email}`} className="text-[#4D4A99] hover:underline">{site.email}</a>.</p>
    </div>
  );
}
