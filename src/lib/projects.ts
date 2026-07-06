export type Project = {
  slug: string;
  no: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  stack: string[];
  gradient: string;
  overview: string;
  challenge: string;
  solution: string;
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
    overview:
      "Satış ve müşteri ilişkileri süreçlerini tek bir merkezde toplayan bir CRM sistemi. Kişi ve firma kartlarından fırsat yönetimine, satış hunisinden aktivite geçmişine kadar tüm müşteri yolculuğu tek panelden yönetilir. Ekipler günün her anında hangi müşteride ne olduğunu, bir sonraki adımın ne olması gerektiğini net görür.",
    challenge:
      "Çoğu ekipte müşteri verisi Excel tablolarına, e-posta kutularına ve farklı kişilerin notlarına dağılmış durumda. Bir satış temsilcisi işten ayrıldığında geçmiş kayboluyor, yöneticiler gerçek satış hunisini göremiyor, takip gerektiren fırsatlar unutuluyor. Amaç bu dağınıklığı ortadan kaldırıp tek ve güvenilir bir kaynak oluşturmaktı.",
    solution:
      "Kişi, firma ve fırsatları ilişkilendiren esnek bir veri modeli kurduk. Sürükle-bırak satış hunisi, otomatik takip hatırlatmaları, e-posta entegrasyonu ve rol bazlı erişim ekledik. Yöneticiler için canlı satış tahmini ve performans panoları hazırladık. Sonuçta hiçbir fırsatın gözden kaçmadığı, tüm ekibin aynı veriyle çalıştığı bir sistem ortaya çıktı.",
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
    overview:
      "Departmanlar arası onay ve görev akışlarını dijitalleştiren bir iş süreçleri platformu. İzin talebinden satın alma onayına, teklif sürecinden işe alım adımlarına kadar tekrar eden her süreç görsel bir akış olarak modellenir. Her adımda kimin ne yapması gerektiği, sürecin nerede beklediği ve ne zaman tamamlandığı şeffaf biçimde takip edilir.",
    challenge:
      "Onaylar hâlâ e-posta ve mesaj gruplarında dönüyordu; bir talebin hangi aşamada olduğu, kimde beklediği belirsizdi. Süreçler kişilere bağımlıydı, biri izinliyken işler tıkanıyordu. Şirketin süreçlerini kod yazmadan tanımlayabileceği, esnek ama denetlenebilir bir yapıya ihtiyaç vardı.",
    solution:
      "Sürükle-bırak bir akış tasarımcısı kurduk: koşullu dallanmalar, paralel onaylar ve otomatik atamalar destekleniyor. Her sürecin tam denetim kaydını, SLA uyarılarını ve gerçek zamanlı durum panosunu ekledik. Yöneticiler darboğazları anında görüyor, çalışanlar görevlerini tek yerden yönetiyor. Manuel takip ortadan kalktı, süreçler öngörülebilir hâle geldi.",
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
    overview:
      "Farklı sistemleri birbirine bağlayan ve tekrar eden işleri arka planda çalıştıran bir otomasyon motoru. Bir formun doldurulması, bir ödemenin gelmesi ya da belirli bir saatin gelmesi gibi tetikleyicilere bağlı olarak; e-posta gönderme, kayıt oluşturma, veri aktarma gibi aksiyonlar kod yazmadan zincirlenir. Ekipler manuel kopyala-yapıştır işlerinden kurtulur.",
    challenge:
      "Şirketler onlarca farklı araç kullanıyor ama bu araçlar birbiriyle konuşmuyor. Veriyi bir sistemden alıp diğerine elle taşımak hem zaman kaybı hem de hata kaynağı. Her entegrasyon için ayrı yazılım geliştirmek pahalı ve yavaş; ihtiyaç, teknik olmayan ekiplerin bile kurabileceği esnek bir otomasyon katmanıydı.",
    solution:
      "Tetikleyici-aksiyon mantığıyla çalışan görsel bir otomasyon editörü kurduk. Yüzlerce hazır entegrasyon, koşullu adımlar, yeniden deneme ve hata yönetimi ile güvenilir akışlar oluşturuluyor. Ağır işleri kuyruk mimarisiyle arka planda ölçekledik. Sonuçta günlerce süren manuel işler saniyelere indi, insan hatası ciddi biçimde azaldı.",
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
    overview:
      "Stok, sipariş ve tedarik süreçlerini tek çatı altında toplayan bir ERP çözümü. Barkod ile ürün giriş-çıkışı, çoklu depo yönetimi, kritik stok uyarıları ve tedarikçi sipariş takibi bir arada çalışır. Muhasebe ve satış modülleriyle entegre olduğu için stok hareketi ile finansal kayıt aynı anda oluşur.",
    challenge:
      "İşletme büyüdükçe ürünler farklı depolara dağılıyor, hangi üründen ne kadar kaldığı gerçek zamanlı bilinmiyordu. Elle tutulan stok fişleri gerçekle uyuşmuyor, kritik ürünler habersizce tükeniyor, sayım günlerce sürüyordu. İhtiyaç, deponun anlık ve doğru bir dijital ikizini kurmaktı.",
    solution:
      "Barkod okuyucularla entegre, her hareketi anında işleyen bir stok çekirdeği geliştirdik. Minimum stok seviyesine göre otomatik sipariş önerileri, parti/seri takibi ve depo transferleri ekledik. Muhasebe entegrasyonuyla stok değerlemesi otomatikleşti. Sayım süresi günlerden saatlere düştü, stok doğruluğu ölçülebilir biçimde arttı.",
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
    overview:
      "Dağınık iş verisini tek bir görünümde birleştiren bir iş zekası panosu. CRM, muhasebe, e-ticaret ve operasyon sistemlerinden gelen veriler otomatik toplanır, temizlenir ve anlamlı metriklere dönüştürülür. Yöneticiler ciro, kârlılık, dönüşüm ve operasyon performansını gerçek zamanlı, tek ekranda izler.",
    challenge:
      "Karar vericiler rapor almak için her hafta farklı departmanlardan Excel dosyaları topluyordu. Veriler elle birleştirildiği için raporlar hem geç hem de tutarsız çıkıyordu. Şirketin gerçek durumunu anlık gösteren, herkesin aynı sayıya baktığı güvenilir bir tek doğruluk kaynağına ihtiyaç vardı.",
    solution:
      "Farklı kaynakları düzenli çeken bir veri hattı kurduk; gelen veriyi standartlaştırıp merkezi bir ambara yazdık. Üzerine rol bazlı, etkileşimli panolar ve otomatik zamanlı raporlar ekledik. Anormallik uyarılarıyla kötü giden metrikler kendini gösteriyor. Raporlama saatler süren manuel işten anlık bir görünüme dönüştü.",
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
    overview:
      "Sahada çalışan ekipler için iş emri, rota ve raporlama uygulaması. Teknisyen, kurye veya servis ekibine görevler atanır; ekip mobil cihazından işi görür, konumunu paylaşır, fotoğraf ve form ile işi belgeler. Ofis ise tüm sahayı harita üzerinde canlı takip eder.",
    challenge:
      "Saha ekipleriyle ofis arasındaki iletişim telefon ve kâğıt formlarla yürüyordu. İşin yapılıp yapılmadığı ancak gün sonunda öğreniliyor, kanıt toplanamıyor, rotalar verimsiz planlanıyordu. Üstelik saha çoğu zaman internetin zayıf olduğu yerlerdeydi; uygulamanın çevrimdışı da çalışması şarttı.",
    solution:
      "Çevrimdışı öncelikli bir mobil uygulama geliştirdik: veri yerelde tutulup bağlantı gelince otomatik senkronize oluyor. Görev atama, konum bazlı takip, fotoğraflı iş kanıtı ve dijital formlar ekledik. Ofis paneline canlı harita ve performans raporları koyduk. Kâğıt formlar kalktı, işlerin doğrulanması anlık hâle geldi, rota planlama verimliliği arttı.",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
