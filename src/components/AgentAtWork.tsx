import type { ReactNode } from "react";

function Status({ label, tone }: { label: string; tone: string }) {
  return (
    <span
      className={`shrink-0 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${tone}`}
    >
      {label}
    </span>
  );
}

function Row({
  k,
  v,
  status,
  tone,
}: {
  k: string;
  v: string;
  status: string;
  tone: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 py-2.5 last:border-b-0">
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-white/40">
          {k}
        </div>
        <div className="truncate text-[12px] text-white/80">{v}</div>
      </div>
      <Status label={status} tone={tone} />
    </div>
  );
}

const OK = "bg-[#6400FF]/20 text-[#a06bff]";
const PENDING = "bg-white/10 text-white/50";

type Feature = {
  no: string;
  kicker: string;
  verb: string;
  body: string;
  mock: ReactNode;
};

const FEATURES: Feature[] = [
  {
    no: "/01",
    kicker: "WEB UYGULAMALARI",
    verb: "WEB",
    body: "Next.js, React ve modern altyapılarla hızlı, ölçeklenebilir web uygulamaları geliştiriyoruz. Tasarımdan canlıya kadar uçtan uca tek ekip.",
    mock: (
      <>
        <Row k="Proje" v="Kurumsal panel — v2" status="Yayında" tone={OK} />
        <Row k="Proje" v="E-ticaret platformu" status="Geliştiriliyor" tone={PENDING} />
        <Row k="Proje" v="Rezervasyon sistemi" status="Test" tone={PENDING} />
        <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-white/40">
          <span>%99.9 uptime</span>
          <span className="text-[#a06bff]">Core Web Vitals: Yeşil</span>
        </div>
      </>
    ),
  },
  {
    no: "/02",
    kicker: "MOBİL UYGULAMALAR",
    verb: "MOBİL",
    body: "iOS ve Android için native performansında uygulamalar. Tek kod tabanı, iki platform, mağazaya hazır teslim. Push, ödeme, çevrimdışı — hepsi dahil.",
    mock: (
      <>
        <Row k="iOS" v="App Store sürümü 3.1" status="Onayda" tone={PENDING} />
        <Row k="Android" v="Play Store sürümü 3.1" status="Yayında" tone={OK} />
        <Row k="Sürüm" v="Çevrimdışı senkron" status="Tamamlandı" tone={OK} />
        <div className="mt-3 text-[10px] uppercase tracking-wider text-[#a06bff]">
          → 4.8 ★ kullanıcı puanı
        </div>
      </>
    ),
  },
  {
    no: "/03",
    kicker: "YAPAY ZEKA ÇÖZÜMLERİ",
    verb: "YAPAY ZEKA",
    body: "LLM entegrasyonları, görüntü işleme, öneri sistemleri ve otonom ajanlar. İş süreçlerinize gerçekten değer katan, üretime hazır AI çözümleri kuruyoruz.",
    mock: (
      <>
        <div className="mb-3 inline-block bg-[#6400FF]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#a06bff]">
          Model: Aktif
        </div>
        <Row k="✓" v="Belge analiz ajanı" status="Üretimde" tone={OK} />
        <Row k="✓" v="Görüntü sınıflandırma" status="Üretimde" tone={OK} />
        <Row k="⟳" v="Öneri motoru" status="Eğitiliyor" tone={PENDING} />
      </>
    ),
  },
  {
    no: "/04",
    kicker: "SİBER GÜVENLİK & OTOMASYON",
    verb: "GÜVENLİK",
    body: "Sızma testleri, güvenlik denetimi ve tehdit izleme ile sistemlerinizi koruyoruz. İş akışlarınızı uçtan uca otomatikleştirip tekrar eden işleri ortadan kaldırıyoruz.",
    mock: (
      <>
        <Row k="Denetim" v="Sızma testi & zafiyet taraması" status="Tamamlandı" tone={OK} />
        <Row k="İzleme" v="7/24 tehdit tespiti" status="Aktif" tone={OK} />
        <Row k="Otomasyon" v="Süreç & entegrasyon akışları" status="Çalışıyor" tone={OK} />
        <div className="mt-3 text-[10px] uppercase tracking-wider text-[#a06bff]">
          Manuel işlerde −%60 azalma
        </div>
      </>
    ),
  },
  {
    no: "/05",
    kicker: "BULUT & DEVOPS",
    verb: "ALTYAPI",
    body: "AWS, GCP ve Kubernetes üzerinde otomatik dağıtım, izleme ve ölçeklendirme. Sisteminiz gece yarısı bile sorunsuz çalışsın diye altyapıyı biz kuruyoruz.",
    mock: (
      <div className="grid grid-cols-2 gap-2">
        {["CI/CD pipeline", "Otomatik ölçekleme", "7/24 izleme", "Yedekleme"].map(
          (t) => (
            <div
              key={t}
              className="border border-white/10 bg-white/[0.03] p-3 text-[11px] font-medium text-white/70"
            >
              {t}
            </div>
          ),
        )}
      </div>
    ),
  },
  {
    no: "/06",
    kicker: "BAKIM & SÜREKLİ GELİŞTİRME",
    verb: "DESTEK",
    body: "Teslim bitiş değil, başlangıçtır. Düzenli sürümler, hata takibi ve doğrudan iletişim. Bir mesaj kadar yakınız — ürününüz sizinle büyümeye devam eder.",
    mock: (
      <div className="space-y-3">
        <div className="ml-auto max-w-[80%] bg-[#6400FF] px-3 py-2 text-[12px] text-white">
          Ödeme ekranında bir hata var, bakabilir misiniz?
        </div>
        <div className="max-w-[85%] border border-white/10 bg-white/[0.03] px-3 py-2 text-[12px] text-white/80">
          <span className="mb-1 block text-[9px] font-bold uppercase tracking-wider text-[#a06bff]">
            Ekip
          </span>
          Tespit ettik — kur dönüşümünde bir kenar durumdu. Düzeltme yayında, 12
          dk içinde canlıda olacak.
        </div>
        <div className="ml-auto max-w-[80%] bg-[#6400FF] px-3 py-2 text-[12px] text-white">
          Harika, teşekkürler!
        </div>
      </div>
    ),
  },
];

export default function AgentAtWork() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white lg:py-32">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <header className="mb-24 text-center lg:mb-40">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a06bff]">
            Neler Yapıyoruz
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            Tek Ekip.
            <br />
            <span className="text-white/40">Tüm Çözümler.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-white/60 lg:text-base">
            Web, mobil, yapay zeka, tasarım ve altyapı. Onlarca tedarikçiyle
            uğraşmayın — fikirden canlı ürüne kadar her şeyi tek bir ekip üstlenir.
          </p>
        </header>

        <div className="space-y-20 lg:space-y-40">
          {FEATURES.map((f, i) => (
            <div
              key={f.no}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="font-mono text-sm text-[#6400FF]">{f.no}</div>
                <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white/50">
                  {f.kicker}
                </div>
                <h3 className="mt-2 text-4xl font-black uppercase tracking-tight lg:text-6xl">
                  {f.verb}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 lg:text-base">
                  {f.body}
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm lg:p-6">
                {f.mock}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-3 lg:mt-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#6400FF]" />
            7/24 · Her Zaman Yanınızda
          </span>
          <p className="text-2xl font-black uppercase tracking-tight text-white/80 lg:text-3xl">
            Siz uyurken bile çalışır.
          </p>
        </div>
      </div>
    </section>
  );
}
