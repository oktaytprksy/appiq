import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Hakkımızda — Ne Yapıyoruz, Nasıl Çalışıyoruz | AppIQ Development",
  description:
    "Web, mobil ve yapay zeka ürünleri geliştiren bir yazılım ekibiyiz. Değerlerimiz, çalışma sürecimiz ve kullandığımız teknolojiler.",
};

const VALUES = [
  {
    no: "01",
    title: "Sade ve Sürdürülebilir",
    desc: "En iyi kod, sonradan kolayca okunan ve büyütülebilen koddur. Gösteriş değil, kalıcılık için yazarız.",
  },
  {
    no: "02",
    title: "Şeffaf İletişim",
    desc: "Her aşamada ne yaptığımızı bilirsiniz. Sürpriz maliyet yok, gizli süreç yok. Açık ve doğrudan.",
  },
  {
    no: "03",
    title: "Teslim Bitiş Değildir",
    desc: "Ürün canlıya çıktıktan sonra da yanınızdayız. Düzenli sürümler, izleme ve hızlı destek.",
  },
  {
    no: "04",
    title: "Önce Problem",
    desc: "Teknolojiye değil, çözdüğümüz probleme aşığız. Doğru aracı işin gereğine göre seçeriz.",
  },
];

const STACK = [
  ["Frontend", ["Next.js", "React", "TypeScript", "Tailwind CSS"]],
  ["Backend", ["Node.js", "NestJS", "Python", "Go", "PostgreSQL"]],
  ["Mobil", ["React Native", "Flutter", "Swift", "Kotlin"]],
  ["Yapay Zeka", ["OpenAI", "Anthropic", "PyTorch", "LangChain", "RAG"]],
  ["Bulut & DevOps", ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"]],
  ["Tasarım", ["Figma", "Design Systems", "Prototyping"]],
] as const;

const PROCESS = [
  ["01", "Keşif", "İhtiyacı, hedefleri ve kapsamı netleştiririz. Doğru soruları sorarız."],
  ["02", "Tasarım", "Akışları ve arayüzleri tasarlar, tıklanabilir prototip çıkarırız."],
  ["03", "Geliştirme", "Kısa döngülerle geliştirir, her sürümde çalışan bir ürün gösteririz."],
  ["04", "Lansman & Bakım", "Canlıya alır, izler ve sürekli geliştiririz. Yanınızda kalırız."],
];

export default function HakkimizdaPage() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-black selection:bg-[#6400FF] selection:text-white">
      <SiteNav />
      <main>
        <PageHero
          kicker="Biz Kimiz"
          title={
            <>
              Dijital Ürünler
              <br />
              <span className="text-white/40">İnşa Eden Ekip.</span>
            </>
          }
          subtitle="AppIQ Development; web, mobil ve yapay zeka ürünleri geliştiren bir yazılım ekibidir. Fikir aşamasından canlı ürüne kadar tasarlar, kodlar ve büyütürüz — startuplar ve kurumsal ekipler için."
        />

        {/* Ne yapıyoruz */}
        <section className="bg-white py-24 text-black lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12 lg:px-12">
            <SectionHeading
              className="lg:col-span-5"
              kicker="Ne Yapıyoruz"
              title={
                <>
                  Karmaşayı
                  <br />
                  Çalışan Ürüne
                  <br />
                  Dönüştürürüz.
                </>
              }
            />
            <div className="space-y-5 text-base leading-relaxed text-black/60 lg:col-span-7 lg:text-lg">
              <p>
                Birçok ekip aynı sorunla geliyor: birden fazla tedarikçi, dağınık
                süreçler ve bir türlü çıkmayan ürün. Biz bu zinciri tek elde
                topluyoruz — tasarım, geliştirme, altyapı ve bakım aynı ekipte.
              </p>
              <p>
                Önce problemi anlıyoruz, sonra en yalın çözümü kuruyoruz. Gereksiz
                karmaşıklık yerine, hızlı çalışan ve büyütülebilen sistemler
                yazıyoruz. Kendi ürünlerimizi de aynı disiplinle geliştiriyoruz —
                bir şey bozulursa ilk biz hissediyoruz.
              </p>
              <p className="font-medium text-black">
                Sonuç: zamanında teslim, temiz kod ve teslimden sonra da devam
                eden bir ortaklık.
              </p>
            </div>
          </div>
        </section>

        {/* Değerler */}
        <section className="bg-[#0A0A0A] py-24 text-white lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <SectionHeading dark kicker="Değerlerimiz" title="Nasıl Çalışırız." />
            <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {VALUES.map((v) => (
                <div key={v.no} className="bg-[#0A0A0A] p-8">
                  <div className="font-mono text-sm text-[#6400FF]">/{v.no}</div>
                  <h3 className="mt-3 text-2xl font-black tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teknolojiler */}
        <section className="bg-white py-24 text-black lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <SectionHeading
              kicker="Teknolojiler"
              title="Neleri Kullanıyoruz."
              subtitle="Moda akımları değil, kanıtlanmış ve işin gereğine uygun araçlar. Modern, güvenilir ve ölçeklenebilir bir teknoloji yığını."
            />
            <div className="mt-12 grid gap-px border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
              {STACK.map(([group, items]) => (
                <div key={group} className="bg-white p-7">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                    {group}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((t) => (
                      <span
                        key={t}
                        className="border border-black/15 px-3 py-1.5 text-xs font-medium text-black/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Süreç */}
        <section className="bg-[#050505] py-24 text-white lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <SectionHeading dark kicker="Süreç" title="Fikirden Lansmana." />
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map(([no, title, desc]) => (
                <div key={no} className="border-t border-white/15 pt-6">
                  <div className="font-mono text-3xl font-black text-[#6400FF]">
                    {no}
                  </div>
                  <h3 className="mt-4 text-xl font-black tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          title={
            <>
              Birlikte bir şey
              <br />
              <span className="text-[#6400FF]">inşa edelim.</span>
            </>
          }
          subtitle="Aklınızdaki projeyi konuşalım. İlk görüşme ücretsiz, taahhüt yok."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
