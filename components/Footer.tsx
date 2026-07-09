import Link from "next/link";
import { Moon } from "lucide-react";
import { site } from "@/data/site";
import { articles } from "@/data/articles";

export default function Footer() {
  return (
    <footer className="bg-[#211F2B] text-[#F3EEE4] mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white mb-3">
            <Moon className="w-5 h-5 text-[#6A67B8]" />
            SleepNestPress
          </Link>
          <p className="text-sm text-[#A9A6BD] leading-relaxed">{site.description}</p>
        </div>

        <div>
          <p className="eyebrow text-[#A9A6BD] mb-3">Nest Picks</p>
          <ul className="space-y-2">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link href={`/best/${a.slug}`} className="text-sm text-[#D8D5E5] hover:text-white transition-colors">
                  {a.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#A9A6BD] mb-3">Explore</p>
          <ul className="space-y-2">
            <li><Link href="/sleep-guides" className="text-sm text-[#D8D5E5] hover:text-white transition-colors">Sleep Guides</Link></li>
            <li><Link href="/the-wind-down" className="text-sm text-[#D8D5E5] hover:text-white transition-colors">The Wind-Down</Link></li>
            <li><Link href="/our-method" className="text-sm text-[#D8D5E5] hover:text-white transition-colors">Our Method</Link></li>
            <li><Link href="/say-goodnight" className="text-sm text-[#D8D5E5] hover:text-white transition-colors">Say Goodnight</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#A9A6BD] mb-3">Legal</p>
          <ul className="space-y-2">
            <li><Link href="/privacy-policy" className="text-sm text-[#D8D5E5] hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm text-[#D8D5E5] hover:text-white transition-colors">Terms of Use</Link></li>
            <li><Link href="/affiliate-disclosure" className="text-sm text-[#D8D5E5] hover:text-white transition-colors">Affiliate Disclosure</Link></li>
          </ul>
          <p className="text-xs text-[#8B879C] mt-4 leading-relaxed">
            {site.address.line1}, {site.address.line2}<br />
            {site.address.city}, {site.address.state} {site.address.zip}<br />
            {site.email}
          </p>
        </div>
      </div>

      <div className="border-t border-[#383548]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-[#8B879C] flex flex-col sm:flex-row justify-between gap-2">
          <p>&copy; 2026 SleepNestPress. All rights reserved.</p>
          <p>As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  );
}
