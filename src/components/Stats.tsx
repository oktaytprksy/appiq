export default function Stats() {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#6400FF]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#6400FF]" />
            Rakamlarla Biz
          </span>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight lg:text-6xl">
            İşimiz Kendini Kanıtlar.
          </h2>
          <p className="mt-6 text-sm text-black/60 lg:text-base">
            Aşağıdaki her rakam gerçek işlerden geliyor. Vaat değil, teslim. Lafı
            değil, çalışan ürünü konuşuruz.
          </p>
        </div>
      </div>
    </section>
  );
}
