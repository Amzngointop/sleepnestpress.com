import Link from "next/link";
import type { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({ href, children, external, className = "", onClick }: CTAButtonProps) {
  if (onClick && !href) {
    return (
      <button type="button" onClick={onClick} className={`cta-3d ${className}`}>
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className={`cta-3d ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`cta-3d ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}
