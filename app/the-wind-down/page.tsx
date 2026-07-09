import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "The Wind-Down Glossary",
  description: "A practical glossary of sleep and bedding terms — from thread count to REM cycles — to help you make smarter sleep decisions.",
  openGraph: { title: `The Wind-Down Glossary | ${site.name}`, description: "Plain-English definitions for sleep and bedding terms.", url: `${site.url}/the-wind-down` },
};

const terms = [
  { term: "Sleep Latency", def: "The time it takes to fall asleep after lights out. A healthy range for most adults is 10–20 minutes. Consistently falling asleep in under 5 minutes often indicates significant sleep deprivation." },
  { term: "REM Sleep", def: "Rapid Eye Movement sleep, the stage most associated with vivid dreaming, memory consolidation, and emotional processing. Adults spend roughly 20–25% of sleep time in REM, with the longest REM periods occurring in the second half of the night." },
  { term: "Deep Sleep (Slow-Wave Sleep)", def: "The most physically restorative stage of sleep, characterized by slow brain waves, reduced heart rate, and difficult arousal. This is when the body repairs tissue, builds bone and muscle, and strengthens the immune system." },
  { term: "Sleep Architecture", def: "The overall pattern of sleep stages across a full night, including how much time is spent in light, deep, and REM sleep, and how often cycles repeat. Disruptions to sleep architecture — even without full awakening — affect how rested you feel in the morning." },
  { term: "Circadian Rhythm", def: "The body's internal 24-hour clock that regulates the sleep-wake cycle, hormone release, body temperature, and other physiological processes. Light exposure is the primary signal that sets and resets the circadian rhythm." },
  { term: "Thread Count", def: "The number of threads woven into one square inch of fabric. A common marketing metric for sheets, though it's an unreliable quality indicator — weave type, fiber quality, and ply count matter more for actual feel and durability." },
  { term: "Fill Power", def: "A measurement of down quality representing how much volume one ounce of down occupies. Higher fill power (600–900) means more loft per ounce, resulting in a warmer, lighter product. Down alternative fill isn't measured by fill power but rather by loft and compression recovery." },
  { term: "Percale", def: "A plain weave pattern for sheets using a one-over-one-under thread construction. Produces a crisp, matte finish that feels similar to a well-worn button-down shirt. Generally more breathable than sateen weaves, making it a good choice for hot sleepers." },
  { term: "Sateen", def: "A weave pattern that surfaces more thread on the face of the fabric, creating a smooth, slightly lustrous finish with a silkier hand feel than percale. Warmer and less breathable than percale, but often preferred for its softness and drape." },
  { term: "Melatonin", def: "A hormone produced by the pineal gland that signals the body to prepare for sleep. Its production rises in the evening in response to darkness and is suppressed by light, particularly blue-spectrum light from screens and LED bulbs." },
  { term: "Sleep Hygiene", def: "The set of behavioral and environmental practices that promote consistent, high-quality sleep. Common elements include consistent sleep and wake times, limiting screen exposure before bed, maintaining a cool bedroom temperature, and avoiding caffeine in the hours before sleep." },
  { term: "Deep Pressure Stimulation", def: "The therapeutic effect of firm, evenly distributed pressure on the body — similar to the sensation of being hugged or swaddled. Weighted blankets apply this type of pressure and are used by some sleepers to reduce anxiety and promote sleep onset." },
  { term: "Q-Max Rating", def: "A measurement of a fabric's instant cooling contact sensation, expressed as watts per square centimeter. Higher Q-Max values indicate a cooler-feeling material on initial contact. Cooling blankets with Q-Max 0.4 or above are generally considered significantly cooling." },
  { term: "Oeko-Tex Standard 100", def: "An independent certification that a textile product has been tested for harmful substances including heavy metals, pesticides, formaldehyde, and certain dyes, and found to be safe for direct skin contact. Doesn't certify organic farming or production practices." },
  { term: "CertiPUR-US", def: "A certification for foam used in bedding and furniture, verifying it's made without ozone depleters, heavy metals, formaldehyde, or certain flame retardants, and that VOC emissions meet indoor air quality standards." },
  { term: "Gusseted Pillow", def: "A pillow with an extra side panel sewn between the top and bottom fabric pieces. This construction maintains a more consistent, box-like shape throughout the night rather than the flatter, pancake profile of non-gusseted pillows." },
  { term: "Loft", def: "The height or thickness of a pillow when in a relaxed state. Low loft pillows sit flatter (better for stomach sleepers), medium loft suits back sleepers, and high loft is generally preferred by side sleepers who need to fill a larger gap between shoulder and ear." },
  { term: "Phase-Change Material (PCM)", def: "A substance that absorbs and releases heat as it transitions between solid and liquid states at body temperature, used in some cooling pillows and mattress toppers to actively buffer temperature fluctuations during sleep." },
  { term: "Hypoallergenic", def: "A labeling term indicating a product is designed to minimize the likelihood of triggering allergic reactions. Often applied to down alternative fill, synthetic materials, and tightly woven fabrics that limit dust mite penetration. Not a medical certification — standards for the claim vary by manufacturer." },
  { term: "Bamboo-Derived Viscose", def: "A semi-synthetic fiber made by dissolving bamboo cellulose into a solution and extruding it into fiber. Often marketed simply as 'bamboo.' Naturally soft, breathable, and moisture-wicking. The resulting fabric doesn't retain bamboo's antibacterial properties, but performs well for temperature regulation." },
  { term: "Waterproof Membrane", def: "The thin barrier layer in mattress protectors that prevents liquid penetration. Higher-quality membranes use microporous polyurethane that blocks liquid while allowing water vapor to pass through, reducing heat retention and the crinkling sound associated with cheaper protectors." },
  { term: "Sleep Inertia", def: "The disoriented, groggy feeling experienced immediately after waking. It typically lasts 15–30 minutes but can persist longer after waking from deep sleep or with significant sleep deprivation. Consistent wake times and gradual light exposure help reduce sleep inertia." },
  { term: "White Noise", def: "A consistent sound containing all audible frequencies at equal intensity, used to mask disruptive environmental sounds during sleep. Unlike sudden or variable noises, white noise creates a steady audio backdrop that prevents the brain from registering changes in ambient sound as significant." },
  { term: "GREENGUARD Gold Certification", def: "An indoor air quality certification for products used in environments where vulnerable populations spend significant time — including children's products and bedding. Verifies that a product's chemical emissions meet strict limits for total VOCs and specific substances." },
];

export default function TheWindDownPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <p className="eyebrow-accent mb-2">Glossary</p>
      <h1 className="text-3xl font-bold text-[#211F2B] tracking-tight mb-3">The Wind-Down Glossary</h1>
      <p className="text-[#59566B] leading-relaxed mb-10 max-w-2xl">Plain-English definitions for sleep and bedding terms — from thread count to circadian rhythms — so you can make more informed decisions about your sleep setup.</p>

      <div className="space-y-4">
        {terms.map(({ term, def }) => (
          <div key={term} className="border-l-2 border-[#4D4A99] pl-5 py-2">
            <p className="font-semibold text-[#211F2B] mb-1">{term}</p>
            <p className="text-sm text-[#59566B] leading-relaxed">{def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
