import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim — Projenizi Konuşalım | AppIQ Development",
  description:
    "Web, mobil veya yapay zeka projeniz mi var? Formu doldurun, size dönelim. İlk görüşme ücretsiz, taahhüt yok.",
};

const POINTS = [
  ["E-posta", CONTACT_EMAIL],
  ["Yanıt süresi", "24 saat içinde"],
  ["İlk görüşme", "Ücretsiz · taahhüt yok"],
];

export default function IletisimPage() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-black selection:bg-[#6400FF] selection:text-white">
      <SiteNav />
      <main>
        <section className="relative bg-[#050505] pt-32 pb-14 text-white lg:pt-36 lg:pb-20">
          <div className="bg-grid-dark absolute inset-0" aria-hidden />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_minmax(0,520px)] lg:px-12">
            {/* sol: bilgi */}
            <div className="lg:pt-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a06bff]">
                İletişim
              </span>
              <h1 className="mt-5 font-black uppercase leading-[0.85] tracking-[-0.03em] text-[clamp(2.75rem,8vw,5.5rem)]">
                Projenizi
                <br />
                <span className="text-white/40">Konuşalım.</span>
              </h1>
              <p className="mt-6 max-w-md text-base text-white/60 lg:text-lg">
                Aklınızdaki fikri anlatın. Size en uygun çözümü, süreyi ve
                yaklaşık maliyeti birlikte netleştirelim.
              </p>

              <div className="mt-10 space-y-px border border-white/10 bg-white/10">
                {POINTS.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-4 bg-[#050505] px-5 py-4"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
                      {k}
                    </span>
                    <span className="text-sm text-white/80">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* sağ: form kartı */}
            <div className="bg-white p-6 text-black lg:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
