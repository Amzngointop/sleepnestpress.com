import Link from "next/link";

export interface RelatedLink {
  href: string;
  title: string;
}

export default function RelatedSidebar({
  title,
  links,
}: {
  title: string;
  links: RelatedLink[];
}) {
  return (
    <aside className="hidden lg:block sticky top-24 self-start w-64 shrink-0">
      <div className="card p-5">
        <p className="eyebrow mb-4">{title}</p>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.href} className="pb-3 border-b border-[#ECE7DC] last:border-b-0 last:pb-0">
              <Link href={link.href} className="headline-link text-sm font-semibold text-[#211F2B] leading-snug">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
