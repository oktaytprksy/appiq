import Link from "next/link";
import type { ReactNode } from "react";

/** White centered call-to-action strip used at the bottom of inner pages. */
export default function CtaSection({
  title,
  subtitle,
  label = "Hadi Konuşalım",
  href = "/iletisim",
}: {
  title: ReactNode;
  subtitle: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b-2 border-black bg-white py-28 text-black lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight lg:text-7xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base text-black/60">{subtitle}</p>
        <Link
          href={href}
          className="mt-8 inline-block bg-[#6400FF] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-transform hover:scale-[1.03]"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
