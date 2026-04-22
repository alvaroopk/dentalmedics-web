import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Train } from "lucide-react";
import { MADRID, BUSINESS } from "@/lib/constants";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Clínica Dental Madrid Chamberí — Dental Medics Dr. Ferrer",
  description:
    "Clínica dental en Madrid, Chamberí. C/ Ramiro II, 10. Horario L-V 10:00-20:00. Metro Cuatro Caminos y Ríos Rosas. Primera consulta gratuita.",
};

export default function MadridPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/15">
                Clínica Madrid · Chamberí
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
                Dental Medics Madrid
              </h1>
              <p className="mt-4 text-lg text-slate-200 leading-relaxed">
                Nuestra clínica principal en el corazón de Chamberí, fundada en
                1984. Más de 40 años atendiendo a familias del barrio.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Dirección</p>
                    <p className="text-slate-200 text-sm">{MADRID.address}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Teléfono</p>
                    <a href={`tel:${MADRID.phoneTel}`} className="text-slate-200 text-sm hover:text-white">
                      {MADRID.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Mail className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href={`mailto:${MADRID.email}`} className="text-slate-200 text-sm hover:text-white">
                      {MADRID.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Clock className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Horario</p>
                    <p className="text-slate-200 text-sm">{MADRID.schedule}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Train className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Transporte</p>
                    <p className="text-slate-200 text-sm">{MADRID.transport}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-accent transition-colors"
                >
                  Pedir cita en Madrid
                </Link>
                <a
                  href={MADRID.mapsLink}
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
                src="/assets/clinica-madrid.jpg"
                alt="Clínica Dental Medics Madrid Chamberí"
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
              src={MADRID.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa clínica Dental Medics Madrid"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-bg-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/assets/fachada-clinica-madrid.jpg"
                alt="Fachada Clínica Dental Medics Madrid"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/assets/gabinete-cirugia.jpg"
                alt="Gabinete de cirugía Dental Medics Madrid"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
