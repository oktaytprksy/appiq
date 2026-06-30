import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import AgentAtWork from "@/components/AgentAtWork";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-black selection:bg-[#6400FF] selection:text-white">
      <SiteNav />
      <main>
        <Hero />
        <AgentAtWork />
        <WhyUs />
        <Stats />
      </main>
      <SiteFooter />
    </div>
  );
}
