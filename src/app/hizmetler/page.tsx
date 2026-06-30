import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Hizmetler — Web, Mobil, Yapay Zeka | AppIQ Development",
  description:
    "Web ve mobil uygulama geliştirme, yapay zeka çözümleri, ürün tasarımı ve bulut altyapısı. Geliştirdiğimiz seçili projeleri inceleyin.",
};

const SERVICES = [
  {
    no: "01",
    title: "Web Uygulamaları",
    desc: "Next.js ve React ile hızlı, ölçeklenebilir web uygulamaları. Kurumsal paneller, SaaS ürünleri ve e-ticaret platformları.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    no: "02",
    title: "Mobil Uygulamalar",
    desc: "iOS ve Android için native performansında uygulamalar. Tek kod tabanı, mağazaya hazır teslim.",
    tags: ["React Native", "Flutter", "Swift"],
  },
  {
    no: "03",
    title: "Yapay Zeka Çözümleri",
    desc: "LLM entegrasyonları, görüntü işleme, öneri sistemleri ve otonom ajanlar. Üretime hazır AI.",
    tags: ["LLM", "Computer Vision", "RAG"],
  },
  {
    no: "04",
    title: "Ürün & Arayüz Tasarımı",
    desc: "Kullanıcı araştırması, akış tasarımı, prototipleme ve tasarım sistemi. Dönüşüm getiren arayüzler.",
    tags: ["UX", "UI", "Design System"],
  },
  {
    no: "05",
    title: "Bulut & DevOps",
    desc: "AWS, GCP ve Kubernetes üzerinde otomatik dağıtım, izleme ve ölçeklendirme. Kesintisiz altyapı.",
    tags: ["AWS", "Kubernetes", "CI/CD"],
  },
  {
    no: "06",
    title: "Bakım & Destek",
    desc: "Teslim sonrası düzenli sürümler, hata takibi ve doğrudan iletişim. Ürününüz sizinle büyür.",
    tags: ["7/24 İzleme", "SLA", "Sürümler"],
  },
];

export default function HizmetlerPage() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-black selection:bg-[#6400FF] selection:text-white">
      <SiteNav />
      <main>
        <PageHero
          kicker="Ne Yapıyoruz"
          title="Hizmetler"
          titleClass="text-[clamp(3rem,10vw,7rem)]"
          subtitle="Fikirden canlı ürüne kadar her şey. Web, mobil, yapay zeka, tasarım ve altyapı — tek ekip, uçtan uca çözüm."
        />

        {/* Hizmet kartları */}
        <section className="relative bg-white py-24 text-black lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="grid gap-px border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <div
                  key={s.no}
                  className="group bg-white p-8 transition-colors hover:bg-[#6400FF] hover:text-white"
                >
                  <div className="font-mono text-sm text-[#6400FF] group-hover:text-white/80">
                    /{s.no}
                  </div>
                  <h3 className="mt-4 text-2xl font-black tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60 group-hover:text-white/80">
                    {s.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-black/15 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-black/50 group-hover:border-white/40 group-hover:text-white/80"
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

        <Projects />

        <CtaSection
          title={
            <>
              Bir fikriniz mi
              <br />
              <span className="text-[#6400FF]">var?</span>
            </>
          }
          subtitle="Projenizi konuşalım. İlk görüşme ücretsiz, taahhüt yok."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
