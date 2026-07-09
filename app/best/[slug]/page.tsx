import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { XCircle } from "lucide-react";
import ArticleSidebar from "@/components/ArticleSidebar";
import RelatedSidebar from "@/components/RelatedSidebar";
import ComparisonTable from "@/components/ComparisonTable";
import AccordionSection from "@/components/AccordionSection";
import FAQ from "@/components/FAQ";
import CTAButton from "@/components/CTAButton";
import { articles, getArticleBySlug } from "@/data/articles";
import { products } from "@/data/products";
import { site } from "@/data/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `${site.url}/best/${slug}`,
      images: [{ url: article.heroImage }],
    },
  };
}

const buyingGuides: Record<string, { intro: string; sections: { h3: string; body: string }[] }> = {
  "best-pillows": {
    intro: "Choosing a pillow is one of the most personal decisions in sleep setup, because the right fill, loft, and firmness varies significantly based on how you sleep.",
    sections: [
      { h3: "Loft and Sleep Position", body: "Side sleepers typically need the most loft — the higher gap between the ear and the mattress requires more fill to keep the spine neutral. Back sleepers usually do best with medium loft that supports the natural cervical curve without pushing the chin toward the chest. Stomach sleepers need the least loft; a thick pillow in this position hyperextends the neck and can cause morning stiffness. Combination sleepers, who shift positions throughout the night, often benefit from an adjustable pillow that can be tuned somewhere in the middle." },
      { h3: "Fill Types Compared", body: "Down alternative polyester fill is the most affordable and easiest to care for, and it works well for sleepers who prefer a soft, cloud-like feel. Shredded memory foam provides more responsive support and is adjustable in most cases — you can remove fill to reduce loft or add it back to increase firmness. Solid memory foam and contoured cervical designs are best for sleepers with specific neck alignment needs, since they maintain a consistent shape throughout the night rather than compressing under weight." },
      { h3: "Cooling and Temperature Regulation", body: "Pillow temperature can significantly affect sleep quality, particularly for hot sleepers. Shredded foam allows more airflow than solid foam blocks, and many cooling pillows incorporate phase-change materials or gel layers to actively draw heat away from the head. Cover fabrics also matter — a tightly woven polyester shell holds heat, while a more open-knit or bamboo-derived fabric breathes better. If you tend to wake up sweaty or frequently flip the pillow to find the cool side, prioritize breathability in both the fill and the cover." },
      { h3: "Washability and Long-Term Care", body: "Most down alternative pillows are machine washable, which makes hygiene maintenance straightforward. Shredded memory foam pillows typically have a removable, washable cover but cannot be put in a washing machine whole — check for zippered covers you can launder separately. Solid foam pillows should only be spot-cleaned. Regardless of fill type, a protective pillowcase and regular cover washing (every one to two weeks) significantly extends the life of your pillow." },
    ],
  },
  "best-weighted-cooling-blankets": {
    intro: "The choice between a weighted blanket and a cooling blanket often comes down to a single question: does your sleep feel restless or does it feel hot? Both options improve sleep quality, but through very different mechanisms.",
    sections: [
      { h3: "How Weighted Blankets Work", body: "Weighted blankets apply distributed pressure across the body, a concept sometimes called deep pressure stimulation. Research published in occupational therapy journals has shown that this type of pressure can reduce the activity of the sympathetic nervous system — the fight-or-flight response — and increase feelings of calm. The result for many sleepers is a slower transition into sleep and more restful night overall. Weighted blankets are generally recommended at 8-12% of your body weight, though personal preference plays a large role." },
      { h3: "Cooling Blanket Materials", body: "Cooling blankets are designed to minimize heat retention rather than actively cool the body, which is an important distinction. They accomplish this through open weaves (waffle or mesh patterns), natural fibers like cotton or bamboo-derived viscose that wick moisture, and in some cases high-tech materials with a Q-Max rating — a measurement of the cooling contact sensation. A blanket with a Q-Max of 0.4 or higher is considered significantly cooling to the touch. These work best for sleepers who run warm throughout the night rather than those who experience brief hot flashes." },
      { h3: "Size and Weight Selection", body: "For weighted blankets, size matters more than for standard blankets. A weighted blanket should cover only the person using it — if it hangs over the edge of the bed, the overhang reduces the effective weight distributed over the body. Twin and smaller throws work well for single sleepers; couples sharing a bed often benefit from two individual weighted blankets rather than one large shared one. For cooling blankets, standard bed sizes apply, and adding extra length (a queen blanket on a full bed, for example) gives you more tuck-in room." },
      { h3: "Care and Durability", body: "Glass bead fill in weighted blankets can be damaged by high-spin washing machine cycles, so most manufacturers recommend a gentle cycle with cold water or hand washing for heavier blankets. Many weighted blankets over 15 lbs are too large for home washing machines and may require a commercial machine. Cooling blankets made from cotton or waffle weave are generally easier to care for and can typically be washed in cold water on a normal cycle without special handling." },
    ],
  },
  "best-sleep-masks-earplugs": {
    intro: "Light and sound are two of the most common sleep disruptors, and sleep masks and earplugs address each directly — often with a bigger impact than people expect.",
    sections: [
      { h3: "Contoured vs. Flat Masks", body: "Flat fabric masks are simple and inexpensive, but they press directly against the eyelids, which many sleepers find uncomfortable over a full night. Contoured or 3D masks build a cup around the eye area, creating a dark space without contact pressure. This design is especially beneficial for REM sleep, when rapid eye movement occurs — a flat mask pressing on the eyes during this phase can disrupt the movement and potentially fragment this sleep stage. For side sleepers, look for a contoured mask with a low-profile nose bridge that doesn't shift out of position when your face presses into a pillow." },
      { h3: "Materials and Breathability", body: "Synthetic masks are durable and easy to clean, but natural silk is often preferred for its smooth texture and temperature-neutral properties. A silk mask doesn't cling to hair or skin the way a stiffer fabric might, which reduces mask displacement during sleep. Breathability is also worth considering — a mask that traps heat around the face can contribute to discomfort, particularly for hot sleepers. Many contoured masks use an open-cell foam shell that maintains airflow around the eye area even when the outer shell is fully light-blocking." },
      { h3: "Adjustability and Strap Design", body: "An adjustable elastic strap is essential for both fit and longevity. Too tight, and the mask creates pressure around the head; too loose, and it slides off during the night. Velcro adjusters are easy to use but can snag hair over time. Buckle-style adjusters are gentler on hair but require more dexterity to set. Some masks use a wrap-around design that distributes strap pressure across a wider band, which many sleepers find more comfortable over long periods. If you run particularly hot at night, look for a mask with a sweat-wicking strap." },
      { h3: "Bluetooth Sleep Headphones", body: "Sleep headphones built into a mask offer a meaningful upgrade for sleepers who use audio — white noise, sleep meditations, or ambient sound — as part of their wind-down. Traditional earbuds become uncomfortable quickly for side sleepers. Flat speakers embedded in a soft headband apply no pressure to the ear canal and can usually be adjusted laterally to position the driver directly over the ear. Battery life and sound quality vary significantly between options, and the padding around the speakers affects whether you feel the hardware against your head during the night." },
    ],
  },
  "best-bed-sheets-bedding-sets": {
    intro: "Sheets and bedding sets have more impact on sleep temperature and tactile comfort than almost any other bedding choice. Understanding materials helps you match them to your actual sleep environment.",
    sections: [
      { h3: "Microfiber vs. Natural Fibers", body: "Microfiber sheets are made from extremely fine synthetic polyester threads, which creates a soft, silky feel at a lower cost than natural alternatives. They're wrinkle-resistant and easy to care for, but they don't breathe as efficiently as natural fibers — something that becomes relevant during warmer months or for hot sleepers year-round. Cotton percale and sateen weaves offer better airflow and moisture wicking, while bamboo-derived viscose and Tencel fabrics are often described as cool-to-the-touch and are particularly well-suited to temperature-sensitive sleepers." },
      { h3: "Weave Type and Feel", body: "The weave pattern determines how the fabric feels and how it performs thermally. Percale is a plain, one-over-one-under weave that produces a crisp, cool finish — it feels similar to a well-worn button-down shirt. Sateen uses a more complex weave that puts more thread surface on top, creating a smoother, slightly warmer finish. Waffle weave creates a textured, grid-like fabric with more air pockets, making it inherently more breathable. Jersey knit sheets have a stretchy, T-shirt-like feel that many sleepers find casually comfortable, though they tend to pill more quickly than woven alternatives." },
      { h3: "Complete Bedding Sets vs. Individual Sheets", body: "A complete bed-in-a-bag set offers convenience — you get the comforter, sheets, and pillowcases in a coordinated package. This is practical for outfitting a guest room, a college dorm, or a new home quickly. The trade-off is that the components are designed to be visually matched rather than functionally optimized, so if you run hot and want a lightweight blanket paired with a specific sheet fabric, you'll have more flexibility building the bed layer by layer. That said, many complete sets use consistent material quality throughout and represent good value for straightforward bedroom setups." },
      { h3: "Caring for Sheets", body: "Most microfiber and cotton-blend sheets can be washed in warm water on a normal cycle, but high heat in the dryer accelerates fiber breakdown and can cause shrinkage in natural fabrics. Tumble dry on low or medium heat and remove sheets while slightly damp to reduce wrinkles without ironing. Avoid washing sheets with items that have hooks or rough surfaces, which can snag delicate weaves. Natural fiber sheets, particularly percale cotton and bamboo-derived viscose, often soften and improve with repeated washing, so don't judge their final feel from the first use." },
    ],
  },
  "best-mattress-protectors-toppers": {
    intro: "Mattress protectors and toppers serve different purposes, but both significantly affect how your sleep surface performs night after night.",
    sections: [
      { h3: "Protectors vs. Toppers: Key Differences", body: "A mattress protector is primarily a defense layer — it shields against spills, sweat, dust mites, and general wear without significantly altering the feel of the mattress. Most are thin (around 1cm or less) and designed to be as unobtrusive as possible. A mattress topper, by contrast, is designed to change the feel and often the firmness of the sleep surface — adding softness over a firm mattress, or adding breathable cushioning over a flat platform bed. The two are not interchangeable; if you need both waterproofing and additional plushness, look for a quilted mattress pad that combines elements of both." },
      { h3: "Waterproofing and Breathability", body: "The waterproofing layer in mattress protectors is typically a thin membrane of polyurethane bonded to the fabric surface. The quality of this membrane determines both effectiveness and breathability — cheaper protectors use a thicker, less permeable membrane that can feel plasticky and retain heat, while better options use a microporous membrane that blocks liquid while allowing vapor to pass through. If you've ever heard a crinkling sound from a mattress protector as you move, it's usually the result of a lower-quality membrane. Higher-end options use a softened laminate that's effectively silent." },
      { h3: "Topper Fill and Firmness", body: "Memory foam toppers provide pressure relief and body contouring but tend to retain heat and have a slow response time — meaning the foam doesn't spring back quickly when you shift positions. Fiber-fill or down-alternative toppers are lighter and more breathable, with a fluffier, pillow-top feel. Bamboo-derived or cotton fill toppers offer the best breathability for hot sleepers. Latex toppers (natural or synthetic) are a middle ground — more responsive than memory foam and naturally resistant to dust mites, though they're heavier and more expensive than fiber alternatives." },
      { h3: "Fit and Deep Pocket Sizing", body: "Fit is one of the most important practical factors in a mattress protector or topper. Most standard mattress protectors are designed for mattresses up to 12 inches deep, but modern mattresses, especially those with pillow-top layers, can be 14 to 16 inches or more. A protector that doesn't reach the underside of the mattress will shift during the night, which both reduces protection and creates an uneven sleep surface. Always check the depth range on a protector before buying, and size up rather than down if your mattress is on the boundary." },
    ],
  },
};

const faqsBySlug: Record<string, { question: string; answer: string }[]> = {
  "best-pillows": [
    { question: "How often should I replace my pillow?", answer: "Most pillows should be replaced every 1-2 years. Down alternative fill compresses over time and loses its supportive loft. Memory foam pillows generally last 2-3 years. A simple test: fold the pillow in half — if it doesn't spring back, it's time to replace it." },
    { question: "What loft is right for side sleepers?", answer: "Side sleepers typically need a high-loft pillow, usually 4-6 inches, to fill the gap between the ear and the mattress and keep the spine aligned. Shoulder width also plays a role — broader shoulders generally need more loft to bridge the gap." },
    { question: "Are memory foam pillows good for hot sleepers?", answer: "Solid memory foam can retain heat, but shredded memory foam allows better airflow between the pieces. If you sleep hot, look for a shredded foam pillow with a breathable cover fabric, or choose a pillow specifically designed with cooling technology like gel infusion or phase-change materials." },
    { question: "Can I wash my memory foam pillow?", answer: "Solid memory foam pillows cannot be machine washed — the agitation and moisture damage the foam structure. Shredded foam pillows usually have a removable, washable cover but should only be spot-cleaned inside. Down alternative pillows are typically fully machine washable, which makes them easier to maintain." },
    { question: "What pillow firmness is right for back sleepers?", answer: "Back sleepers generally do best with a medium-firm pillow that supports the natural inward curve of the neck without pushing the head too far forward. A pillow that's too soft collapses under the weight of the head; one that's too firm lifts the head into an unnatural forward position." },
    { question: "How do I choose between adjustable and non-adjustable pillows?", answer: "Adjustable pillows are ideal for sleepers who haven't found the right loft yet, share a bed with a partner who has different needs, or switch sleep positions frequently. Non-adjustable pillows are often more durable and consistent, since there's no fill migration or zipper failure over time." },
  ],
  "best-weighted-cooling-blankets": [
    { question: "What weight weighted blanket should I choose?", answer: "The commonly recommended guideline is 8-12% of your body weight, though this is a starting point rather than a strict rule. If you're between sizes, most sleep experts recommend starting lighter — it's easier to adapt to a blanket that's slightly too light than one that feels oppressive. A 15-lb blanket is a popular starting point for adults in the 130-180 lb range." },
    { question: "Can a weighted blanket make you too hot?", answer: "Yes — most weighted blankets use glass bead fill sewn into pocketed layers, and the extra mass and density can retain more heat than a standard blanket. If you're a hot sleeper but want the pressure benefits, look for a weighted blanket made from breathable cotton rather than polyester minky or fleece fabric. Some brands also offer cooling-weighted hybrid blankets." },
    { question: "Are weighted blankets safe for everyone?", answer: "Weighted blankets are generally safe for adults and older children, but they're not recommended for young children under 2 years, people who have difficulty repositioning themselves during sleep, or those with certain respiratory conditions. Consult a healthcare provider if you have any underlying conditions before using a weighted blanket." },
    { question: "How do cooling blankets actually work?", answer: "Cooling blankets work by minimizing heat retention rather than actively lowering temperature. Open weaves, breathable natural fibers, and in some cases high-tech fabrics with a high Q-Max rating create a cooler contact sensation. A blanket with Q-Max 0.4 or higher is considered significantly cooling to the touch — the measurement reflects how quickly the fabric draws heat away from skin on initial contact." },
    { question: "Can I use a weighted blanket with a duvet cover?", answer: "Yes — many weighted blankets are designed to be used with a removable cover, similar to a duvet. This makes washing easier, since the cover can be laundered regularly while the inner blanket is washed less frequently. Check whether your weighted blanket has loops at the corners for attaching a cover, and look for duvet covers designed for the appropriate weight range." },
  ],
  "best-sleep-masks-earplugs": [
    { question: "Do sleep masks actually improve sleep quality?", answer: "Research supports that reducing light exposure during sleep improves sleep quality. A 2017 study published in the Journal of Sleep Research found that light exposure during sleep was associated with poorer sleep architecture and increased nighttime awakenings. A well-fitted, fully light-blocking mask removes one of the most common disruptors, particularly for people in light-polluted urban areas or those who sleep during daylight hours." },
    { question: "What's the best sleep mask for side sleepers?", answer: "Side sleepers need a mask that doesn't shift out of position when the face is pressed into a pillow, and that doesn't press uncomfortably on the eye area from the side. Contoured 3D masks that cup away from the eyelids are generally best, combined with an adjustable strap that can be fitted snugly without creating too much pressure at the back of the head." },
    { question: "How do I clean a sleep mask?", answer: "Most sleep masks can be hand washed with mild soap and cool water. Silk masks should be washed with a gentle, silk-safe detergent and never wrung out — press between clean towels to remove moisture, then air dry flat. Avoid machine washing unless the manufacturer specifically states it's safe. Regular cleaning every 1-2 weeks helps reduce bacteria and oil buildup on the contact surface." },
    { question: "Are Bluetooth sleep headphones worth it for side sleepers?", answer: "Bluetooth sleep headphones built into a soft headband eliminate the discomfort of traditional earbuds for side sleepers, since the flat speakers don't protrude into the ear. The main trade-offs are battery life (typically 6-10 hours, which covers most sleep periods) and sound quality compared to higher-end earphones. For white noise, sleep meditations, or ambient audio, the quality is generally adequate." },
    { question: "Can a sleep mask help with jet lag?", answer: "Sleep masks are an effective tool for managing light exposure during travel and jet lag recovery. By blocking light during the target sleep window, a mask helps reinforce the new sleep schedule faster. Pairing a sleep mask with deliberate light exposure during waking hours is one of the most effective non-pharmacological approaches to jet lag management." },
  ],
  "best-bed-sheets-bedding-sets": [
    { question: "What thread count should I look for in sheets?", answer: "Thread count alone is an unreliable quality indicator. Manufacturers sometimes inflate thread count by counting each ply of a multi-ply thread separately. A well-made single-ply percale sheet at 200-400 thread count often outperforms a 1000-thread-count sheet made from multi-ply yarn. Focus on material quality and weave type alongside thread count rather than using it as the primary metric." },
    { question: "Are microfiber sheets good for hot sleepers?", answer: "Microfiber is generally less breathable than natural fibers like cotton or bamboo-derived viscose, which makes it a less ideal choice for hot sleepers. That said, some microfiber sheets are woven in patterns that improve airflow, and the lightweight feel can help compensate for reduced breathability. If you tend to sleep warm, prioritize percale cotton, linen, or bamboo-derived fabrics over standard microfiber." },
    { question: "What does 'Oeko-Tex certified' mean for sheets?", answer: "Oeko-Tex Standard 100 certification means the fabric has been tested for harmful substances including heavy metals, pesticides, formaldehyde, and certain dyes, and that none of these were found at concerning levels. It doesn't certify organic farming practices, but it does confirm the finished product is safe for skin contact — a relevant consideration given how much direct skin contact sheets have during sleep." },
    { question: "How should I wash new sheets for the first time?", answer: "Wash new sheets before the first use to remove manufacturing residue and any finishing chemicals applied during production. Use warm water and a mild detergent, and tumble dry on low to medium heat. If the sheets feel stiff after washing, a second wash often softens them significantly. Natural fiber sheets, particularly percale cotton, typically continue to soften and improve over the first several washes." },
    { question: "Is a complete bedding set or individual pieces a better value?", answer: "For a guest room or new setup where you need everything at once, a complete bed-in-a-bag set offers convenience and coordinated styling. For everyday use, building layers individually usually allows you to optimize each element — choosing sheets that breathe well independently of the comforter weight, for example. Both approaches can represent good value depending on your priorities." },
    { question: "How often should sheets be washed?", answer: "Sleep health organizations generally recommend washing sheets every one to two weeks. If you sweat heavily during sleep, have allergies, or share the bed with pets, weekly washing is more appropriate. Pillowcases accumulate oil and bacteria more quickly than flat or fitted sheets, so some sleepers change pillowcases more frequently than the full sheet set." },
  ],
  "best-mattress-protectors-toppers": [
    { question: "Do mattress protectors affect how the mattress feels?", answer: "A thin, waterproof mattress protector should have minimal effect on mattress feel when correctly sized and made from a quality membrane. Quilted mattress pads and thicker toppers, by contrast, are designed to change the feel of the sleep surface. If feel preservation is your priority, look for a fitted protector with a thin polyurethane membrane rather than a thick quilted pad." },
    { question: "What's the difference between a mattress pad and a mattress topper?", answer: "These terms are often used interchangeably, but there's a functional distinction. A mattress pad is typically thin (1-2 inches), quilted, and primarily serves protection and minor feel enhancement. A mattress topper is thicker (2-4+ inches) and is specifically designed to significantly change the feel or firmness of the sleep surface. A mattress protector is different from both — it prioritizes waterproofing and hygiene over feel modification." },
    { question: "Can a mattress topper fix a mattress that's too firm?", answer: "A memory foam or fiber-fill topper can meaningfully soften a firm mattress and relieve pressure points. However, a topper can't fix a mattress that has developed structural problems like sagging or worn-out springs. If your mattress has body impressions deeper than 1 inch or you're experiencing back pain from uneven support, a topper may not be sufficient and the underlying mattress may need replacement." },
    { question: "Are bamboo mattress protectors actually cooler?", answer: "Bamboo-derived fabrics (typically viscose or rayon from bamboo) are generally more breathable and moisture-wicking than standard polyester, which can make a bamboo-faced mattress protector feel cooler than a standard one. However, the polyurethane waterproofing layer beneath the fabric limits breathability regardless of the facing material. The cooling effect is real but modest compared to, for example, switching to a more breathable sheet set." },
    { question: "How do I keep a mattress topper from sliding?", answer: "Toppers shift because they're compressed against the mattress during movement. Fitted toppers with elastic straps at the corners stay in place much better than flat toppers that rely on friction alone. Using a fitted sheet or mattress cover over the topper also holds it in position. Some toppers have a non-slip backing specifically to reduce migration." },
  ],
};

const diagramsBySlug: Record<string, React.ReactNode> = {
  "best-pillows": (
    <div>
      <p className="text-center text-sm font-semibold text-[#211F2B] mb-4">Pillow Loft by Sleep Position</p>
      <div className="grid grid-cols-4 gap-3">
        {[
          { position: "Stomach", loft: "Low Loft" },
          { position: "Back", loft: "Medium Loft" },
          { position: "Side", loft: "High Loft" },
          { position: "Combo", loft: "Adjustable" },
        ].map(({ position, loft }) => (
          <div key={position} className="rounded-2xl bg-[#F3EEE4] border border-[#ECE7DC] px-3 py-4 min-h-[76px] flex flex-col justify-center items-center text-center gap-1">
            <span className="font-semibold text-sm text-[#211F2B]">{position}</span>
            <span className="text-xs text-[#8B879C]">{loft}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  "best-weighted-cooling-blankets": (
    <div>
      <p className="text-center text-sm font-semibold text-[#211F2B] mb-4">Which Type Is Right for You?</p>
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Weighted Blanket", items: ["Restless sleep", "Anxiety at bedtime", "Run cold or neutral"] },
          { title: "Cooling Blanket", items: ["Run hot overnight", "Night sweats", "Warm climate"] },
        ].map(({ title, items }) => (
          <div key={title} className="rounded-2xl bg-[#F3EEE4] border border-[#ECE7DC] px-5 py-4">
            <p className="font-semibold text-[#4D4A99] mb-3">{title}</p>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#59566B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4D4A99] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ),
  "best-sleep-masks-earplugs": (
    <svg viewBox="0 0 500 120" className="w-full" aria-label="Sleep mask comparison chart">
      <text x={250} y={18} textAnchor="middle" fontSize="12" fill="#211F2B" fontWeight="600">Sleep Mask Types at a Glance</text>
      {[
        { type: "Flat Fabric", best: "Budget-friendly", x: 10 },
        { type: "Contoured 3D", best: "No eye pressure", x: 130 },
        { type: "Silk", best: "Gentle on skin", x: 250 },
        { type: "Bluetooth", best: "Audio + darkness", x: 370 },
      ].map(({ type, best, x }) => (
        <g key={type}>
          <rect x={x} y={30} width={115} height={70} rx={10} fill="#F3EEE4" stroke="#ECE7DC" />
          <text x={x + 57} y={58} textAnchor="middle" fontSize="11" fill="#4D4A99" fontWeight="600">{type}</text>
          <text x={x + 57} y={78} textAnchor="middle" fontSize="10" fill="#59566B">{best}</text>
        </g>
      ))}
    </svg>
  ),
  "best-bed-sheets-bedding-sets": (
    <svg viewBox="0 0 500 150" className="w-full" aria-label="Sheet material breathability chart">
      <text x={250} y={18} textAnchor="middle" fontSize="12" fill="#211F2B" fontWeight="600">Sheet Materials by Breathability</text>
      {[
        { mat: "Linen", score: 95, x: 30 },
        { mat: "Percale", score: 80, x: 130 },
        { mat: "Bamboo", score: 75, x: 230 },
        { mat: "Sateen", score: 55, x: 330 },
        { mat: "Microfiber", score: 35, x: 430 },
      ].map(({ mat, score, x }) => (
        <g key={mat}>
          <rect x={x} y={120 - score} width={60} height={score} rx={4} fill="#4D4A99" opacity={0.15 + score / 130} />
          <text x={x + 30} y={138} textAnchor="middle" fontSize="10" fill="#59566B">{mat}</text>
        </g>
      ))}
      <line x1={20} y1={25} x2={20} y2={120} stroke="#E7E2D8" strokeWidth="1" />
      <line x1={20} y1={120} x2={495} y2={120} stroke="#E7E2D8" strokeWidth="1" />
    </svg>
  ),
  "best-mattress-protectors-toppers": (
    <svg viewBox="0 0 500 140" className="w-full" aria-label="Mattress layer diagram">
      <text x={250} y={18} textAnchor="middle" fontSize="12" fill="#211F2B" fontWeight="600">Mattress Layering Guide</text>
      {[
        { label: "Sheet Set", y: 30, fill: "#EDE9F8" },
        { label: "Mattress Topper / Pad", y: 60, fill: "#F3EEE4" },
        { label: "Mattress Protector", y: 90, fill: "#ECE7DC" },
        { label: "Mattress", y: 115, fill: "#E2DDD3" },
      ].map(({ label, y, fill }) => (
        <g key={label}>
          <rect x={60} y={y} width={380} height={22} rx={5} fill={fill} stroke="#ECE7DC" />
          <text x={250} y={y + 15} textAnchor="middle" fontSize="11" fill="#211F2B">{label}</text>
        </g>
      ))}
    </svg>
  ),
};

export default async function BestPickPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleProducts = products
    .filter((p) => p.articleSlug === slug)
    .sort((a, b) => a.rank - b.rank);

  const otherArticles = articles.filter((a) => a.slug !== slug);

  const jumpLinks = [
    { id: "intro", label: "Introduction" },
    { id: "comparison-table", label: "Quick Comparison" },
    ...articleProducts.map((p) => ({ id: p.id, label: `${p.rank}. ${p.name.split(",")[0]}` })),
    { id: "buying-guide", label: "Buying Guide" },
    { id: "faq", label: "FAQ" },
  ];

  const guide = buyingGuides[slug];
  const faqs = faqsBySlug[slug] ?? [];
  const diagram = diagramsBySlug[slug];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-10">
          <ArticleSidebar title="Jump To" links={jumpLinks} />

          <article className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <nav className="text-xs text-[#8B879C] mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              {" › "}
              <Link href="/#browse-by-category" className="hover:underline">Nest Picks</Link>
              {" › "}
              <span>{article.category}</span>
            </nav>

            <p className="eyebrow-accent mb-2">{article.category}</p>
            <h1 className="text-3xl font-bold text-[#211F2B] tracking-tight mb-3">{article.title}</h1>
            <p className="text-sm text-[#8B879C] mb-6">
              Updated 2026 · {article.minutesToRead} min read · {article.productCount} products reviewed
            </p>

            <div id="intro" className="card p-4 bg-[#F3EEE4] border-[#ECE7DC] mb-8">
              <p className="text-xs font-semibold text-[#8B879C] uppercase tracking-widest mb-1">Affiliate Disclosure</p>
              <p className="text-xs text-[#59566B]">{site.affiliateDisclosure}</p>
            </div>

            <p className="text-[#59566B] leading-relaxed mb-8">
              {article.excerpt} This guide reviews all {article.productCount} products in the category, with honest editorial takes on who each one actually suits. You&rsquo;ll find a quick comparison table at the top, detailed sections for each product below, and a buying guide to help you match the right pick to your sleep setup.
            </p>

            <div id="comparison-table" className="mb-10">
              <h2 className="text-xl font-semibold text-[#211F2B] mb-4">Quick Comparison</h2>
              <ComparisonTable products={articleProducts} />
            </div>

            {/* Product sections */}
            {articleProducts.map((p, idx) => (
              <div key={p.id} id={p.id} className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-[#4D4A99]">#{p.rank}</span>
                  <span className="eyebrow-accent">{p.badge}</span>
                </div>
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  loading={idx === 0 ? "eager" : "lazy"}
                  style={{ objectFit: "contain", background: "#F3EEE4", borderRadius: "12px", width: "100%", maxHeight: "320px" }}
                />
                <h3 className="text-lg font-semibold text-[#211F2B] mt-4 mb-2">{p.name}</h3>
                <p className="text-sm text-[#59566B] leading-relaxed mb-3">{p.summary}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#8B879C] uppercase tracking-wide mb-2">Cons to Consider</p>
                  <ul className="space-y-1">
                    {p.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-[#59566B]">
                        <XCircle className="w-4 h-4 text-[#8B879C] shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-4 mb-4 space-y-0">
                  <AccordionSection title="Why We Picked It">
                    <p>{p.pros.join(". ")}.</p>
                  </AccordionSection>
                  <AccordionSection title="Who It&rsquo;s For">
                    <p>{p.bestFor}</p>
                  </AccordionSection>
                  <AccordionSection title="How to Use It">
                    <p>{p.howToUse}</p>
                  </AccordionSection>
                </div>

                <CTAButton href={p.affiliateUrl} external>View on Amazon →</CTAButton>

                {idx < articleProducts.length - 1 && (
                  <div className="border-t border-[#E7E2D8] mt-10" />
                )}
              </div>
            ))}

            {/* Buying Guide */}
            <section id="buying-guide" className="mb-10">
              <h2 className="text-2xl font-semibold text-[#211F2B] mb-4">Buying Guide</h2>
              {guide && (
                <>
                  <p className="text-[#59566B] leading-relaxed mb-6">{guide.intro}</p>
                  {guide.sections.map((s) => (
                    <div key={s.h3} className="mb-5">
                      <h3 className="font-semibold text-[#211F2B] mb-2">{s.h3}</h3>
                      <p className="text-sm text-[#59566B] leading-relaxed">{s.body}</p>
                    </div>
                  ))}
                </>
              )}

              {diagram && (
                <div className="card p-6 my-6">{diagram}</div>
              )}

              <div className="bg-[#F3EEE4] border-l-4 border-[#4D4A99] rounded-r-[14px] p-4 my-6">
                <p className="text-xs font-semibold text-[#4D4A99] uppercase tracking-wide mb-1">Tip</p>
                <p className="text-sm text-[#59566B]">Before buying, check for certifications like Oeko-Tex Standard 100 or CertiPUR-US (for foam products). These confirm the materials have been tested for harmful substances — an important consideration for items that spend eight hours a night in contact with your skin or breathing zone.</p>
              </div>
              <div className="bg-[#F3EEE4] border-l-4 border-[#4D4A99] rounded-r-[14px] p-4 mb-6">
                <p className="text-xs font-semibold text-[#4D4A99] uppercase tracking-wide mb-1">Pro Tip</p>
                <p className="text-sm text-[#59566B]">Sleep research from the <a href="https://www.sleepfoundation.org" target="_blank" rel="noopener noreferrer" className="text-[#4D4A99] hover:underline">Sleep Foundation</a> consistently finds that sleep environment — including bedding — has a meaningful effect on sleep quality. The <a href="https://www.cdc.gov/sleep/index.html" target="_blank" rel="noopener noreferrer" className="text-[#4D4A99] hover:underline">CDC&rsquo;s sleep health guidelines</a> recommend addressing sleep environment before turning to supplements or medication.</p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-10">
              <h2 className="text-2xl font-semibold text-[#211F2B] mb-4">Frequently Asked Questions</h2>
              <FAQ items={faqs} />
            </section>

            {/* Further Reading */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#211F2B] mb-4">Further Reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherArticles.slice(0, 2).map((a) => (
                  <Link key={a.slug} href={`/best/${a.slug}`} className="card p-4 hover:border-[#4D4A99] transition-colors">
                    <p className="eyebrow mb-1">{a.category}</p>
                    <p className="font-semibold text-[#211F2B] text-sm headline-link">{a.title}</p>
                  </Link>
                ))}
              </div>
            </section>

            <div className="card p-4 bg-[#F3EEE4] border-[#ECE7DC]">
              <p className="text-xs font-semibold text-[#8B879C] uppercase tracking-widest mb-1">Affiliate Disclosure</p>
              <p className="text-xs text-[#59566B]">{site.affiliateDisclosure}</p>
            </div>
          </article>

          <RelatedSidebar
            title="More Nest Picks"
            links={otherArticles.map((a) => ({ href: `/best/${a.slug}`, title: a.title }))}
          />
        </div>
      </div>
    </>
  );
}
