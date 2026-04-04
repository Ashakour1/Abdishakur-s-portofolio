import Image from "next/image";
import type { DailyUsageItem } from "@/lib/site-data";

type DailyUsagePreviewCardProps = {
  item: DailyUsageItem;
};

export function DailyUsagePreviewCard({ item }: DailyUsagePreviewCardProps) {
  const isVectorImage = item.image.endsWith(".svg");

  return (
    <article className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.02]">
      <div className="border-b border-white/10 bg-background/60 p-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/[0.03]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            unoptimized={isVectorImage}
            sizes="(min-width: 768px) 44vw, 100vw"
            className="object-contain p-3"
          />
        </div>
      </div>

      <div className="space-y-1.5 p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
          {item.category}
        </p>
        <h3 className="text-[1.05rem] font-semibold tracking-tight text-white">
          {item.name}
        </h3>
        <p className="max-w-md text-sm leading-6 text-slate-300">
          {item.description}
        </p>
      </div>
    </article>
  );
}
