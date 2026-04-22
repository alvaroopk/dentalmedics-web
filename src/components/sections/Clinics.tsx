"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation, Train } from "lucide-react";
import { MADRID, MURCIA } from "@/lib/constants";

const clinics = [
  {
    ...MADRID,
    image: "/assets/clinica-madrid.jpg",
  },
  {
    ...MURCIA,
    image: "/assets/clinica-murcia.jpg",
  },
];

export default function Clinics() {
  return (
    <section id="clinicas" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-wider uppercase text-brand-secondary">
            Nuestras clínicas
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary">
            Dos clínicas, el mismo compromiso
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Estamos en el corazón de Madrid y Murcia para que nunca estés lejos
            de una sonrisa de confianza.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {clinics.map((clinic, i) => (
            <motion.div
              key={clinic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-md border border-slate-100"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={clinic.image}
                  alt={`Clínica Dental Medics ${clinic.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-full px-4 py-2">
                  <p className="font-display font-bold text-brand-primary">
                    Clínica {clinic.name}
                  </p>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                    {clinic.address}
                  </li>
                  <li>
                    <a
                      href={`tel:${clinic.phoneTel}`}
                      className="flex gap-3 hover:text-brand-primary"
                    >
                      <Phone className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                      {clinic.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${clinic.email}`}
                      className="flex gap-3 hover:text-brand-primary"
                    >
                      <Mail className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                      {clinic.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                    {clinic.schedule}
                  </li>
                  <li className="flex gap-3">
                    <Train className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                    {clinic.transport}
                  </li>
                </ul>

                <div className="mt-5 rounded-xl overflow-hidden border border-slate-200">
                  <iframe
                    src={clinic.mapsEmbed}
                    width="100%"
                    height="220"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de la clínica de ${clinic.name}`}
                    className="w-full"
                  />
                </div>

                <a
                  href={clinic.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-secondary"
                >
                  <Navigation className="h-4 w-4" />
                  Cómo llegar — abrir en Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
