"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, AlertCircle } from "lucide-react";
import { BUSINESS, MADRID } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-[#234772] to-brand-secondary text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/15">
              Desde 1984 · Clínica familiar
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              40 años devolviendo
              <span className="block text-brand-accent">
                sonrisas de confianza
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-xl">
              La clínica dental familiar de Madrid y Murcia donde el{" "}
              <strong className="text-white">
                90% de nuestros pacientes llega por recomendación
              </strong>
              . Tres generaciones de la familia Ferrer, tecnología avanzada y
              precios transparentes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-accent transition-colors shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                Pide tu primera consulta gratis
              </Link>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1fb858] transition-colors shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-brand-accent/90">
              <AlertCircle className="h-5 w-5 text-brand-urgent animate-pulse" />
              <span>
                ¿Urgencia dental?{" "}
                <a
                  href={`tel:${MADRID.phoneTel}`}
                  className="underline font-semibold hover:text-white"
                >
                  Llámanos ahora al {MADRID.phoneDisplay}
                </a>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
              <Image
                src="/assets/hero-dentista.png"
                alt="Dra. Ferrer atendiendo a un paciente en Dental Medics"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-brand-urgent text-white rounded-2xl px-4 py-3 shadow-xl rotate-[-4deg]">
              <p className="text-[10px] uppercase tracking-wider opacity-90">
                Solo este mes
              </p>
              <p className="font-display font-bold text-lg leading-tight">
                TAC gratuito
              </p>
              <p className="text-xs opacity-90">20 primeros pacientes</p>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white text-brand-primary rounded-2xl px-5 py-4 shadow-xl rotate-[3deg]">
              <p className="text-[10px] uppercase tracking-wider text-brand-muted">
                Oferta permanente
              </p>
              <p className="font-display font-bold text-xl leading-tight">
                Primera consulta GRATIS
              </p>
              <p className="text-xs text-brand-muted">Sin compromiso</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
