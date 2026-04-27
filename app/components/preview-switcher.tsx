"use client";

import Image from "next/image";
import { startTransition, useState } from "react";

type PreviewItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
  highlights: readonly string[];
};

export function PreviewSwitcher({ items }: { items: readonly PreviewItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid items-start gap-5 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <aside className="h-fit rounded-2xl border border-[var(--line)] bg-white p-3 shadow-[var(--shadow-soft)]">
          <div className="grid gap-2">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    startTransition(() => setActiveIndex(index));
                  }}
                  className={`rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--text-strong)] text-white shadow-[0_12px_28px_rgba(21,50,76,0.16)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="block text-sm font-semibold">{item.title}</span>
                  <span className={`mt-1 block text-xs leading-5 ${isActive ? "text-white/70" : "text-[var(--text-soft)]"}`}>
                    {item.description}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="mx-auto w-full max-w-[calc((100vh-9rem)*1799/1305)] min-w-0 rounded-2xl border border-[var(--line)] bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.12)] lg:justify-self-center">
          <div className="relative aspect-[1799/1305] overflow-hidden rounded-xl bg-white">
              {items.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <Image
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`scale-[1.006] object-cover object-top transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                    sizes="(min-width: 1280px) 820px, (min-width: 1024px) 64vw, 100vw"
                    priority={index === 0}
                  />
                );
              })}
          </div>
          <div className="grid gap-2 px-2 py-4 sm:grid-cols-3">
            {items[activeIndex]?.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex min-h-14 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 text-center text-sm font-medium leading-6 text-[var(--text-strong)]"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
