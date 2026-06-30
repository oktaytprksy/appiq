import Image from "next/image";

const AIS = [
  { name: "CHATGPT", src: "/logos/gpt.png" },
  { name: "CLAUDE", src: "/logos/anthropic.svg" },
  { name: "PERPLEXITY", src: "/logos/perplexity.png" },
  { name: "GEMINI", src: "/logos/gemini.png" },
];

const ITEMS = [
  {
    no: "(01)",
    title: "7 Farklı Tedarikçiyle Uğraşmayın",
    body: "Tasarım için bir ajans, geliştirme için freelancer, altyapı için bir başkası. Koordinasyon işin kendisinden uzun sürüyor. Biz tüm süreci üstleniyoruz — tasarlar, geliştirir, dağıtır ve sürdürürüz. Tek ekip. Uçtan uca.",
    tag: "TEK EKİP. TÜM SÜREÇ.",
  },
  {
    no: "(02)",
    title: "Sizi ve İşinizi Tanır",
    body: "Ekibimiz markanızı, kullanıcılarınızı ve iş hedeflerinizi öğrenir. Neyin işe yaradığını hatırlar. Her sürüm daha keskin olur. Ürününüz, sektörünüzü gerçekten anlayan bir ekibin elinden çıkar — herhangi bir tedarikçiden çok daha yakından.",
    tag: "HER HAFTA DAHA İYİ.",
  },
  {
    no: "(03)",
    title: "Teslimden Sonra da Yanınızda",
    body: "Gece bir hata mı çıktı? Fark etmeden müdahale ettik. Trafik mi arttı? Altyapı otomatik ölçeklendi. Yeni bir özellik mi lazım? Sürüm planında. Yangın söndürmeyle değil, bir özetle uyanırsınız.",
    tag: "7/24 İZLEME. SIFIR PANİK.",
  },
  {
    no: "(04)",
    title: "Her Platform. Tek Ekip.",
    body: "Kullanıcılarınız web'de, mobilde ve giderek yapay zekâ üzerinden size ulaşıyor. Biz hepsini kapsarız — web uygulamaları, native mobil, AI entegrasyonları ve bulut altyapısı. Müşterilerinizin olduğu her yerde var olun.",
    tag: "WEB + MOBİL + AI. TEK EKİP.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="neden-biz"
      className="relative z-30 -mt-20 overflow-hidden rounded-t-[60px] bg-white text-black shadow-[0_-40px_80px_rgba(0,0,0,0.15)] lg:rounded-t-[80px]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* sticky sol */}
          <div className="self-start lg:sticky lg:top-32 lg:col-span-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6400FF]">
              Neden Biz
            </span>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-tight lg:text-7xl">
              Tedarikçi Değil.
              <br />
              <span className="text-black/40">Ortağınız.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm text-black/60 lg:text-base">
              Bazıları sadece iş teslim eder. Biz sonuç üretiriz. Düşünür,
              tasarlar, geliştirir ve sürdürürüz — siz işinizi büyütmeye
              odaklanın.
            </p>

            <div className="mt-8 border border-black/10 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-black/40">
                  Teknoloji_Yığını
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Aktif
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {AIS.map((a) => (
                  <div
                    key={a.name}
                    className="flex items-center gap-2 border border-black/10 p-2.5"
                  >
                    <Image
                      src={a.src}
                      alt={a.name}
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                    <div className="min-w-0">
                      <div className="truncate text-[10px] font-bold">
                        {a.name}
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-green-600">
                        <span className="h-1 w-1 animate-pulse rounded-full bg-green-500" />
                        Aktif
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* kayan sağ */}
          <div className="space-y-16 lg:col-span-7">
            {ITEMS.map((it) => (
              <div key={it.no} className="border-t border-black/10 pt-8">
                <div className="font-mono text-sm text-[#6400FF]">{it.no}</div>
                <h3 className="mt-3 text-2xl font-black tracking-tight lg:text-4xl">
                  {it.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/60 lg:text-base">
                  {it.body}
                </p>
                <div className="mt-5 inline-block bg-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  {it.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
