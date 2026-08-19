import type { LucideIcon } from "lucide-react";
import { Layers, Snowflake, Moon, Bed, ShieldCheck } from "lucide-react";

export interface Article {
  slug: string;
  title: string;
  category: string;
  icon: LucideIcon;
  heroImage: string;
  excerpt: string;
  metaDescription: string;
  minutesToRead: number;
  productCount: number;
}

export const articles: Article[] = [
  {
    slug: "best-pillows",
    title: "Best Pillows for Every Sleep Position (2026)",
    category: "Pillows",
    icon: Layers,
    heroImage: "https://m.media-amazon.com/images/I/71xD6Fe6GEL._AC_SL1500_.jpg",
    excerpt:
      "From cooling shredded foam to contoured cervical support, here's how to match a pillow to the way you actually sleep.",
    metaDescription:
      "Our complete 2026 guide to the best pillows for side, back, stomach, and combination sleepers, with picks for cooling, neck support, and adjustable loft.",
    minutesToRead: 12,
    productCount: 19,
  },
  {
    slug: "best-weighted-cooling-blankets",
    title: "Best Weighted & Cooling Blankets (2026)",
    category: "Blankets",
    icon: Snowflake,
    heroImage: "https://m.media-amazon.com/images/I/61heqwhPQyL._AC_SL1500_.jpg",
    excerpt:
      "Weighted comfort or breathable cooling — these blankets cover both ends of the temperature and pressure spectrum.",
    metaDescription:
      "We review the best weighted and cooling blankets of 2026 for deeper sleep, including options for hot sleepers and those seeking gentle pressure therapy.",
    minutesToRead: 11,
    productCount: 10,
  },
  {
    slug: "best-sleep-masks-earplugs",
    title: "Best Sleep Masks & Earplugs (2026)",
    category: "Masks & Earplugs",
    icon: Moon,
    heroImage: "https://m.media-amazon.com/images/I/71SMSJDNOBL._AC_SL1500_.jpg",
    excerpt:
      "Block out light and noise without the discomfort — contoured masks, silk options, and Bluetooth sleep headphones compared.",
    metaDescription:
      "Find the best sleep masks and earplugs of 2026, including contoured blackout masks, silk eye masks, and Bluetooth sleep headphones for total darkness and quiet.",
    minutesToRead: 10,
    productCount: 12,
  },
  {
    slug: "best-bed-sheets-bedding-sets",
    title: "Best Bed Sheets & Bedding Sets (2026)",
    category: "Sheets & Bedding",
    icon: Bed,
    heroImage: "https://m.media-amazon.com/images/I/61AbPNNxrcL._AC_SL1500_.jpg",
    excerpt:
      "Breathable sheet sets and complete bed-in-a-bag comforter kits for every season and budget tier.",
    metaDescription:
      "Our 2026 roundup of the best bed sheets and bedding sets, from breathable microfiber sheet sets to full bed-in-a-bag comforter collections.",
    minutesToRead: 13,
    productCount: 20,
  },
  {
    slug: "best-mattress-protectors-toppers",
    title: "Best Mattress Protectors & Toppers (2026)",
    category: "Mattress Care",
    icon: ShieldCheck,
    heroImage: "https://m.media-amazon.com/images/I/81YYCJW3PTL._AC_SL1500_.jpg",
    excerpt:
      "Extend the life of your mattress and soften its feel with waterproof protectors and plush toppers.",
    metaDescription:
      "We compare the best mattress protectors and toppers of 2026 for waterproofing, cooling, and added plushness across every mattress size.",
    minutesToRead: 12,
    productCount: 14,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
