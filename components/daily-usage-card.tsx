import Image from "next/image";
import type { DailyUsageItem } from "@/lib/site-data";

type DailyUsageCardProps = {
  item: DailyUsageItem;
};

export function DailyUsageCard({ item }: DailyUsageCardProps) {
  const isVectorImage = item.image.endsWith(".svg");

  return (
    <article className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]">
      <div className="border-b border-white/10 bg-background/60 p-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/[0.03]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            unoptimized={isVectorImage}
            sizes="(min-width: 1024px) 28rem, (min-width: 768px) 44vw, 100vw"
            className="object-contain p-3"
          />
        </div>
      </div>

      <div className="space-y-3 p-5">
        <div className="space-y-0.5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
            {item.category}
          </p>
          <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
            {item.name}
          </h2>
        </div>
        <p className="text-sm leading-7 text-slate-300">
          {item.description}
        </p>
      </div>
    </article>
  );
}
