import { buildAffiliateUrl } from "./site";

export interface Product {
  id: string;
  articleSlug: string;
  rank: number;
  name: string;
  asin: string;
  affiliateUrl: string;
  imageUrl: string;
  badge: string;
  summary: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  howToUse: string;
}

const raw: Omit<Product, "affiliateUrl">[] = [
  // CATEGORY 1 — Pillows (best-pillows)
  {
    id: "p1",
    articleSlug: "best-pillows",
    rank: 1,
    name: "Utopia Bedding Down Alternative Bed Pillows, Queen Size, Set of 2",
    asin: "B08DTH86Q2",
    imageUrl: "https://m.media-amazon.com/images/I/61fywr4RYhL._AC_SL1500_.jpg",
    badge: "Best Overall",
    summary:
      "A gusseted, medium-loft pillow that holds its shape through the night and works well across most sleep positions.",
    pros: [
      "Gusseted edge keeps loft consistent instead of flattening out",
      "Soft brushed microfiber shell feels close to down without the allergy concerns",
      "Machine washable, which makes upkeep simple",
      "Sold in a pair, so both sleepers in a bed get a matched set",
    ],
    cons: [
      "Loft is fixed and not adjustable for sleepers who want a custom height",
      "Can feel slightly warm for those who run hot overnight",
    ],
    bestFor: "Back and combination sleepers who want reliable, consistent support without breaking it in.",
    howToUse:
      "Fluff the pillow thoroughly after unboxing to let the fill loft up fully, and plan on a 24-48 hour decompression window before judging the feel.",
  },
  {
    id: "p2",
    articleSlug: "best-pillows",
    rank: 2,
    name: "Beckham Hotel Collection Bed Pillows, Standard/Queen, Set of 2",
    asin: "B01LYNW421",
    imageUrl: "https://m.media-amazon.com/images/I/71329CVoVDL._AC_SL1500_.jpg",
    badge: "Hotel-Style Comfort",
    summary:
      "A plush, hotel-lobby-style pillow with a soft gusset that mimics the feel found in many upscale hotel rooms.",
    pros: [
      "Plush, breathable cover fabric feels premium against the skin",
      "Hypoallergenic fill construction suits sensitive sleepers",
      "Holds shape well over repeated washes",
    ],
    cons: [
      "Softer profile may not satisfy sleepers who prefer a firmer loft",
      "Can compress more than expected for strict side sleepers",
    ],
    bestFor: "Back sleepers and anyone who wants that plush, hotel-bed feeling at home.",
    howToUse:
      "Pair two pillows for extra height if you sleep on your back, or use one folded for added side-sleeping support.",
  },
  {
    id: "p3",
    articleSlug: "best-pillows",
    rank: 3,
    name: "Ultra Pain Relief Cooling Pillow for Neck Support, Adjustable Cervical Pillow",
    asin: "B0C1GP88C4",
    imageUrl: "https://m.media-amazon.com/images/I/714COr20AQL._AC_SL1500_.jpg",
    badge: "Best for Neck Support",
    summary:
      "A contoured cervical design with a cooling surface intended to cradle the neck and reduce strain for side and back sleepers.",
    pros: [
      "Ergonomic contour supports the natural curve of the neck",
      "Cooling cover surface helps offset heat retention from the foam core",
      "Adjustable insert lets sleepers fine-tune loft",
    ],
    cons: [
      "Contoured shape takes some adjustment for stomach sleepers",
      "Firmer foam feel won't suit sleepers who prefer a very soft pillow",
    ],
    bestFor: "Side and back sleepers managing neck tension who want targeted cervical support.",
    howToUse:
      "Align the higher contour edge under your neck rather than your head for the intended ergonomic support, and remove or add the inner layer to dial in loft.",
  },
  {
    id: "p4",
    articleSlug: "best-pillows",
    rank: 4,
    name: "Sasttie Firm Pillows, Queen Size, Set of 4",
    asin: "B0DPMNWTXJ",
    imageUrl: "https://m.media-amazon.com/images/I/61AQt9T-qKL._AC_SL1500_.jpg",
    badge: "Best Value Multi-Pack",
    summary:
      "A firmer, budget-friendly four-pack that's well suited to stomach sleepers and households needing several pillows at once.",
    pros: [
      "Four-pillow set covers a whole bed or guest room economically",
      "Firmer loft suits stomach sleepers who need a lower profile",
      "Machine washable shell for easy care",
    ],
    cons: [
      "Firmness may feel too dense for plush-pillow loyalists",
      "Less contouring than specialty cervical designs",
    ],
    bestFor: "Stomach sleepers and larger households that need an affordable multi-pack.",
    howToUse:
      "Use a single pillow under the head for stomach sleeping, or stack two for back support while reading or watching TV in bed.",
  },
  {
    id: "p5",
    articleSlug: "best-pillows",
    rank: 5,
    name: "QUTOOL Cooling Pillow for Sleeping, Shredded Memory Foam, Queen, Set of 2",
    asin: "B07T7W7VR3",
    imageUrl: "https://m.media-amazon.com/images/I/81tcywwgQHL._AC_SL1500_.jpg",
    badge: "Best for Hot Sleepers",
    summary:
      "Shredded memory foam fill that's fully adjustable, paired with a cooling-knit cover for sleepers who run warm at night.",
    pros: [
      "Shredded fill allows you to add or remove foam to set your own loft",
      "CertiPUR-US certified foam means lower off-gassing odor",
      "Cooling cover fabric helps dissipate body heat",
    ],
    cons: [
      "Shredded foam can shift unevenly until the pillow settles in",
      "Slightly more maintenance than a one-piece pillow",
    ],
    bestFor: "Hot sleepers who want a customizable loft they can adjust over time.",
    howToUse:
      "Unzip the cover and remove a handful of foam if the pillow feels too high, storing the extra fill in case you want to add it back later.",
  },
  {
    id: "p6",
    articleSlug: "best-pillows",
    rank: 6,
    name: "EIUE Hotel Collection Bed Pillows for Sleeping, 2 Pack, Queen Size",
    asin: "B097CZCDQG",
    imageUrl: "https://m.media-amazon.com/images/I/51gpc1r1PGL._AC_SL1500_.jpg",
    badge: "Best Budget Pick",
    summary:
      "An accessible, soft-to-medium pillow pair designed to bring a hotel feel to a standard queen bed without a high price tag.",
    pros: [
      "Affordable two-pack price point",
      "Soft microfiber fill suits gentle back sleeping",
      "Machine washable for routine refreshing",
    ],
    cons: [
      "Loft can flatten faster than higher-density alternatives",
      "Not ideal for sleepers needing firm support",
    ],
    bestFor: "Budget-conscious shoppers who want a soft, hotel-style feel for everyday use.",
    howToUse: "Fluff regularly and refresh in the dryer on low heat every few weeks to help maintain loft.",
  },
  {
    id: "p7",
    articleSlug: "best-pillows",
    rank: 7,
    name: "Coop Home Goods Original Adjustable Pillow, Queen Size",
    asin: "B00EINBSEW",
    imageUrl: "https://m.media-amazon.com/images/I/61hiruVCYbL._AC_SL1000_.jpg",
    badge: "Best Adjustable Loft",
    summary:
      "A shredded memory-foam-and-microfiber blend pillow that lets sleepers add or remove fill for a fully personalized height.",
    pros: [
      "Highly adjustable fill works for side, back, and stomach sleepers",
      "Breathable bamboo-derived cover helps with airflow",
      "Long track record with consistent quality control",
    ],
    cons: [
      "Initial setup requires some trial and error to find your ideal loft",
      "Bulkier feel compared to flatter foam pillows",
    ],
    bestFor: "Sleepers who switch positions and want one pillow that adapts to all of them.",
    howToUse:
      "Start with the pillow as filled, sleep on it for a few nights, then remove small amounts of fill until the loft matches your preferred sleep position.",
  },
  {
    id: "p8",
    articleSlug: "best-pillows",
    rank: 8,
    name: "Nuzzle Adjustable Firm Pillow, Luxury Standard Size",
    asin: "B0DX793MV8",
    imageUrl: "https://m.media-amazon.com/images/I/71UAIPBtI-L._AC_SL1500_.jpg",
    badge: "Best Firm Feel",
    summary:
      "A firmer adjustable pillow built for sleepers who find most pillows go flat too quickly.",
    pros: [
      "Firm baseline loft resists flattening over time",
      "Adjustable design allows minor customization",
      "Durable construction suited to nightly use",
    ],
    cons: [
      "May feel too firm for sleepers who like a plush pillow",
      "Single-pack pricing is higher than multi-pack alternatives",
    ],
    bestFor: "Back and side sleepers who specifically want a firmer, longer-lasting loft.",
    howToUse: "Allow a short break-in period and avoid over-fluffing, since the firm fill is designed to hold shape on its own.",
  },
  {
    id: "p9",
    articleSlug: "best-pillows",
    rank: 9,
    name: "Utopia Bedding Bed Pillows for Sleeping, Queen Size, Set of 2",
    asin: "B071DFDF9N",
    imageUrl: "https://m.media-amazon.com/images/I/71xD6Fe6GEL._AC_SL1500_.jpg",
    badge: "Best Everyday Pair",
    summary:
      "A reliable, mid-loft pillow pair built for everyday comfort across a range of sleeping styles.",
    pros: [
      "Balanced medium loft suits a wide range of sleepers",
      "Soft, breathable shell fabric",
      "Affordable for a two-pillow set",
    ],
    cons: [
      "Not contoured for sleepers needing dedicated neck support",
      "Loft softens gradually with heavy use",
    ],
    bestFor: "Sleepers who want a dependable, no-frills pillow pair for daily use.",
    howToUse: "Wash on a gentle cycle every few months and tumble dry with a couple of clean tennis balls to refresh the loft.",
  },
  {
    id: "p10",
    articleSlug: "best-pillows",
    rank: 10,
    name: "Osteo Cervical Pillow for Neck Pain Relief, Hollow Design",
    asin: "B09964WTF5",
    imageUrl: "https://m.media-amazon.com/images/I/71SUT3pmTmL._AC_SL1500_.jpg",
    badge: "Best for Side Sleepers",
    summary:
      "A hollow-center cervical pillow shaped to reduce shoulder pressure for side sleepers while supporting the neck.",
    pros: [
      "Hollow cutout reduces shoulder pressure when lying on your side",
      "Contoured ridges support the neck's natural curve",
      "Odorless foam construction",
    ],
    cons: [
      "Distinct shape isn't ideal for stomach sleepers",
      "Takes longer to adjust to than a traditional rectangular pillow",
    ],
    bestFor: "Side sleepers dealing with shoulder pressure or neck discomfort.",
    howToUse: "Position the hollow section directly under your shoulder when lying on your side so your neck rests on the raised cervical ridge.",
  },

  // CATEGORY 2 — Weighted & Cooling Blankets
  {
    id: "p11",
    articleSlug: "best-weighted-cooling-blankets",
    rank: 1,
    name: "Bedsure GentleSoft Fleece Bed Blanket, Queen Size, Grey",
    asin: "B0157T2ENY",
    imageUrl: "https://m.media-amazon.com/images/I/91AVoxktzyL._AC_SL1500_.jpg",
    badge: "Editor's Pick",
    summary:
      "An ultra-soft fleece throw-style blanket that adds cozy warmth as a lightweight layer for cooler nights.",
    pros: [
      "Lightweight fleece adds warmth without excess bulk",
      "Soft brushed texture feels gentle against skin",
      "Easy to machine wash and dry",
      "Versatile for bed, couch, or travel use",
    ],
    cons: [
      "Not as breathable as cooling-specific fabrics for hot sleepers",
      "Can pill slightly after repeated washing",
    ],
    bestFor: "Sleepers who want an extra soft layer for cooler nights without heavy bulk.",
    howToUse: "Layer over a top sheet as a mid-weight blanket, or use alone in mild climates.",
  },
  {
    id: "p12",
    articleSlug: "best-weighted-cooling-blankets",
    rank: 2,
    name: "Bedsure Cooling Waffle Queen Size Blanket",
    asin: "B088WYYH85",
    imageUrl: "https://m.media-amazon.com/images/I/81BJR6vR-VL._AC_SL1500_.jpg",
    badge: "Best for Hot Sleepers",
    summary:
      "A waffle-weave cotton-bamboo blend designed to stay breathable, making it a strong pick for sleepers who overheat at night.",
    pros: [
      "Waffle weave construction promotes airflow",
      "Cotton-bamboo blend feels light and breathable",
      "Lightweight enough for year-round use in warm climates",
    ],
    cons: [
      "Provides minimal warmth on its own in cold rooms",
      "Open weave can snag on rough surfaces",
    ],
    bestFor: "Hot sleepers who want breathable coverage without trapping heat.",
    howToUse: "Use as a standalone top layer in warm weather or paired with a lighter sheet underneath for added breathability.",
  },
  {
    id: "p13",
    articleSlug: "best-weighted-cooling-blankets",
    rank: 3,
    name: "yescool Weighted Blanket for Adults, 20 lbs, 60x80, Grey",
    asin: "B092LZLLGF",
    imageUrl: "https://m.media-amazon.com/images/I/61heqwhPQyL._AC_SL1500_.jpg",
    badge: "Best Weighted Option",
    summary:
      "A glass-bead-filled weighted blanket designed to provide even pressure across the body for a calming, grounded feel.",
    pros: [
      "Evenly distributed glass beads avoid clumping",
      "Quilted stitching keeps fill in place",
      "Breathable cover reduces heat buildup compared to older weighted designs",
    ],
    cons: [
      "Heavier weight may not suit smaller individuals or children",
      "Bulkier to wash and dry than a standard blanket",
    ],
    bestFor: "Adults seeking gentle, even pressure to help unwind before sleep.",
    howToUse: "Choose a weight roughly 10% of your body weight, and use the inner duvet insert with the included cover for easier washing.",
  },
  {
    id: "p14",
    articleSlug: "best-weighted-cooling-blankets",
    rank: 4,
    name: "Bedsure 100% Cotton Blanket, Queen Size, for Bed",
    asin: "B07MHM248Q",
    imageUrl: "https://m.media-amazon.com/images/I/71XOUN3llmL._AC_SL1500_.jpg",
    badge: "Best Cotton Pick",
    summary:
      "A breathable, all-cotton thermal-weave blanket suited as a lightweight, natural-fiber layer for most seasons.",
    pros: [
      "100% cotton construction is breathable and soft",
      "Thermal waffle weave adds texture and warmth without heaviness",
      "Pre-washed for reduced shrinkage",
    ],
    cons: [
      "Less insulating than synthetic fleece in very cold rooms",
      "Wrinkles more easily than blended fabrics",
    ],
    bestFor: "Sleepers who prefer natural fibers and a lightweight, breathable feel.",
    howToUse: "Use as a stand-alone summer blanket or as a layer beneath a heavier comforter in winter.",
  },
  {
    id: "p15",
    articleSlug: "best-weighted-cooling-blankets",
    rank: 5,
    name: "Topcee Cooling Blanket, 90x90 Queen Size",
    asin: "B09QL17PLS",
    imageUrl: "https://m.media-amazon.com/images/I/81W5oNxzhIL._AC_SL1500_.jpg",
    badge: "Best Lightweight Cooling",
    summary:
      "An ultra-lightweight cooling blanket made with a moisture-wicking fabric aimed at reducing overnight heat buildup.",
    pros: [
      "Moisture-wicking fabric helps manage night sweats",
      "Lightweight enough to use year-round",
      "Compact and easy to pack for travel",
    ],
    cons: [
      "Minimal insulation for colder climates",
      "Thin construction may feel less substantial than traditional blankets",
    ],
    bestFor: "Hot sleepers and travelers wanting a packable, cooling top layer.",
    howToUse: "Use it as your only top layer in summer, or fold double for slightly more substance in air-conditioned rooms.",
  },
  {
    id: "p16",
    articleSlug: "best-weighted-cooling-blankets",
    rank: 6,
    name: "YnM 15lbs Weighted Blanket for Adults",
    asin: "B073429DV2",
    imageUrl: "https://m.media-amazon.com/images/I/61wqo9sOcAL._AC_SL1500_.jpg",
    badge: "Best Mid-Weight",
    summary:
      "A cotton-covered weighted blanket with a 7-layer construction designed to distribute weight evenly across smaller grid pockets.",
    pros: [
      "Seven-layer design with small fill pockets reduces shifting",
      "Natural cotton cover feels breathable against skin",
      "Mid-range weight suits a broad range of body types",
    ],
    cons: [
      "Cover is not machine washable in some sizes, requiring spot cleaning",
      "Takes time to adjust to the sensation of a weighted blanket",
    ],
    bestFor: "First-time weighted blanket users who want a moderate, balanced weight.",
    howToUse: "Drape evenly across the body for the first few nights to acclimate, rather than wrapping tightly.",
  },
  {
    id: "p17",
    articleSlug: "best-weighted-cooling-blankets",
    rank: 7,
    name: "Weighted Blanket for Adults, 20lbs, 48x72, Twin/Full",
    asin: "B08SVY9CKN",
    imageUrl: "https://m.media-amazon.com/images/I/71MR6okGyTL._AC_SL1500_.jpg",
    badge: "Best for Twin/Full Beds",
    summary:
      "A microfiber-covered weighted comforter sized for twin and full beds, designed for sleepers within the 130-220 lb range.",
    pros: [
      "Sized appropriately for twin and full mattresses",
      "Soft microfiber exterior feels comforter-like",
      "Reinforced stitching helps prevent fill shifting",
    ],
    cons: [
      "Microfiber cover runs warmer than cotton alternatives",
      "Limited size options outside twin/full",
    ],
    bestFor: "Twin or full bed owners wanting a comforter-style weighted blanket.",
    howToUse: "Use as your top layer in place of a standard comforter; spot clean small stains promptly to preserve the fill.",
  },
  {
    id: "p18",
    articleSlug: "best-weighted-cooling-blankets",
    rank: 8,
    name: "L'AGRATY Weighted Blanket for Adults, 15lbs, 48x72",
    asin: "B097DK6ZCR",
    imageUrl: "https://m.media-amazon.com/images/I/61lsjtPDcxL._AC_SL1500_.jpg",
    badge: "Best Compact Weighted Pick",
    summary:
      "A smaller-format weighted blanket built with breathable microfiber, suited to individual use in twin/full sizing.",
    pros: [
      "Compact sizing fits individual sleepers well",
      "All-season breathable fabric for moderate climates",
      "Lighter 15 lb option suits smaller frames",
    ],
    cons: [
      "Limited coverage width for sleepers who like to wrap up fully",
      "Not ideal for couples sharing one blanket",
    ],
    bestFor: "Individual sleepers in smaller beds wanting a lighter weighted option.",
    howToUse: "Best used solo rather than shared, since the compact width is designed for single-sleeper coverage.",
  },

  // CATEGORY 3 — Sleep Masks & Earplugs
  {
    id: "p19",
    articleSlug: "best-sleep-masks-earplugs",
    rank: 1,
    name: "MZOO Luxury Sleep Eye Mask for Side Sleeper, Men & Women",
    asin: "B07KC5DWCC",
    imageUrl: "https://m.media-amazon.com/images/I/71SMSJDNOBL._AC_SL1500_.jpg",
    badge: "Most Comfortable",
    summary:
      "A contoured, concave-cup sleep mask shaped to avoid pressing on the eyes, making it especially comfortable for side sleeping.",
    pros: [
      "Concave eye cups avoid direct pressure on eyelids and lashes",
      "Memory foam contouring blocks light from all angles",
      "Adjustable strap with no-slip design",
    ],
    cons: [
      "Slightly bulkier profile than flat fabric masks",
      "Foam may feel warm to sleepers sensitive to heat near the face",
    ],
    bestFor: "Side sleepers who want a mask that won't dig into their eyes or smudge makeup.",
    howToUse: "Position the cups directly over closed eyes before tightening the strap, leaving enough slack to avoid pressure on the temples.",
  },
  {
    id: "p20",
    articleSlug: "best-sleep-masks-earplugs",
    rank: 2,
    name: "MyHalos Sleep Mask – 3D Blackout Eye Mask",
    asin: "B09CZ68WV3",
    imageUrl: "https://m.media-amazon.com/images/I/71i2I7j6e3L._AC_SL1500_.jpg",
    badge: "Best for Light Sensitivity",
    summary:
      "A molded 3D blackout mask designed to fully seal out light, a useful option for migraine-prone or light-sensitive sleepers.",
    pros: [
      "3D molded shape creates a full blackout seal",
      "Lightweight despite its structured design",
      "Adjustable strap accommodates different head sizes",
    ],
    cons: [
      "Rigid shape takes a few nights to get used to",
      "Not as packable for travel as flat fabric masks",
    ],
    bestFor: "Migraine-prone or highly light-sensitive sleepers who need total blackout.",
    howToUse: "Wear with the nose bridge gap settled gently against the face to prevent light leaking in from below.",
  },
  {
    id: "p21",
    articleSlug: "best-sleep-masks-earplugs",
    rank: 3,
    name: "LitBear Sleep Mask for Side Sleeper, Women & Men",
    asin: "B09H7FZ5JM",
    imageUrl: "https://m.media-amazon.com/images/I/813M0YqSLzL._AC_SL1500_.jpg",
    badge: "Best Breathable Mask",
    summary:
      "A contoured, breathable sleep mask built with adjustable straps and a lightweight design for side and back sleepers alike.",
    pros: [
      "Breathable fabric reduces heat buildup around the eyes",
      "Adjustable Velcro strap allows a custom fit",
      "Low-profile shape works well for side sleeping",
    ],
    cons: [
      "Velcro strap may catch on hair over time",
      "Less complete blackout than rigid 3D designs",
    ],
    bestFor: "Sleepers who want a breathable, adjustable mask for everyday use.",
    howToUse: "Adjust the Velcro strap to a snug but comfortable fit, rechecking it occasionally as the fabric loosens with wear.",
  },
  {
    id: "p22",
    articleSlug: "best-sleep-masks-earplugs",
    rank: 4,
    name: "BeeVines 100% Real Mulberry Silk Sleep Mask, 2 Pack",
    asin: "B08817H6HS",
    imageUrl: "https://m.media-amazon.com/images/I/61AkmB-Ha5L._AC_SL1500_.jpg",
    badge: "Best Silk Mask",
    summary:
      "A pair of genuine mulberry silk sleep masks that combine a smooth, skin-friendly texture with reliable light blocking.",
    pros: [
      "Real mulberry silk feels gentle on skin and hair",
      "Two-pack offers a backup or travel spare",
      "Lightweight and breathable for warm sleepers",
    ],
    cons: [
      "Requires gentle hand washing to preserve the silk",
      "Less structured fit than contoured foam masks",
    ],
    bestFor: "Sleepers who want a soft, skin-friendly mask that doubles as a travel accessory.",
    howToUse: "Hand wash in cool water with mild detergent and air dry flat to keep the silk's texture intact.",
  },
  {
    id: "p23",
    articleSlug: "best-sleep-masks-earplugs",
    rank: 5,
    name: "Fygrip 3D Eye Mask Sleep Mask for Men & Women",
    asin: "B0DJNSZ8VW",
    imageUrl: "https://m.media-amazon.com/images/I/71O3dAYHfCL._AC_SL1500_.jpg",
    badge: "Best Pressure-Free Fit",
    summary:
      "A 3D-contoured mask built to keep fabric off the eyes entirely, reducing pressure for sleepers who wear lash extensions or sensitive eyes.",
    pros: [
      "Pressure-free cups avoid contact with eyelids",
      "Adjustable strap distributes tension evenly",
      "Blocks light effectively thanks to the molded shape",
    ],
    cons: [
      "Structured shape may shift if you toss and turn often",
      "Not as compact for packing in a small bag",
    ],
    bestFor: "Sleepers with lash extensions or sensitive eyes who need a no-pressure fit.",
    howToUse: "Center the cups carefully over your eyes before securing the strap to keep the no-contact gap consistent through the night.",
  },
  {
    id: "p24",
    articleSlug: "best-sleep-masks-earplugs",
    rank: 6,
    name: "LKY DIGITAL Sleep Mask for Side Sleeper, 3 Pack",
    asin: "B07MR27G3D",
    imageUrl: "https://m.media-amazon.com/images/I/81ftelYxJFL._AC_SL1500_.jpg",
    badge: "Best Value Multi-Pack",
    summary:
      "A three-pack of contoured, adjustable sleep masks offering an affordable way to keep spares on hand or share with family.",
    pros: [
      "Three-pack value makes it easy to keep a spare at home or in a bag",
      "Adjustable straps fit a range of head sizes",
      "Contoured design suits side sleepers",
    ],
    cons: [
      "Build quality is more basic than premium single masks",
      "Strap material may feel less plush than dedicated comfort masks",
    ],
    bestFor: "Households or travelers who want multiple masks without paying a premium.",
    howToUse: "Keep one in your travel bag, one at your bedside, and one as a backup for washing rotation.",
  },
  {
    id: "p25",
    articleSlug: "best-sleep-masks-earplugs",
    rank: 7,
    name: "WAOAW Sleep Mask for Men & Women",
    asin: "B09712FSLY",
    imageUrl: "https://m.media-amazon.com/images/I/81BpTrjOWFL._AC_SL1500_.jpg",
    badge: "Best Classic Fit",
    summary:
      "A classic flat-style sleep mask with a soft, light-blocking fabric and elastic strap built for simple, everyday use.",
    pros: [
      "Soft, lightweight fabric is gentle on the face",
      "Elastic strap design is simple to put on and adjust",
      "Affordable and widely available",
    ],
    cons: [
      "Flat design presses directly on eyelids for some sleepers",
      "Less effective full blackout than 3D-molded designs",
    ],
    bestFor: "Sleepers who want a simple, no-frills mask for occasional use.",
    howToUse: "Use the adjustable strap to set tension so the mask stays in place without pulling at the back of the head.",
  },
  {
    id: "p26",
    articleSlug: "best-sleep-masks-earplugs",
    rank: 8,
    name: "LC-dolida Sleep Headphones, 3D Sleep Mask Bluetooth Wireless Music Eye Mask",
    asin: "B07T6FNLQV",
    imageUrl: "https://m.media-amazon.com/images/I/71GGksIzY-L._AC_SL1500_.jpg",
    badge: "Best Tech Pick",
    summary:
      "A Bluetooth sleep mask with built-in ultra-thin speakers, designed for sleepers who like to fall asleep to music, podcasts, or white noise.",
    pros: [
      "Built-in Bluetooth speakers allow audio without earbuds",
      "Ultra-thin speaker design stays comfortable side-sleeping",
      "Doubles as a standard blackout mask when audio isn't needed",
    ],
    cons: [
      "Requires charging, adding one more device to manage",
      "Audio quality is modest compared to dedicated headphones",
    ],
    bestFor: "Sleepers who fall asleep faster with music, podcasts, or white noise.",
    howToUse: "Charge fully before first use, pair via Bluetooth, and keep volume low enough to drift off comfortably.",
  },

  // CATEGORY 4 — Bed Sheets & Bedding Sets
  {
    id: "p27",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 1,
    name: "Queen Size 4 Piece Sheet Set - Comfy Breathable & Cooling Sheets",
    asin: "B01M16WBW1",
    imageUrl: "https://m.media-amazon.com/images/I/61o6SkL3DOL._AC_SL1500_.jpg",
    badge: "Best Value",
    summary:
      "A breathable four-piece sheet set built with deep pockets and a soft, cooling-leaning weave for everyday comfort.",
    pros: [
      "Deep pockets fit thicker mattresses and toppers",
      "Breathable weave helps with airflow overnight",
      "Easy-care fabric resists wrinkling",
    ],
    cons: [
      "Fitted sheet corners can loosen on very tall mattresses",
      "Color options are more limited than premium cotton lines",
    ],
    bestFor: "Sleepers wanting an affordable, breathable everyday sheet set.",
    howToUse: "Wash before first use to soften the fabric, and tumble dry on low to help the fitted sheet retain its elastic grip.",
  },
  {
    id: "p28",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 2,
    name: "Amazon Basics Lightweight Microfiber Sheet Set, Queen, Beige",
    asin: "B00Q7OA2XS",
    imageUrl: "https://m.media-amazon.com/images/I/61ehwqBtGgL._AC_SL1500_.jpg",
    badge: "Best Budget Pick",
    summary:
      "A no-frills, lightweight microfiber sheet set that delivers consistent softness and easy care at an accessible price.",
    pros: [
      "Very affordable for a full four-piece set",
      "Soft brushed microfiber feel",
      "Wrinkle-resistant and quick to dry",
    ],
    cons: [
      "Less breathable than natural cotton in warm climates",
      "Color palette is fairly neutral and basic",
    ],
    bestFor: "Budget shoppers who want a reliable, easy-care sheet set in neutral tones.",
    howToUse: "Wash in cold water and avoid fabric softener, which can reduce microfiber's natural softness over time.",
  },
  {
    id: "p29",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 3,
    name: "Twin Size Sheet Set – 3 Piece Bed Sheets",
    asin: "B00NX0XK1K",
    imageUrl: "https://m.media-amazon.com/images/I/71h+1pmrIwL._AC_SL1500_.jpg",
    badge: "Best for Twin Beds",
    summary:
      "A compact three-piece sheet set sized specifically for twin mattresses, ideal for kids' rooms, dorms, or guest beds.",
    pros: [
      "Properly proportioned for twin mattresses without excess fabric",
      "Soft, lightweight fabric suits everyday use",
      "Affordable, especially for multi-room households",
    ],
    cons: [
      "Twin-specific sizing won't work for larger beds",
      "Basic finish compared to higher-thread-count lines",
    ],
    bestFor: "Kids' rooms, dorms, and guest twin beds needing properly fitted sheets.",
    howToUse: "Confirm mattress depth before ordering to ensure the fitted sheet pocket size matches your mattress.",
  },
  {
    id: "p30",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 4,
    name: "Queen Size Sheet Set – 4 Piece Bed Sheets",
    asin: "B00NX0WXQI",
    imageUrl: "https://m.media-amazon.com/images/I/71tGN2LBhrL._AC_SL1500_.jpg",
    badge: "Best Everyday Set",
    summary:
      "A dependable four-piece queen sheet set offering balanced softness, easy care, and consistent fit.",
    pros: [
      "Balanced softness suits most sleepers",
      "Includes flat sheet, fitted sheet, and two pillowcases",
      "Resists pilling better than ultra-budget alternatives",
    ],
    cons: [
      "Not as plush as higher-end cotton sateen sets",
      "Limited specialty color options",
    ],
    bestFor: "Sleepers who want a reliable, all-purpose queen sheet set.",
    howToUse: "Rotate between two sheet sets weekly to extend the life of each and simplify your laundry routine.",
  },
  {
    id: "p31",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 5,
    name: "Bedsure Queen Sheet Set – 4 Pieces, Soft, 1800 Series",
    asin: "B07P5NBRL5",
    imageUrl: "https://m.media-amazon.com/images/I/71R0Mo0B+AL._AC_SL1500_.jpg",
    badge: "Best Soft Feel",
    summary:
      "A 1800-series microfiber sheet set built for a soft, hotel-like feel with cooling-friendly breathability.",
    pros: [
      "1800-series construction feels notably soft against skin",
      "Deep pockets accommodate thicker mattresses",
      "Fade and wrinkle resistant",
    ],
    cons: [
      "Synthetic fibers run slightly warmer than all-cotton sets",
      "Static can build up in dry climates",
    ],
    bestFor: "Sleepers who want a soft, hotel-style feel without natural fiber pricing.",
    howToUse: "Use a dryer sheet or wool dryer balls when tumble drying to help reduce static buildup.",
  },
  {
    id: "p32",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 6,
    name: "Mellanni Queen Sheets Set – 4 PC Iconic Collection Bedding",
    asin: "B00NLLUMOE",
    imageUrl: "https://m.media-amazon.com/images/I/61AbPNNxrcL._AC_SL1500_.jpg",
    badge: "Best Hypoallergenic Pick",
    summary:
      "A long-standing, hypoallergenic sheet set known for its durable brushed microfiber construction and broad color range.",
    pros: [
      "Hypoallergenic fabric suits sensitive skin",
      "Wide range of color options",
      "Durable construction holds up to repeated washing",
    ],
    cons: [
      "Slightly thinner feel than premium cotton sateen",
      "Deep pockets may still need clip extenders on very thick mattresses",
    ],
    bestFor: "Sensitive-skin sleepers who want a durable, widely available sheet set.",
    howToUse: "Wash separately the first time to avoid dye transfer with other lighter fabrics.",
  },
  {
    id: "p33",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 7,
    name: "HYMOKEGE Queen Comforter Set, Seersucker, 7 Pieces",
    asin: "B0BNJDPSF7",
    imageUrl: "https://m.media-amazon.com/images/I/81VVMnTq4aL._AC_SL1500_.jpg",
    badge: "Best Textured Comforter Set",
    summary:
      "A seven-piece seersucker comforter set that adds textured visual interest along with full bed-in-a-bag convenience.",
    pros: [
      "Seven-piece set covers comforter, sheets, and shams in one purchase",
      "Seersucker texture adds visual depth without heavy patterns",
      "Lightweight comforter fill suits moderate climates",
    ],
    cons: [
      "Seersucker texture may not suit those who prefer smooth fabric",
      "Bundled sheet quality is more basic than standalone sheet sets",
    ],
    bestFor: "Shoppers who want one all-in-one purchase to redo a bedroom's look quickly.",
    howToUse: "Wash the comforter separately from the sheet set components to keep fill from clumping.",
  },
  {
    id: "p34",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 8,
    name: "CozyLux Queen Comforter Set, Dark Grey – Bed in a Bag, 7 Pieces",
    asin: "B08CRJYM55",
    imageUrl: "https://m.media-amazon.com/images/I/81h5lBDrl2L._AC_SL1500_.jpg",
    badge: "Best Neutral Bed-in-a-Bag",
    summary:
      "A versatile dark grey bed-in-a-bag set offering a complete, coordinated bedroom refresh in one box.",
    pros: [
      "Coordinated 7-piece set simplifies bedroom styling",
      "Neutral dark grey pairs with most decor styles",
      "Reversible comforter design offers two looks in one",
    ],
    cons: [
      "Included sheets are thinner than dedicated high-thread-count sets",
      "Comforter may need fluffing after the first few washes",
    ],
    bestFor: "Anyone wanting a fast, coordinated bedroom refresh in a neutral palette.",
    howToUse: "Use a large-capacity washer or laundromat machine when washing the full comforter to ensure even cleaning.",
  },
  {
    id: "p35",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 9,
    name: "Love's Cabin Full Comforter Set, Black, 7 Pieces, Bed in a Bag",
    asin: "B0CFLJZ7B1",
    imageUrl: "https://m.media-amazon.com/images/I/71hrJcCLbKL._AC_SL1500_.jpg",
    badge: "Best Full-Size Bundle",
    summary:
      "A bold black seven-piece bed-in-a-bag set sized for full mattresses, suited to a modern, minimalist bedroom look.",
    pros: [
      "Full-size specific sizing fits properly without excess bulk",
      "Bundled pillowcases and shams complete the look in one box",
      "Bold black colorway suits modern interiors",
    ],
    cons: [
      "Dark color can show lint and pet hair more visibly",
      "Comforter fill is lighter weight, best for moderate climates",
    ],
    bestFor: "Full-bed owners wanting a complete, modern black bedding bundle.",
    howToUse: "Shake out and air the comforter after unboxing to release packaging creases before making the bed.",
  },
  {
    id: "p36",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 10,
    name: "CozyLux Queen Comforter Set, Black, 7 Pieces, Bed in a Bag",
    asin: "B0C4GJSJ9M",
    imageUrl: "https://m.media-amazon.com/images/I/71M6BBe+0oL._AC_SL1500_.jpg",
    badge: "Best Queen Black Bundle",
    summary:
      "A queen-sized black bed-in-a-bag set with matching shams and pillowcases for a cohesive, all-in-one bedroom update.",
    pros: [
      "Complete 7-piece coordinated set",
      "Reversible design offers a second look without buying extra pieces",
      "Easy-care fabric handles regular washing",
    ],
    cons: [
      "Dark fabric requires more frequent lint removal",
      "Comforter loft is moderate rather than ultra-plush",
    ],
    bestFor: "Queen-bed owners who want an instant, matched bedroom refresh.",
    howToUse: "Wash the comforter on a gentle, large-load cycle and air dry or tumble dry on low to preserve the fill structure.",
  },
  {
    id: "p37",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 11,
    name: "HEVUMYI 7 Pieces Queen Comforter Set, All Season Reversible",
    asin: "B0BLVH5YX3",
    imageUrl: "https://m.media-amazon.com/images/I/81AcetDHWhL._AC_SL1500_.jpg",
    badge: "Best All-Season Set",
    summary:
      "A reversible, all-season comforter set designed to work across both warmer and cooler months with two coordinating looks.",
    pros: [
      "Reversible comforter adapts to seasonal color preferences",
      "All-season fill weight balances warmth and breathability",
      "Coordinated shams and pillowcases included",
    ],
    cons: [
      "All-season weight may run light for very cold bedrooms",
      "Pattern combinations are limited to the set's two reversible sides",
    ],
    bestFor: "Shoppers wanting one comforter set that works across most of the year.",
    howToUse: "Flip the comforter seasonally to make use of both reversible color sides as the room temperature shifts.",
  },
  {
    id: "p38",
    articleSlug: "best-bed-sheets-bedding-sets",
    rank: 12,
    name: "MUXHOMO 7 Pieces Queen Comforter Set, Reversible Bed in a Bag",
    asin: "B0DQ8CZ187",
    imageUrl: "https://m.media-amazon.com/images/I/71hrwW+qkQL._AC_SL1500_.jpg",
    badge: "Best Complete Bundle",
    summary:
      "A full seven-piece reversible bed-in-a-bag set rounding out the lineup with complete coordinated coverage for a queen bed.",
    pros: [
      "Comprehensive 7-piece set needs no additional purchases",
      "Reversible design doubles your styling options",
      "Competitive pricing for the number of included pieces",
    ],
    cons: [
      "Included flat sheet runs thinner than the comforter quality",
      "Limited size availability outside queen",
    ],
    bestFor: "First-time bedroom shoppers who want everything included in a single box.",
    howToUse: "Lay out all seven pieces before assembly to confirm sham and pillowcase pairings match your pillow sizes.",
  },

  // CATEGORY 5 — Mattress Protectors & Toppers
  {
    id: "p39",
    articleSlug: "best-mattress-protectors-toppers",
    rank: 1,
    name: "BEDLORE Waterproof Mattress Protector, Full Size",
    asin: "B0C1NN6Y5H",
    imageUrl: "https://m.media-amazon.com/images/I/71+omVwPiXL._AC_SL1500_.jpg",
    badge: "Best for Protection",
    summary:
      "A fully waterproof, noiseless mattress protector designed to guard against spills and allergens without altering the mattress feel.",
    pros: [
      "Waterproof barrier protects against spills and accidents",
      "Noiseless fabric avoids the crinkling sound of older vinyl protectors",
      "Breathable surface preserves the original mattress feel",
    ],
    cons: [
      "Should be washed on a gentle cycle to preserve the waterproof layer",
      "Tight, deep-pocket fit can be snug on very thick mattresses",
    ],
    bestFor: "Anyone wanting reliable waterproofing without sacrificing comfort or quiet.",
    howToUse: "Fit the protector with the waterproof side facing up and wash periodically on a gentle, cool cycle to preserve the membrane.",
  },
  {
    id: "p40",
    articleSlug: "best-mattress-protectors-toppers",
    rank: 2,
    name: "Niagara Sleep Solution Ultra Soft Full Size Mattress Topper",
    asin: "B07JQSWJJS",
    imageUrl: "https://m.media-amazon.com/images/I/81YYCJW3PTL._AC_SL1500_.jpg",
    badge: "Best for Hot Sleepers",
    summary:
      "A bamboo-blend cooling mattress topper designed to add plush softness while helping regulate temperature overnight.",
    pros: [
      "Bamboo-derived fabric promotes breathability",
      "Plush topper layer softens firmer mattresses",
      "Elastic skirt keeps the topper securely in place",
    ],
    cons: [
      "Adds noticeable height, which may affect fitted sheet sizing",
      "Needs occasional fluffing to maintain loft",
    ],
    bestFor: "Hot sleepers who want a softer mattress feel with better airflow.",
    howToUse: "Air out the topper for a few hours after unboxing before placing your fitted sheet over it.",
  },
  {
    id: "p41",
    articleSlug: "best-mattress-protectors-toppers",
    rank: 3,
    name: "Quilted Fitted Mattress Pad, Full Mattress Protector Topper",
    asin: "B00NESDSKY",
    imageUrl: "https://m.media-amazon.com/images/I/81o-fAm35DL._AC_SL1500_.jpg",
    badge: "Best Quilted Comfort",
    summary:
      "A quilted fitted mattress pad that adds a soft cushioned layer while doubling as light protection for the mattress surface.",
    pros: [
      "Quilted construction adds a noticeably plush top layer",
      "Fitted elastic skirt stays secure through the night",
      "Machine washable for simple care",
    ],
    cons: [
      "Not fully waterproof like dedicated protectors",
      "Adds some bulk under fitted sheets",
    ],
    bestFor: "Sleepers wanting extra plushness on a firm mattress without a full waterproof barrier.",
    howToUse: "Smooth the quilted pad flat before fitting your sheet to avoid bunching under the sleeping surface.",
  },
  {
    id: "p42",
    articleSlug: "best-mattress-protectors-toppers",
    rank: 4,
    name: "PlushDeluxe Premium Bamboo Mattress Protector – King Size",
    asin: "B07H71SBC4",
    imageUrl: "https://m.media-amazon.com/images/I/71hbSHaDAmL._AC_SL1280_.jpg",
    badge: "Best Bamboo Protector",
    summary:
      "A breathable bamboo-rayon mattress protector built for king-size beds, combining waterproofing with a soft, natural-feeling surface.",
    pros: [
      "Bamboo-rayon surface feels soft and breathable",
      "Waterproof backing guards against spills",
      "Sized properly for king mattresses",
    ],
    cons: [
      "Premium fabric comes at a higher price point than basic protectors",
      "Should avoid high heat when drying to protect the waterproof layer",
    ],
    bestFor: "King-bed owners who want a natural-feeling, breathable waterproof layer.",
    howToUse: "Wash in cold or warm water and tumble dry on low heat to maintain both softness and waterproofing.",
  },
  {
    id: "p43",
    articleSlug: "best-mattress-protectors-toppers",
    rank: 5,
    name: "BEDLORE King Mattress Topper, Viscose Derived from Bamboo",
    asin: "B0D3D4WHSF",
    imageUrl: "https://m.media-amazon.com/images/I/81fEHxFn38L._AC_SL1500_.jpg",
    badge: "Best King-Size Topper",
    summary:
      "A plush, bamboo-viscose mattress topper for king beds that adds cushioning and breathability to an aging or firm mattress.",
    pros: [
      "Bamboo viscose fabric is soft and breathable",
      "Deep stretch skirt accommodates thicker mattresses",
      "Adds noticeable plushness to firmer surfaces",
    ],
    cons: [
      "Significant added height may require deep-pocket sheets",
      "Needs a few days to fully decompress and loft after unboxing",
    ],
    bestFor: "King-bed owners wanting to soften and refresh an older or firmer mattress.",
    howToUse: "Allow 24-48 hours for the topper to fully expand after unpacking before assessing the final feel.",
  },
  {
    id: "p44",
    articleSlug: "best-mattress-protectors-toppers",
    rank: 6,
    name: "EASELAND King Size Mattress Pad, Pillow Top Mattress Cover",
    asin: "B07413BLNN",
    imageUrl: "https://m.media-amazon.com/images/I/61+GRc9EwgL._AC_SL1500_.jpg",
    badge: "Best Pillow-Top Feel",
    summary:
      "A pillow-top style mattress pad that combines a stretchable fitted skirt with hypoallergenic fill for a hotel-like plush surface.",
    pros: [
      "Pillow-top design adds a noticeably plush sleeping surface",
      "Hypoallergenic fill suits sensitive sleepers",
      "Stretch skirt fits a range of mattress depths",
    ],
    cons: [
      "Bulkier than thin protector-style pads",
      "Best paired with deep-pocket sheets due to added height",
    ],
    bestFor: "Sleepers who want a hotel-style pillow-top feel without replacing the mattress.",
    howToUse: "Stretch the fitted skirt fully under each corner of the mattress to keep the pad from shifting overnight.",
  },
  {
    id: "p45",
    articleSlug: "best-mattress-protectors-toppers",
    rank: 7,
    name: "Full Size Mattress Protector, Waterproof Mattress Topper Pad Cover",
    asin: "B08BC4XLV2",
    imageUrl: "https://m.media-amazon.com/images/I/71RUS4Pf24L._AC_SL1500_.jpg",
    badge: "Best Full-Size Protector",
    summary:
      "A waterproof, breathable mattress protector sized for full mattresses, balancing spill protection with everyday comfort.",
    pros: [
      "Waterproof layer protects against spills and accidents",
      "Breathable surface fabric minimizes the 'plastic' feel of older protectors",
      "Properly sized for full mattresses with deep pockets",
    ],
    cons: [
      "Should be washed on a gentle, cool cycle to preserve waterproofing",
      "Slight crinkle sound may be noticeable to very light sleepers",
    ],
    bestFor: "Full-bed owners wanting dependable waterproof protection at a reasonable price.",
    howToUse: "Fit snugly over the mattress before adding sheets, and avoid high-heat drying which can damage the waterproof membrane.",
  },
  {
    id: "p46",
    articleSlug: "best-mattress-protectors-toppers",
    rank: 8,
    name: "Bedsure Twin XL Mattress Pad – Soft Mattress Topper for College Dorm",
    asin: "B0738B8SQS",
    imageUrl: "https://m.media-amazon.com/images/I/81dTkiWb-WL._AC_SL1500_.jpg",
    badge: "Best for Dorm Beds",
    summary:
      "A soft, hypoallergenic mattress pad sized specifically for Twin XL dorm mattresses, adding comfort to thin dorm bedding setups.",
    pros: [
      "Twin XL sizing fits standard dorm mattresses precisely",
      "Hypoallergenic fill suits shared or sensitive environments",
      "Lightweight and easy to pack for move-in",
    ],
    cons: [
      "Limited to Twin XL sizing only",
      "Not waterproof, so it works best alongside a separate protector for spills",
    ],
    bestFor: "College students wanting extra comfort on a standard-issue dorm mattress.",
    howToUse: "Pair with a separate waterproof protector if spill protection is also a priority in a dorm setting.",
  },
  {
    id: "p47",
    articleSlug: "best-mattress-protectors-toppers",
    rank: 9,
    name: "MATBEBY Queen Size Mattress Pad – Cooling Breathable Mattress Topper",
    asin: "B08KNXHJSK",
    imageUrl: "https://m.media-amazon.com/images/I/71AnlsSYq6L._AC_SL1500_.jpg",
    badge: "Best Cooling Topper",
    summary:
      "A breathable, stretch-fit mattress pad designed to add cushioning while helping minimize overnight heat buildup.",
    pros: [
      "Breathable fill promotes airflow for warmer sleepers",
      "Stretch-to-fit skirt accommodates varying mattress depths",
      "Machine washable for simple maintenance",
    ],
    cons: [
      "Not a full waterproof solution",
      "Loft can compress over extended use and require occasional fluffing",
    ],
    bestFor: "Queen-bed sleepers who want a cooling, cushioned layer without full waterproofing.",
    howToUse: "Tumble dry on low with a few minutes of fluffing time to help restore loft after each wash.",
  },
  {
    id: "p48",
    articleSlug: "best-mattress-protectors-toppers",
    rank: 10,
    name: "SameBed Mattress Topper Queen, Extra Thick Mattress Pad Cover",
    asin: "B0BYNPPW8V",
    imageUrl: "https://m.media-amazon.com/images/I/71RWeYppqJL._AC_SL1500_.jpg",
    badge: "Best Extra-Thick Pick",
    summary:
      "An extra-thick, overfilled mattress topper designed to dramatically soften a firm mattress with substantial plush coverage.",
    pros: [
      "Extra-thick fill noticeably softens firm mattresses",
      "Overfilled construction adds a hotel-like plush feel",
      "Deep pockets accommodate the added topper height",
    ],
    cons: [
      "Significant added bulk requires deep-pocket fitted sheets",
      "Bigger and heavier to wash than slimmer toppers",
    ],
    bestFor: "Sleepers with a firm mattress who want maximum added plushness.",
    howToUse: "Let the topper fully decompress for a day or two after unboxing, and use extra-deep fitted sheets to accommodate the height.",
  },
];

export const products: Product[] = raw.map((p) => ({
  ...p,
  affiliateUrl: buildAffiliateUrl(p.asin),
}));

export function getProductsByArticle(slug: string) {
  return products
    .filter((p) => p.articleSlug === slug)
    .sort((a, b) => a.rank - b.rank);
}

export function getTopRatedProducts() {
  return products.filter((p) => p.rank === 1);
}
