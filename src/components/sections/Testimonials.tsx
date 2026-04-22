"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-brand-bg-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-wider uppercase text-brand-secondary">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary">
            Lo que dicen los pacientes que ya confiaron en nosotros
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            El 90% de nuestros nuevos pacientes llega por recomendación. Esto
            es lo que nos cuentan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-md border border-slate-100 flex flex-col"
            >
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-slate-700 italic leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 pt-5 border-t border-slate-100">
                <p className="font-semibold text-brand-primary">{t.name}</p>
                <p className="text-sm text-brand-muted">{t.treatment}</p>
              </div>
            </motion.div>
          ))}

          <motion.a
            href="https://www.google.com/search?q=Cl%C3%ADnica+Dental+Medics+Dr.+Ferrer"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-md group"
          >
            <Image
              src="/assets/testimonio-neli.png"
              alt="Vídeo testimonio de paciente Neli"
              width={500}
              height={600}
              className="h-full w-full object-cover aspect-[3/4]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="h-7 w-7 text-brand-primary fill-current ml-1" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="font-semibold">Neli, paciente</p>
              <p className="text-sm text-white/80">Ver vídeo testimonio</p>
            </div>
          </motion.a>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/search?q=Cl%C3%ADnica+Dental+Medics+Dr.+Ferrer+opiniones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-secondary"
          >
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            Ver todas las opiniones en Google
          </a>
        </div>
      </div>
    </section>
  );
}
