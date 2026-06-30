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
    slug: "finova",
    no: "01",
    title: "Finova",
    category: "Mobil · Fintech",
    year: "2025",
    desc: "Yeni nesil bir dijital cüzdan. Anlık transfer, kart yönetimi ve harcama analizi tek uygulamada.",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    gradient: "from-[#6400FF] to-[#a06bff]",
  },
  {
    slug: "meditrack",
    no: "02",
    title: "Meditrack",
    category: "Web · SaaS",
    year: "2025",
    desc: "Klinikler için hasta takip ve randevu paneli. Rol bazlı erişim, raporlama ve takvim entegrasyonu.",
    stack: ["Next.js", "tRPC", "Prisma"],
    gradient: "from-[#0ea5e9] to-[#6400FF]",
  },
  {
    slug: "lojix",
    no: "03",
    title: "Lojix",
    category: "Web · Yapay Zeka",
    year: "2024",
    desc: "Lojistik filo optimizasyonu. Rota tahmini ve teslimat süresi için makine öğrenmesi modelleri.",
    stack: ["Python", "FastAPI", "React"],
    gradient: "from-[#ec4899] to-[#6400FF]",
  },
  {
    slug: "karps",
    no: "04",
    title: "Karps",
    category: "Web · E-ticaret",
    year: "2024",
    desc: "Çok satıcılı e-ticaret platformu. Ödeme, kargo ve stok yönetimi tam entegre headless mimari.",
    stack: ["Next.js", "Stripe", "Medusa"],
    gradient: "from-[#22c55e] to-[#0ea5e9]",
  },
  {
    slug: "visionai",
    no: "05",
    title: "VisionAI",
    category: "Yapay Zeka · API",
    year: "2024",
    desc: "Üretim hattı için görüntü işleme API'si. Gerçek zamanlı kusur tespiti ve sınıflandırma.",
    stack: ["PyTorch", "ONNX", "gRPC"],
    gradient: "from-[#f59e0b] to-[#ec4899]",
  },
  {
    slug: "evento",
    no: "06",
    title: "Evento",
    category: "Mobil · Etkinlik",
    year: "2023",
    desc: "Etkinlik keşfi ve biletleme uygulaması. QR bilet, canlı harita ve sosyal davet akışı.",
    stack: ["Flutter", "Firebase", "Go"],
    gradient: "from-[#6400FF] to-[#22c55e]",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
