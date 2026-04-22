import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import Contact from "@/components/sections/Contact";
import { MADRID, MURCIA, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Implantes Dentales en Madrid y Murcia — Desde €380",
  description:
    "Implantes dentales con marcas premium (Nobel Biocare, Straumann, JDentalCare) desde €380. Financiación sin intereses. Dr. Ferrer, más de 40 años de experiencia.",
};

const FEATURES = [
  "Implantes JDentalCare desde €380 · Nobel/Straumann desde €530",
  "TAC 3D y planificación digital antes de cualquier cirugía",
  "Carga inmediata disponible: dientes fijos en 24 h (All-on-4 / All-on-6)",
  "Implantes zigomáticos y pterigoideos para casos con pérdida ósea severa",
  "Garantía de reimplante en caso de rechazo durante los primeros años",
  "Financiación hasta 24 meses sin intereses (TIN 0%)",
];

export default function ImplantesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/15">
                Implantología avanzada
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
                Implantes dentales en Madrid y Murcia
              </h1>
              <p className="mt-6 text-lg text-slate-200 leading-relaxed">
                Recupera tu sonrisa completa con implantes de las marcas más
                confiables del mercado. Desde €380 con financiación sin
                intereses.
              </p>
              <ul className="mt-8 space-y-3">
                {FEATURES.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-slate-200">
                    <Check className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
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
                src="/assets/clinica-implantes-madrid.jpg"
                alt="Implantes dentales en Dental Medics Madrid"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-bg-alt">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-primary text-center mb-10">
            ¿Por qué elegir Dental Medics para tus implantes?
          </h2>
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {[
              { title: "+40 años", desc: "de experiencia en implantología" },
              { title: "TAC 3D", desc: "planificación digital de precisión" },
              { title: "0% TIN", desc: "hasta 24 meses sin intereses" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-4xl font-bold text-brand-secondary">{item.title}</p>
                <p className="mt-2 text-brand-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
