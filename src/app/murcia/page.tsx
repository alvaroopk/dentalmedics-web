import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { MURCIA } from "@/lib/constants";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Clínica Dental Murcia — Dental Medics Dr. Ferrer",
  description:
    "Clínica dental en Murcia. C/ Donantes de Sangre, 3. Horario L-V 10:00-20:00. Los mismos especialistas, la misma calidad. Primera consulta gratuita.",
};

export default function MurciaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/15">
                Clínica Murcia
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
                Dental Medics Murcia
              </h1>
              <p className="mt-4 text-lg text-slate-200 leading-relaxed">
                La misma excelencia clínica de Madrid, ahora también en Murcia.
                Los mismos especialistas, los mismos precios y la misma filosofía
                de trato familiar.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Dirección</p>
                    <p className="text-slate-200 text-sm">{MURCIA.address}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Teléfono</p>
                    <a href={`tel:${MURCIA.phoneTel}`} className="text-slate-200 text-sm hover:text-white">
                      {MURCIA.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Mail className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href={`mailto:${MURCIA.email}`} className="text-slate-200 text-sm hover:text-white">
                      {MURCIA.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Clock className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Horario</p>
                    <p className="text-slate-200 text-sm">{MURCIA.schedule}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-accent transition-colors"
                >
                  Pedir cita en Murcia
                </Link>
                <a
                  href={MURCIA.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Cómo llegar
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/clinica-murcia.jpg"
                alt="Clínica Dental Medics Murcia"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-6 text-center">Cómo llegar</h2>
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-md border border-slate-100">
            <iframe
              src={MURCIA.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa clínica Dental Medics Murcia"
            />
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
