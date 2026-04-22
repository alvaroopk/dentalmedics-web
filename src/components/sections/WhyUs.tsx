"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Stethoscope,
  ScanLine,
  Tag,
  CreditCard,
  HeartHandshake,
  ShieldCheck,
  Smile,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "40+ años de experiencia",
    desc: "Fundada en 1984 por el Dr. Francisco Ferrer. Décadas de casos resueltos y familias atendidas.",
  },
  {
    icon: Users,
    title: "Clínica familiar, no franquicia",
    desc: "Los hijos del fundador son ahora los especialistas. Aquí te conocen por tu nombre, no por tu expediente.",
  },
  {
    icon: Stethoscope,
    title: "Especialistas en cada área",
    desc: "Cada tratamiento lo realiza un doctor especializado. Sin generalistas haciendo de todo.",
  },
  {
    icon: ScanLine,
    title: "Tecnología TAC 3D y escáner",
    desc: "Diagnóstico preciso desde el primer día. Menos sorpresas, mejores resultados.",
  },
  {
    icon: Tag,
    title: "Precios transparentes",
    desc: "Sin letra pequeña. Sabes exactamente lo que vas a pagar antes de empezar el tratamiento.",
  },
  {
    icon: CreditCard,
    title: "Financiación sin intereses",
    desc: "Hasta 24 meses sin intereses con Sabadell Consumer Finance. Tu tratamiento, a tu ritmo.",
  },
  {
    icon: Smile,
    title: "Primera consulta gratuita",
    desc: "Ven a conocernos sin compromiso. Evaluamos tu caso y te explicamos todas las opciones.",
  },
  {
    icon: ShieldCheck,
    title: "Resultados garantizados",
    desc: "Garantía de reimplante en caso de rechazo. Trabajamos para que dure toda la vida.",
  },
  {
    icon: HeartHandshake,
    title: "Trato humano y empático",
    desc: "Entendemos que visitar al dentista da miedo. Por eso nos tomamos el tiempo que necesitas.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-brand-bg-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-wider uppercase text-brand-secondary">
            Por qué elegirnos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary">
            Por qué nos eligen frente a otras clínicas
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Hay cientos de dentistas en Madrid. Estos son los motivos por los
            que nuestros pacientes vuelven — y traen a su familia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-primary">
                  {r.title}
                </h3>
                <p className="mt-2 text-brand-muted leading-relaxed text-sm">
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
