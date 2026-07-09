import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { getArticleBySlug } from "@/data/articles";
import CTAButton from "./CTAButton";

export default function ProductCard({ product }: { product: Product }) {
  const article = getArticleBySlug(product.articleSlug);

  return (
    <div className="card overflow-hidden flex flex-col h-full">
      <div className="relative w-full aspect-[4/3] bg-[#F3EEE4]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        {article && <p className="eyebrow-accent mb-2">{article.category}</p>}
        <p className="eyebrow mb-1">{product.badge}</p>
        <Link
          href={`/best/${product.articleSlug}#${product.id}`}
          className="headline-link font-semibold text-[#211F2B] leading-snug mb-2"
        >
          {product.name}
        </Link>
        <p className="text-sm text-[#59566B] leading-relaxed mb-4 flex-1">{product.summary}</p>
        <CTAButton href={product.affiliateUrl} external>
          View on Amazon →
        </CTAButton>
      </div>
    </div>
  );
}
