import Image from "next/image";
import type { DailyUsageItem } from "@/lib/site-data";

type DailyUsageCardProps = {
  item: DailyUsageItem;
};

export function DailyUsageCard({ item }: DailyUsageCardProps) {
  return (
    <article className="grid gap-4 py-5 sm:grid-cols-[56px_1fr] sm:items-start">
      <div className="overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          width={128}
          height={128}
          className="h-14 w-14 object-cover"
        />
      </div>

      <div className="space-y-1.5">
        <div className="space-y-0.5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
            {item.category}
          </p>
          <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
            {item.name}
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-slate-300">
          {item.description}
        </p>
      </div>
    </article>
  );
}
