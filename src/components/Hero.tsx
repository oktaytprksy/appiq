import GridFisheye from "./GridFisheye";

const MANIFESTO = [
  ["01", "İyi yazılım işinizi yavaşlatmamalı."],
  [
    "02",
    "Hızlı çalışmalı — ölçeklenen, bakımı kolay ve sizinle birlikte büyüyen sistemler.",
  ],
  ["03", "İşte biz bunu inşa ediyoruz."],
];

const TAGS = [
  ["01", "Karmaşa Yok"],
  ["02", "Sürpriz Maliyet Yok"],
  ["03", "Sadece Sonuç"],
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white pt-24 pb-12 text-black lg:pt-32 lg:pb-20">
      <GridFisheye />
      <div className="relative z-10 w-full px-6 lg:px-20">
        <span className="sr-only">Özel Yazılım Geliştirme Ajansı</span>

        <h1 className="font-black uppercase leading-[0.85] tracking-[-0.04em] text-[clamp(3.5rem,12vw,8.1rem)]">
          <span className="block">DİJİTAL</span>
          <span className="block">ÜRÜNLER</span>
          <span className="block text-[#6400FF]">İNŞA EDERİZ</span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_minmax(0,460px)] lg:items-end">
          <p className="max-w-md text-lg font-medium leading-snug text-black/80">
            Başkaları size sadece kod verir.
            <br />
            <span className="text-black">
              Biz fikirden lansmana kadar tasarlar, geliştirir
            </span>{" "}
            ve büyütürüz.
          </p>

          {/* manifesto kod kartı */}
          <div className="border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                Manifesto
              </span>
              <span className="font-mono text-[10px] text-black/40">
                /kok/manifesto.md
              </span>
            </div>
            <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
              {MANIFESTO.map(([n, t]) => (
                <p key={n} className="flex gap-3">
                  <span className="text-[#6400FF]">{n}</span>
                  <span className="text-black/70">{t}</span>
                </p>
              ))}
            </div>
            <div className="grid grid-cols-3 border-t border-black/10">
              {TAGS.map(([n, t], i) => (
                <div
                  key={n}
                  className={`p-4 ${i < 2 ? "border-r border-black/10" : ""}`}
                >
                  <div className="font-mono text-[10px] text-black/30">{n}</div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wide leading-tight">
                    {t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
