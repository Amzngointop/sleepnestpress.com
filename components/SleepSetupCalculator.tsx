"use client";

import { useState } from "react";
import Link from "next/link";

type Position = "back" | "side" | "stomach" | "combination";
type Temperature = "hot" | "neutral" | "cold";

interface Recommendation {
  pillow: string;
  pillowHref: string;
  blanket: string;
  blanketHref: string;
  sheet: string;
  sheetHref: string;
}

function getRecommendation(position: Position, temperature: Temperature): Recommendation {
  const pillowLoft: Record<Position, string> = {
    back: "Medium loft, gusseted support",
    side: "High loft, contoured cervical",
    stomach: "Low loft, soft and flat",
    combination: "Adjustable, customizable loft",
  };

  const blanketType: Record<Temperature, string> = {
    hot: "Breathable cooling blanket",
    neutral: "Mid-weight cotton blanket",
    cold: "Weighted or fleece blanket",
  };

  const sheetMaterial: Record<Temperature, string> = {
    hot: "Cooling waffle-weave sheets",
    neutral: "Breathable microfiber sheets",
    cold: "Soft brushed cotton sheets",
  };

  return {
    pillow: pillowLoft[position],
    pillowHref: "/best/best-pillows",
    blanket: blanketType[temperature],
    blanketHref: "/best/best-weighted-cooling-blankets",
    sheet: sheetMaterial[temperature],
    sheetHref: "/best/best-bed-sheets-bedding-sets",
  };
}

export default function SleepSetupCalculator() {
  const [position, setPosition] = useState<Position>("side");
  const [temperature, setTemperature] = useState<Temperature>("neutral");
  const [revealKey, setRevealKey] = useState(0);

  const recommendation = getRecommendation(position, temperature);

  function handleChange<T>(setter: (v: T) => void, value: T) {
    setter(value);
    setRevealKey((k) => k + 1);
  }

  return (
    <section
      id="sleep-calculator"
      className="rounded-2xl bg-[#211F2B] text-[#F3EEE4] px-6 py-10 sm:px-10 sm:py-12"
    >
      <p className="eyebrow-accent mb-2">Interactive Tool</p>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Sleep Setup Calculator</h2>
      <p className="text-sm text-[#C7C4D6] max-w-xl mb-8 leading-relaxed">
        Tell us how you sleep and we&apos;ll suggest a pillow loft, blanket type, and sheet material to match.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#A9A6BD] mb-3">Sleep Position</p>
            <div className="grid grid-cols-2 gap-2">
              {(["back", "side", "stomach", "combination"] as Position[]).map((pos) => (
                <button
                  key={pos}
                  type="button"
                  onClick={() => handleChange(setPosition, pos)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium capitalize border transition-colors ${
                    position === pos
                      ? "bg-[#4D4A99] border-[#4D4A99] text-white"
                      : "bg-transparent border-[#454259] text-[#C7C4D6] hover:border-[#6A67B8]"
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#A9A6BD] mb-3">Temperature Preference</p>
            <div className="grid grid-cols-3 gap-2">
              {(["hot", "neutral", "cold"] as Temperature[]).map((temp) => (
                <button
                  key={temp}
                  type="button"
                  onClick={() => handleChange(setTemperature, temp)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium capitalize border transition-colors ${
                    temperature === temp
                      ? "bg-[#4D4A99] border-[#4D4A99] text-white"
                      : "bg-transparent border-[#454259] text-[#C7C4D6] hover:border-[#6A67B8]"
                  }`}
                >
                  {temp === "hot" ? "Runs Hot" : temp === "cold" ? "Runs Cold" : "Neutral"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div key={revealKey} className="reveal-anim">
          <div className="relative w-full max-w-[280px] mb-6">
            <div className="flex items-center justify-between gap-3 relative z-10 mb-[-14px]">
              <div className="rounded-full bg-[#4D4A99] text-white text-[11px] font-semibold px-4 py-2 shadow-md">
                Pillow
              </div>
              <div className="rounded-full bg-[#6A67B8] text-white text-[11px] font-semibold w-11 h-11 flex items-center justify-center shrink-0 shadow-md">
                You
              </div>
              <div className="rounded-full bg-[#33313F] text-white text-[11px] font-semibold px-4 py-2 shadow-md">
                Blanket
              </div>
            </div>
            <div className="h-11 w-full rounded-xl bg-[#2A2836] border border-[#3A3847]" />
          </div>

          <div className="space-y-3">
            <Link
              href={recommendation.pillowHref}
              className="block rounded-lg bg-[#2B2838] px-4 py-3 hover:bg-[#332F45] transition-colors"
            >
              <p className="text-xs uppercase tracking-wide text-[#A9A6BD]">Pillow</p>
              <p className="text-sm font-semibold text-white">{recommendation.pillow} →</p>
            </Link>
            <Link
              href={recommendation.blanketHref}
              className="block rounded-lg bg-[#2B2838] px-4 py-3 hover:bg-[#332F45] transition-colors"
            >
              <p className="text-xs uppercase tracking-wide text-[#A9A6BD]">Blanket</p>
              <p className="text-sm font-semibold text-white">{recommendation.blanket} →</p>
            </Link>
            <Link
              href={recommendation.sheetHref}
              className="block rounded-lg bg-[#2B2838] px-4 py-3 hover:bg-[#332F45] transition-colors"
            >
              <p className="text-xs uppercase tracking-wide text-[#A9A6BD]">Sheets</p>
              <p className="text-sm font-semibold text-white">{recommendation.sheet} →</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
