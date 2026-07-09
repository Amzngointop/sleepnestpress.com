import type { Product } from "@/data/products";

export default function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto card">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#F3EEE4] text-[#211F2B]">
            <th className="px-4 py-3 font-semibold">Product</th>
            <th className="px-4 py-3 font-semibold">Best For</th>
            <th className="px-4 py-3 font-semibold">Key Feature</th>
            <th className="px-4 py-3 font-semibold">Top Con</th>
            <th className="px-4 py-3 font-semibold">Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={p.id} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF6F0]"}>
              <td className="px-4 py-3 border-t border-[#ECE7DC] font-medium text-[#211F2B]">
                <a href={`#${p.id}`} className="headline-link">
                  {p.rank}. {p.name}
                </a>
              </td>
              <td className="px-4 py-3 border-t border-[#ECE7DC] text-[#59566B]">{p.bestFor}</td>
              <td className="px-4 py-3 border-t border-[#ECE7DC] text-[#59566B]">{p.pros[0]}</td>
              <td className="px-4 py-3 border-t border-[#ECE7DC] text-[#59566B]">{p.cons[0]}</td>
              <td className="px-4 py-3 border-t border-[#ECE7DC]">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="text-[#4D4A99] font-semibold hover:underline whitespace-nowrap"
                >
                  View →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
