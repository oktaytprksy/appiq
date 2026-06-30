import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | AppIQ Development",
  description:
    "AppIQ Development olarak kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında bilgi.",
};

const LAST_UPDATED = "30 Haziran 2026";

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "Topladığımız Veriler",
    body: [
      "Bu bölüm, ziyaretçilerimizden ve müşterilerimizden hangi tür kişisel verileri topladığımızı açıklar. İletişim formu üzerinden paylaştığınız ad, e-posta ve mesaj içeriği bunlara dahildir.",
      "Bu bir yer tutucu metindir. Nihai gizlilik politikası metniniz hazır olduğunda bu içeriği değiştireceğiz.",
    ],
  },
  {
    title: "Verileri Nasıl Kullanıyoruz",
    body: [
      "Topladığımız verileri yalnızca size hizmet sunmak, taleplerinizi yanıtlamak ve hizmet kalitemizi iyileştirmek için kullanırız. Verileriniz izniniz olmadan üçüncü taraflarla paylaşılmaz.",
    ],
  },
  {
    title: "Çerezler",
    body: [
      "Web sitemiz, deneyiminizi iyileştirmek ve trafiği analiz etmek için çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya devre dışı bırakabilirsiniz.",
    ],
  },
  {
    title: "Üçüncü Taraf Hizmetleri",
    body: [
      "Analitik, barındırma ve e-posta gibi alanlarda üçüncü taraf sağlayıcılarla çalışabiliriz. Bu sağlayıcılar yalnızca hizmeti sunmak için gereken verilere erişir.",
    ],
  },
  {
    title: "Veri Güvenliği",
    body: [
      "Kişisel verilerinizi yetkisiz erişime, değiştirilmeye ve ifşaya karşı korumak için endüstri standardı güvenlik önlemleri uygularız.",
    ],
  },
  {
    title: "Haklarınız",
    body: [
      "Kişisel verilerinize erişme, düzeltilmesini veya silinmesini talep etme hakkına sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.",
    ],
  },
  {
    title: "İletişim",
    body: [
      "Gizlilik politikamızla ilgili sorularınız için bizimle iletişim sayfamız üzerinden veya doğrudan e-posta yoluyla iletişime geçebilirsiniz.",
    ],
  },
];

export default function GizlilikPage() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-black selection:bg-[#6400FF] selection:text-white">
      <SiteNav />
      <main>
        <PageHero
          kicker="Yasal"
          title="Gizlilik Politikası"
          titleClass="text-[clamp(2.5rem,7vw,5rem)]"
          subtitle={`Son güncelleme: ${LAST_UPDATED}`}
        />

        <section className="bg-white py-20 text-black lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <p className="text-base leading-relaxed text-black/60 lg:text-lg">
              {SITE_NAME} olarak gizliliğinize önem veriyoruz. Bu politika,
              kişisel verilerinizi nasıl topladığımızı, kullandığımızı ve
              koruduğumuzu açıklar.
            </p>

            <div className="mt-14 space-y-12">
              {SECTIONS.map((s, i) => (
                <div
                  key={s.title}
                  className="border-t border-black/10 pt-8"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-[#6400FF]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-black tracking-tight lg:text-3xl">
                      {s.title}
                    </h2>
                  </div>
                  <div className="mt-4 space-y-4 pl-0 sm:pl-10">
                    {s.body.map((p, j) => (
                      <p
                        key={j}
                        className="text-sm leading-relaxed text-black/60 lg:text-base"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
