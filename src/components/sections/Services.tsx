"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bluetooth,
  Smile,
  Sparkles,
  Siren,
  ArrowRight,
} from "lucide-react";
import { MADRID } from "@/lib/constants";

const services = [
  {
    title: "Implantes dentales",
    description:
      "Recupera tu sonrisa completa con implantes de calidad garantizada. Desde €380 con marcas de primera línea.",
    icon: Bluetooth,
    href: "/implantes",
    cta: "Ver implantes",
    urgent: false,
  },
  {
    title: "Ortodoncia e Invisalign",
    description:
      "Dientes perfectamente alineados con brackets o alineadores invisibles. Para niños y adultos.",
    icon: Smile,
    href: "/ortodoncia",
    cta: "Ver ortodoncia",
    urgent: false,
  },
  {
    title: "Estética dental",
    description:
      "Carillas, blanqueamiento y diseño de sonrisa para que te encante lo que ves en el espejo.",
    icon: Sparkles,
    href: "/estetica",
    cta: "Ver estética",
    urgent: false,
  },
  {
    title: "Urgencias dentales",
    description:
      "¿Dolor intenso? Atención urgente el mismo día. Llámanos y te daremos prioridad.",
    icon: Siren,
    href: `tel:${MADRID.phoneTel}`,
    cta: "Llamar ahora",
    urgent: true,
  },
] as const;

export default function Services() {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-wider uppercase text-brand-secondary">
            Nuestros tratamientos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary">
            ¿Qué podemos hacer por tu sonrisa?
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Tratamos desde la primera caries hasta los casos más complejos.
            Siempre con honestidad, siempre con tecnología de vanguardia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isExternal = service.href.startsWith("tel:");
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 ${
                  service.urgent
                    ? "bg-brand-urgent text-white border-brand-urgent"
                    : "bg-white border-slate-200 text-slate-900"
                }`}
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                    service.urgent
                      ? "bg-white/15 text-white"
                      : "bg-brand-accent text-brand-primary"
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3
                  className={`mt-5 text-2xl font-bold ${
                    service.urgent ? "text-white" : "text-brand-primary"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-3 leading-relaxed ${
                    service.urgent ? "text-white/90" : "text-brand-muted"
                  }`}
                >
                  {service.description}
                </p>
                <span
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                    service.urgent
                      ? "text-white"
                      : "text-brand-secondary group-hover:gap-3"
                  } transition-all`}
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </motion.div>
            );
            return isExternal ? (
              <a key={service.title} href={service.href}>
                {Card}
              </a>
            ) : (
              <Link key={service.title} href={service.href}>
                {Card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
