export const site = {
  name: "SleepNestPress",
  url: "https://www.sleepnestpress.com",
  description:
    "SleepNestPress reviews pillows, bedding, and sleep accessories to help you build a calmer, cooler, more comfortable bedroom — no fluff, just practical picks for 2026.",
  email: "contact@sleepnestpress.com",
  affiliateTag: "YOURTAG-20",
  address: {
    line1: "118 Driftwood Hollow Lane",
    line2: "Suite 4B",
    city: "Asheville",
    state: "NC",
    zip: "28801",
    country: "USA",
  },
  social: {
    twitter: "https://twitter.com/sleepnestpress",
    pinterest: "https://pinterest.com/sleepnestpress",
    instagram: "https://instagram.com/sleepnestpress",
  },
  affiliateDisclosure:
    "SleepNestPress is reader-supported. As an Amazon Associate, we earn from qualifying purchases made through links on this page, at no extra cost to you. We only recommend products we believe can genuinely improve your sleep.",
} as const;

export function buildAffiliateUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${site.affiliateTag}`;
}
