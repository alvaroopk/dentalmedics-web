import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Contact from "@/components/sections/Contact";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ortodoncia en Madrid y Murcia — Brackets e Invisalign",
  description:
    "Ortodoncia metálica desde €1.950 e Invisalign desde €2.900. Dra. Paloma Ferrer, especialista certificada. Madrid (Chamberí) y Murcia.",
};

const TYPES = [
  {
    title: "Ortodoncia metálica",
    price: "Desde €1.950",
    desc: "La opción más económica y efectiva para casos complejos. Brackets de acero de alta precisión.",
  },
  {
    title: "Ortodoncia estética (zafiro)",
    price: "Desde €2.450",
    desc: "Brackets de cerámica o zafiro, prácticamente invisibles, combinando eficacia y discreción.",
  },
  {
    title: "Ortodoncia autoligable",
    price: "Desde €2.650",
    desc: "Sistema sin gomas de ligado que reduce la fricción y puede acortar el tiempo de tratamiento.",
  },
  {
    title: "Invisalign Lite",
    price: "Desde €2.900",
    desc: "Alineadores transparentes para correcciones leves o moderadas. Sin brackets, extraíbles.",
  },
  {
    title: "Invisalign Full",
    price: "Desde €4.200",
    desc: "El sistema de alineadores más completo. Ideal para adultos que buscan discreción total.",
  },
  {
    title: "Ortodoncia infantil",
    price: "Desde €1.450",
    desc: "Tratamiento temprano para guiar el desarrollo correcto de la dentición permanente.",
  },
];

export default function OrtodonciaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/15">
                Ortodoncia para niños y adultos
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
                Ortodoncia en Madrid y Murcia
              </h1>
              <p className="mt-6 text-lg text-slate-200 leading-relaxed">
                Dra. Paloma Ferrer, especialista certificada en Invisalign y
                ortodoncia integral. Brackets metálicos, estéticos o
                alineadores invisibles. Primera consulta gratuita.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Especialista certificada en Invisalign",
                  "Ortodoncia para niños y adultos",
                  "Financiación hasta 24 meses sin intereses",
                  "Retenedor incluido al finalizar el tratamiento",
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-slate-200">
                    <Check className="h-5 w-5 text-brand-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-accent transition-colors"
                >
                  Primera consulta gratuita
                </Link>
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1fb858] transition-colors"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/gabinete-ortodoncia.jpg"
                alt="Gabinete de ortodoncia en Dental Medics"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-bg-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-primary text-center mb-12">
            Nuestros tratamientos de ortodoncia
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TYPES.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-semibold text-brand-primary">{t.title}</h3>
                <p className="mt-1 text-xl font-bold text-brand-secondary">{t.price}</p>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-muted">
            * Precios orientativos. El presupuesto definitivo se entrega tras el diagnóstico inicial gratuito.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
