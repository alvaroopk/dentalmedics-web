import Hero from "@/components/sections/Hero";
import Counters from "@/components/sections/Counters";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import Cases from "@/components/sections/Cases";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Financing from "@/components/sections/Financing";
import Clinics from "@/components/sections/Clinics";
import Urgencies from "@/components/sections/Urgencies";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Counters />
      <Services />
      <WhyUs />
      <Team />
      <Cases />
      <Testimonials />
      <Pricing />
      <Financing />
      <Clinics />
      <Urgencies />
      <FAQ />
      <Contact />
    </>
  );
}
