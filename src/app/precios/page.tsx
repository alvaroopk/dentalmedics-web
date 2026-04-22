import type { Metadata } from "next";
import Link from "next/link";
import { Gift } from "lucide-react";
import { PRICES_FULL, BUSINESS } from "@/lib/constants";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Precios Clínica Dental Madrid y Murcia — Transparencia total",
  description:
    "Precios reales de todos nuestros tratamientos: implantes desde €380, ortodoncia desde €1.950, carillas desde €120. Sin letra pequeña. Primera consulta gratuita.",
};

export default function PreciosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Precios transparentes, sin sorpresas
          </h1>
          <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
            En Dental Medics publicamos nuestros precios reales. Sin letra
            pequeña, sin cargos ocultos. El presupuesto definitivo se entrega
            tras la consulta gratuita.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-sm font-semibold">
            <Gift className="h-5 w-5 text-brand-accent" />
            Primera consulta + diagnóstico: completamente GRATIS
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {PRICES_FULL.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-2xl font-bold text-brand-primary mb-6 pb-3 border-b border-slate-100">
                {cat.category}
              </h2>
              <div className="space-y-1">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-3 border-b border-slate-50 hover:bg-brand-bg-alt rounded-lg px-2 transition-colors"
                  >
                    <span className="text-brand-text text-sm">{item.name}</span>
                    <span className="font-semibold text-brand-secondary shrink-0 ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-brand-primary rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold">Financiación sin intereses</h3>
            <p className="mt-3 text-slate-200">
              Hasta 24 meses con TIN 0% a través de Sabadell Consumer Finance.
              Respuesta rápida y sin burocracia.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-accent transition-colors"
              >
                Pedir presupuesto gratuito
              </Link>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
