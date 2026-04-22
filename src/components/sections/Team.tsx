"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TEAM } from "@/lib/constants";

export default function Team() {
  return (
    <section id="equipo" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-wider uppercase text-brand-secondary">
            Nuestro equipo médico
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary">
            El equipo que cuidará de tu sonrisa
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Cinco especialistas comprometidos con tu salud dental. Formación
            continua, tecnología avanzada y, sobre todo, vocación de servicio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role} en Dental Medics Madrid`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-lg font-bold leading-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-brand-accent/90">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs italic text-white/80 hidden group-hover:block">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/equipo"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-secondary"
          >
            Conoce a todo el equipo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
