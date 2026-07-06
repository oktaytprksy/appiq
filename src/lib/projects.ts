export type Project = {
  slug: string;
  no: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  stack: string[];
  gradient: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "crm-sistemi",
    no: "01",
    title: "CRM Sistemi",
    category: "Web · CRM",
    year: "2025",
    desc: "Uçtan uca müşteri ilişkileri yönetimi. Kişi ve fırsat takibi, satış hunisi, otomatik hatırlatmalar ve e-posta entegrasyonu tek panelde.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    gradient: "from-[#6400FF] to-[#a06bff]",
  },
  {
    slug: "is-surecleri",
    no: "02",
    title: "İş Süreçleri Platformu",
    category: "Web · İş Süreçleri",
    year: "2025",
    desc: "Onay akışları ve görev yönetimi platformu. Departmanlar arası süreçleri modelleyin, rol bazlı onaylar ve gerçek zamanlı durum takibi kurun.",
    stack: ["Next.js", "tRPC", "PostgreSQL"],
    gradient: "from-[#0ea5e9] to-[#6400FF]",
  },
  {
    slug: "otomasyon",
    no: "03",
    title: "Otomasyon Motoru",
    category: "Web · Otomasyon",
    year: "2024",
    desc: "Sistemler arası entegrasyon ve otomasyon motoru. Tetikleyici-aksiyon kuralları ile tekrar eden işleri ortadan kaldırın, API'leri kod yazmadan bağlayın.",
    stack: ["Node.js", "n8n", "Redis"],
    gradient: "from-[#ec4899] to-[#6400FF]",
  },
  {
    slug: "stok-yonetimi",
    no: "04",
    title: "Stok & ERP Yönetimi",
    category: "Web · ERP",
    year: "2024",
    desc: "Stok, sipariş ve tedarik yönetimi. Barkod ile giriş-çıkış, kritik stok uyarıları ve muhasebe entegrasyonu ile depo süreçlerini tek yerde toplar.",
    stack: ["Next.js", "PostgreSQL", "Docker"],
    gradient: "from-[#22c55e] to-[#0ea5e9]",
  },
  {
    slug: "is-zekasi",
    no: "05",
    title: "İş Zekası Panosu",
    category: "Web · İş Zekası",
    year: "2024",
    desc: "İş süreçlerinden veri toplayan panolar. Farklı kaynakları birleştirir, otomatik raporlar üretir ve karar destek metriklerini gerçek zamanlı sunar.",
    stack: ["Python", "FastAPI", "React"],
    gradient: "from-[#f59e0b] to-[#ec4899]",
  },
  {
    slug: "saha-yonetimi",
    no: "06",
    title: "Saha Yönetim Uygulaması",
    category: "Mobil · Saha Yönetimi",
    year: "2023",
    desc: "Saha ekipleri için iş emri ve rota uygulaması. Görev atama, çevrimdışı form doldurma ve konum bazlı iş takibi ile operasyonu dijitalleştirir.",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    gradient: "from-[#6400FF] to-[#22c55e]",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
