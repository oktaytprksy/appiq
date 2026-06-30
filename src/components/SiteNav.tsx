"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS: [string, string][] = [
  ["ANASAYFA", "/"],
  ["HİZMETLER", "/hizmetler"],
  ["HAKKIMIZDA", "/hakkimizda"],
  ["İLETİŞİM", "/iletisim"],
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-black"
      }`}
    >
      <div className="mx-auto flex h-[66px] max-w-[1600px] items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="group relative z-50 flex items-center gap-2.5 text-white"
        >
          <Image
            src="/logo.jpg"
            alt="AppIQ Development"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
            priority
          />
          <span className="text-base font-black tracking-tight">
            App<span className="text-[#6400FF]">IQ</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map(([l, href]) => (
            <Link
              key={l}
              href={href}
              className="relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
            >
              {l}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/iletisim"
            className="group relative overflow-hidden bg-[#6400FF] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-transform hover:scale-[1.03]"
          >
            TEKLİF AL
          </Link>
        </div>

        {/* mobil */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/iletisim"
            className="bg-[#6400FF] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white"
          >
            Teklif Al
          </Link>
          <button
            aria-label="Menü"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </nav>

      {/* mobil menü — nav dışında: backdrop-blur containing-block sorununu önler */}
      <div
        className={`fixed inset-0 z-[998] flex flex-col bg-black transition-opacity duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col justify-center gap-2 px-8">
          {LINKS.map(([l, href], i) => (
            <Link
              key={l}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-5 text-3xl font-black uppercase tracking-tight text-white transition-colors hover:text-[#6400FF]"
            >
              <span className="mr-4 font-mono text-sm text-[#6400FF]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l}
            </Link>
          ))}
          <Link
            href="/iletisim"
            onClick={() => setOpen(false)}
            className="mt-8 bg-[#6400FF] px-6 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </>
  );
}
