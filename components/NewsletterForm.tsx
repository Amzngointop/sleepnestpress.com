"use client";

export default function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 rounded-[10px] bg-[#2E2C3B] border border-[#383548] text-[#F3EEE4] placeholder:text-[#8B879C] text-sm focus:outline-none focus:border-[#4D4A99]"
        aria-label="Email address"
      />
      <button type="submit" className="cta-3d">Subscribe →</button>
    </form>
  );
}
