import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Estética Dental en Madrid y Murcia — Carillas y Blanqueamiento",
  description:
    "Carillas de composite desde €120, porcelana desde €350. Blanqueamiento LED €250. Diseño de sonrisa digital. Dra. Amanda Sánchez y Dra. María Munuera.",
};

const TREATMENTS = [
  {
    title: "Carillas de composite",
    price: "€120 / diente",
    desc: "Laminados de composite de alta estética colocados en una sola sesión. Mínimamente invasivas y reversibles.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
  },
  {
    title: "Carillas de porcelana",
    price: "€350 / diente",
    desc: "Porcelana de alta resistencia y estética excepcional. Resultado natural y duradero.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb9b3c507?w=600&q=80",
  },
  {
    title: "Blanqueamiento LED",
    price: "€250",
    desc: "Blanqueamiento profesional en clínica con lámpara LED. Resultados visibles desde la primera sesión.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
  },
  {
    title: "Diseño de sonrisa digital",
    price: "€250",
    desc: "Planificación digital de tu nueva sonrisa antes de cualquier intervención. Ves el resultado antes de empezar.",
    image: "https://images.unsplash.com/photo-1598256989014-e9c1aaf6a0e8?w=600&q=80",
  },
];

export default function EsteticaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/15">
              Estética dental
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
              Diseña la sonrisa que siempre has querido
            </h1>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              Carillas, blanqueamiento, diseño digital de sonrisa. Tratamientos
              mínimamente invasivos para transformar tu sonrisa con la máxima
              naturalidad.
            </p>
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
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-primary text-center mb-12">
            Tratamientos de estética dental
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {TREATMENTS.map((t) => (
              <div key={t.title} className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <div className="relative h-52">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-brand-primary">{t.title}</h3>
                    <span className="shrink-0 text-brand-secondary font-bold">{t.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
