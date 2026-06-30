import Image from "next/image";
import Link from "next/link";

type LinkItem = { label: string; href: string; external?: boolean };

const COLUMNS: { title: string; items: LinkItem[] }[] = [
  {
    title: "Hizmetler",
    items: [
      { label: "Web", href: "/hizmetler" },
      { label: "Mobil", href: "/hizmetler" },
      { label: "Yapay Zeka", href: "/hizmetler" },
      { label: "Tasarım", href: "/hizmetler" },
    ],
  },
  {
    title: "Sosyal",
    items: [
      { label: "Instagram", href: "#", external: true },
      { label: "LinkedIn", href: "#", external: true },
    ],
  },
  {
    title: "Yasal",
    items: [
      { label: "Gizlilik", href: "/gizlilik" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
];

const linkCls =
  "text-sm text-white/60 transition-colors hover:text-white";

function FooterLink({ item }: { item: LinkItem }) {
  if (item.external || item.href === "#") {
    return (
      <a
        href={item.href}
        className={linkCls}
        {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={linkCls}>
      {item.label}
    </Link>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-black px-6 pt-14 pb-10 text-white lg:px-12 lg:pt-20">
      <div className="mx-auto max-w-6xl">
        {/* CTA */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="AppIQ Development"
              width={72}
              height={72}
              className="h-16 w-16 rounded-full object-cover lg:h-[72px] lg:w-[72px]"
            />
            <span className="text-3xl font-black tracking-tight lg:text-4xl">
              App<span className="text-[#6400FF]">IQ</span>
            </span>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
              Projeniz mi var?
            </span>
            <Link
              href="/iletisim"
              className="bg-[#6400FF] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-transform hover:scale-[1.03]"
            >
              Hadi Konuşalım
            </Link>
          </div>
        </div>

        {/* link sütunları */}
        <div className="grid grid-cols-2 gap-10 py-10 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-white/40 sm:flex-row">
          <span>
            © {new Date().getFullYear()} AppIQ Development. Tüm hakları saklıdır.
          </span>
          <span className="uppercase tracking-[0.2em]">Sevgiyle kodlandı</span>
        </div>
      </div>
    </footer>
  );
}
