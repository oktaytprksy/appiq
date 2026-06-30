import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <section
      id="projeler"
      className="relative overflow-hidden bg-[#050505] py-24 text-white lg:py-32"
    >
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <header className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a06bff]">
              Seçili İşler
            </span>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-tight lg:text-6xl">
              Geliştirdiğimiz
              <br />
              <span className="text-white/40">Ürünler.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/60">
            Fikir aşamasından canlı ürüne kadar tasarladığımız ve geliştirdiğimiz
            seçili projelerden bazıları.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <Link
              key={p.no}
              href={`/projeler/${p.slug}`}
              className="group flex flex-col border border-white/10 bg-white/[0.02] transition-colors hover:border-white/30"
            >
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${p.gradient}`}
              >
                <span className="text-5xl font-black uppercase tracking-tight text-white/90">
                  {p.title}
                </span>
                <span className="absolute right-3 top-3 font-mono text-[11px] text-white/70">
                  /{p.no}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a06bff]">
                    {p.category}
                  </span>
                  <span className="font-mono text-[11px] text-white/40">
                    {p.year}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-black tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="border border-white/15 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 transition-colors group-hover:text-white">
                  Projeyi İncele
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
