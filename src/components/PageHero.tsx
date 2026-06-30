import type { ReactNode } from "react";

/** Dark grid hero used at the top of inner pages (hizmetler, hakkimizda, ...). */
export default function PageHero({
  kicker,
  title,
  subtitle,
  titleClass = "text-[clamp(2.75rem,9vw,6.5rem)]",
}: {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  titleClass?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-32 pb-14 text-white lg:pt-36 lg:pb-20">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a06bff]">
          {kicker}
        </span>
        <h1
          className={`mt-5 max-w-4xl font-black uppercase leading-[0.85] tracking-[-0.03em] ${titleClass}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base text-white/60 lg:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
