import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import CtaSection from "@/components/CtaSection";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Proje bulunamadı | AppIQ Development" };
  return {
    title: `${project.title} — ${project.category} | AppIQ Development`,
    description: project.desc,
  };
}

// ponytail: detail content is shared placeholder per project (no backend / no CMS yet).
// Swap these constants for real per-project copy when content exists.
const META = [
  ["Müşteri", "Gizli (NDA)"],
  ["Süre", "4 ay"],
  ["Rol", "Tasarım & Geliştirme"],
];

const OVERVIEW =
  "Projeye keşif aşamasıyla başladık: hedefleri, kullanıcıları ve teknik kısıtları netleştirdik. Ardından tıklanabilir prototipten üretime kadar kısa döngülerle ilerledik. Sonuçta hızlı, ölçeklenebilir ve bakımı kolay bir ürün teslim ettik.";

const CHALLENGE =
  "Mevcut süreç dağınıktı; birden fazla araç, manuel adımlar ve ölçeklenmeyen bir altyapı vardı. Ekibin asıl işine odaklanması için tüm akışı tek bir üründe toplamak gerekiyordu.";

const SOLUTION =
  "Modüler bir mimari kurduk, kritik akışları otomatikleştirdik ve performansı baştan önceliklendirdik. Tasarım sistemi sayesinde arayüz tutarlı, geliştirme hızlı ve sonraki sürümler öngörülebilir oldu.";

const FEATURES = [
  ["Uçtan Uca Akış", "Kullanıcı yolculuğunun tamamı tek üründe, kesintisiz."],
  ["Gerçek Zamanlı Veri", "Anlık güncellemeler ve canlı durum takibi."],
  ["Ölçeklenebilir Altyapı", "Artan yük altında otomatik ölçeklenen bulut mimarisi."],
  ["Rol Bazlı Erişim", "Granüler yetkilendirme ve güvenli oturum yönetimi."],
  ["Analitik & Raporlama", "Kararları destekleyen panolar ve dışa aktarım."],
  ["Mobil Uyumlu", "Her ekran boyutunda akıcı, erişilebilir deneyim."],
];

const RESULTS = [
  ["%40", "Daha hızlı süreç"],
  ["3x", "Kullanıcı etkileşimi"],
  ["%99.9", "Çalışma süresi"],
];

export default async function ProjeDetay({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <div className="overflow-x-hidden bg-white font-sans text-black selection:bg-[#6400FF] selection:text-white">
      <SiteNav />
      <main>
        {/* Hero banner */}
        <section className="bg-[#050505] pt-28 pb-12 lg:pt-32 lg:pb-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <Link
              href="/hizmetler#projeler"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
            >
              ← Tüm Projeler
            </Link>
            <div
              className={`mt-6 flex aspect-[21/9] items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
            >
              <span className="px-4 text-center text-5xl font-black uppercase tracking-tight text-white/90 sm:text-7xl lg:text-8xl">
                {project.title}
              </span>
            </div>
          </div>
        </section>

        {/* Title + meta */}
        <section className="bg-white py-16 text-black lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#6400FF]">
                  {project.category}
                </span>
                <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-tight lg:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/70">
                  {project.desc}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-px border border-black/10 bg-black/10">
                  {[...META, ["Yıl", project.year]].map(([k, v]) => (
                    <div key={k} className="bg-white p-5">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                        {k}
                      </div>
                      <div className="mt-1.5 text-sm font-semibold">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Genel Bakış */}
        <section className="border-t border-black/10 bg-white py-16 text-black lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:px-12">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6400FF] lg:col-span-4">
              Genel Bakış
            </h2>
            <p className="text-lg leading-relaxed text-black/70 lg:col-span-8">
              {OVERVIEW}
            </p>
          </div>
        </section>

        {/* Zorluk & Çözüm */}
        <section className="bg-[#0A0A0A] py-16 text-white lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 lg:px-12">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a06bff]">
                Zorluk
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                {CHALLENGE}
              </p>
            </div>
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a06bff]">
                Çözüm
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                {SOLUTION}
              </p>
            </div>
          </div>
        </section>

        {/* Özellikler */}
        <section className="bg-white py-16 text-black lg:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6400FF]">
              Öne Çıkan Özellikler
            </h2>
            <div className="mt-10 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(([title, desc], i) => (
                <div key={title} className="bg-white p-7">
                  <div className="font-mono text-sm text-[#6400FF]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-lg font-black tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teknolojiler + Sonuçlar */}
        <section className="border-t border-black/10 bg-white py-16 text-black lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:px-12">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6400FF]">
                Teknolojiler
              </h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="border border-black/15 px-4 py-2 text-sm font-medium text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6400FF]">
                Sonuçlar
              </h2>
              <div className="mt-6 grid grid-cols-3 gap-6">
                {RESULTS.map(([num, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-black tracking-tight lg:text-4xl">
                      {num}
                    </div>
                    <div className="mt-1 text-xs text-black/50">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sonraki proje */}
        <section className="bg-[#050505] py-16 text-white lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <Link href={`/projeler/${next.slug}`} className="group block">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
                Sonraki Proje
              </span>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-4xl font-black uppercase tracking-tight transition-colors group-hover:text-[#a06bff] lg:text-6xl">
                  {next.title}
                </span>
                <span className="text-3xl transition-transform group-hover:translate-x-2 lg:text-5xl">
                  →
                </span>
              </div>
            </Link>
          </div>
        </section>

        <CtaSection
          title={
            <>
              Benzer bir proje mi
              <br />
              <span className="text-[#6400FF]">düşünüyorsun?</span>
            </>
          }
          subtitle="Fikrini konuşalım. İlk görüşme ücretsiz, taahhüt yok."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
