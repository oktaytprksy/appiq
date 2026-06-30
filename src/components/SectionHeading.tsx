import type { ReactNode } from "react";

/** Kicker + heading (+ optional subtitle) block reused across section tops. */
export default function SectionHeading({
  kicker,
  title,
  subtitle,
  dark = false,
  className = "",
}: {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <span
        className={`text-[11px] font-bold uppercase tracking-[0.3em] ${
          dark ? "text-[#a06bff]" : "text-[#6400FF]"
        }`}
      >
        {kicker}
      </span>
      <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-tight lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 max-w-xl text-sm lg:text-base ${
            dark ? "text-white/60" : "text-black/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
