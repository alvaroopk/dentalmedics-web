"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type Case = {
  title: string;
  description: string;
  before: string;
  after: string;
};

const cases: Case[] = [
  {
    title: "Implante dental unitario",
    description:
      "Paciente con pérdida de incisivo superior. Colocamos implante JDentalCare con corona de porcelana. Resultado natural y duradero.",
    before: "/assets/caso-implante-antes.jpg",
    after: "/assets/caso-implante-despues.jpg",
  },
  {
    title: "Prótesis fija sobre implantes",
    description:
      "Rehabilitación completa del maxilar superior con prótesis fija sobre implantes. Recuperación total de la función y la estética.",
    before: "/assets/caso-protesis-antes.jpg",
    after: "/assets/caso-protesis-despues.jpg",
  },
];

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const handleMove = (clientX: number) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const p = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(0, Math.min(100, p)));
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      handleMove(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current || !e.touches[0]) return;
      handleMove(e.touches[0].clientX);
    };
    const onEnd = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 select-none cursor-ew-resize"
      onMouseDown={(e) => {
        dragging.current = true;
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          setPos(((e.clientX - rect.left) / rect.width) * 100);
        }
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        if (ref.current && e.touches[0]) {
          const rect = ref.current.getBoundingClientRect();
          setPos(((e.touches[0].clientX - rect.left) / rect.width) * 100);
        }
      }}
    >
      <Image
        src={after}
        alt="Resultado después del tratamiento dental en Dental Medics"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <div className="relative h-full" style={{ width: `${(100 / pos) * 100}%` }}>
          <Image
            src={before}
            alt="Estado inicial antes del tratamiento dental en Dental Medics"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
        Antes
      </span>
      <span className="absolute top-3 right-3 bg-brand-primary text-white text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
        Después
      </span>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-brand-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 text-brand-primary"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 6L2 12L8 18M16 6L22 12L16 18"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Cases() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-wider uppercase text-brand-secondary">
            Casos reales
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary">
            Resultados reales de pacientes reales
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Cada sonrisa tiene una historia. Aquí van algunas de las
            transformaciones que hemos acompañado.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <BeforeAfter before={c.before} after={c.after} />
              <h3 className="mt-5 text-xl font-bold text-brand-primary">
                {c.title}
              </h3>
              <p className="mt-2 text-brand-muted">{c.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <p className="text-brand-muted">¿Quieres ver más casos?</p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-secondary"
          >
            Solicita tu valoración gratuita
          </Link>
        </div>
      </div>
    </section>
  );
}
