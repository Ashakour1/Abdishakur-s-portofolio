import Image from "next/image";
import type { DailyUsageItem } from "@/lib/site-data";

type DailyUsagePreviewCardProps = {
  item: DailyUsageItem;
};

export function DailyUsagePreviewCard({ item }: DailyUsagePreviewCardProps) {
  return (
    <article className="grid gap-3 sm:grid-cols-[56px_1fr] sm:items-start">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
        <Image
          src={item.image}
          alt={item.name}
          width={112}
          height={112}
          className="h-14 w-14 object-cover"
        />
      </div>

      <div className="space-y-0.5">
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
