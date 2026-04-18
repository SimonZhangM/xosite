"use client";

import Image from "next/image";
import { startTransition, useState } from "react";

type PreviewItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

export function PreviewSwitcher({ items }: { items: PreviewItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative pt-10 sm:pt-12">
        <div className="absolute inset-x-0 top-5 z-10 flex justify-center px-4">
          <div className="inline-flex max-w-full gap-2 overflow-x-auto rounded-full border border-[var(--line)] bg-white/95 p-2 shadow-[0_20px_44px_rgba(21,50,76,0.12)] backdrop-blur">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    startTransition(() => setActiveIndex(index));
                  }}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--text-strong)] text-white shadow-[0_10px_24px_rgba(21,50,76,0.12)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]"
                  }`}
                  aria-pressed={isActive}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto max-w-[64rem] pt-12 sm:pt-14">
          <div className="relative aspect-[1799/1305] shadow-[0_24px_60px_rgba(15,23,42,0.10),0_8px_24px_rgba(15,23,42,0.06)]">
            <div className="relative isolate h-full w-full overflow-hidden rounded-[6px] [clip-path:inset(0_round_6px)]">
              {items.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <Image
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`scale-[1.004] object-cover object-top transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                    sizes="(min-width: 1280px) 1120px, (min-width: 768px) 90vw, 100vw"
                    priority={index === 0}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
