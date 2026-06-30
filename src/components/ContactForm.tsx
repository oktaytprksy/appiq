"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

// ponytail: no backend — submit builds a mailto: and opens the user's mail client.
// Wire to an API route when a real inbox/CRM exists.

const SERVICES = [
  "Web Uygulaması",
  "Mobil Uygulama",
  "Yapay Zeka Çözümü",
  "Ürün & Arayüz Tasarımı",
  "Bulut & DevOps",
  "Diğer",
];

const BUDGETS = [
  "100.000 ₺ altı",
  "100.000 – 250.000 ₺",
  "250.000 – 500.000 ₺",
  "500.000 ₺ üzeri",
  "Henüz belirsiz",
];

const inputCls =
  "w-full border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-black/35 focus:border-[#6400FF]";
const labelCls =
  "mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-black/50";

function Select({
  value,
  onChange,
  options,
  placeholder = "Seçiniz",
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between border bg-white px-4 py-3 text-left text-sm outline-none transition-colors ${
          open ? "border-[#6400FF]" : "border-black/15"
        } ${value ? "text-black" : "text-black/35"}`}
      >
        {value || placeholder}
        <span
          className={`ml-2 text-black/40 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>
      {open && (
        <ul className="absolute z-20 mt-1 max-h-60 w-full overflow-auto border border-black/15 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          {options.map((o) => (
            <li key={o}>
              <button
                type="button"
                onClick={() => {
                  onChange(o);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-[#6400FF] hover:text-white ${
                  value === o ? "bg-black/5 font-semibold" : "text-black/80"
                }`}
              >
                {o}
                {value === o && <span>✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = (f.get("name") as string)?.trim();
    const email = (f.get("email") as string)?.trim();
    const company = (f.get("company") as string)?.trim();
    const message = (f.get("message") as string)?.trim();

    const subject = `Yeni proje talebi — ${name}${service ? ` (${service})` : ""}`;
    const body = [
      `Ad: ${name}`,
      `E-posta: ${email}`,
      company ? `Şirket: ${company}` : null,
      service ? `Hizmet: ${service}` : null,
      budget ? `Bütçe: ${budget}` : null,
      "",
      "Mesaj:",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Ad Soyad *
          </label>
          <input id="name" name="name" required className={inputCls} placeholder="Adınız" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            E-posta *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputCls}
            placeholder="ornek@firma.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelCls}>
          Şirket
        </label>
        <input id="company" name="company" className={inputCls} placeholder="Firma adı (opsiyonel)" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <span className={labelCls}>Hizmet</span>
          <Select value={service} onChange={setService} options={SERVICES} />
        </div>
        <div>
          <span className={labelCls}>Bütçe</span>
          <Select value={budget} onChange={setBudget} options={BUDGETS} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Proje Detayı *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputCls} resize-none`}
          placeholder="Projenizden kısaca bahsedin — ne yapmak istiyorsunuz, hedef kitle, zaman planı..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#6400FF] py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-transform hover:scale-[1.01]"
      >
        Talebi Gönder
      </button>

      {sent && (
        <p className="text-center text-sm text-black/60">
          E-posta uygulamanız açıldı. Açılmadıysa{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-[#6400FF]">
            {CONTACT_EMAIL}
          </a>{" "}
          adresine yazabilirsiniz.
        </p>
      )}
    </form>
  );
}
