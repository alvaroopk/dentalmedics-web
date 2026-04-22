"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";
import { PRICES_HOME } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="precios" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-wider uppercase text-brand-secondary">
            Transparencia total
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary">
            Precios claros, sin sorpresas
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Publicamos nuestras tarifas porque creemos que tienes derecho a
            saber cuánto cuesta tu tratamiento antes de comprometerte.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-success/10 px-4 py-2 text-sm font-semibold text-brand-success"
        >
          <Gift className="h-4 w-4" />
          Primera consulta GRATIS · Sin compromiso
        </motion.div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full">
            <thead className="bg-brand-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Tratamiento
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold">
                  Desde
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICES_HOME.map((row, i) => (
                <tr
                  key={row.name}
                  className={i % 2 === 0 ? "bg-white" : "bg-brand-bg-alt"}
                >
                  <td className="px-6 py-4 text-slate-800">{row.name}</td>
                  <td className="px-6 py-4 text-right font-semibold text-brand-primary">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/precios"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-primary px-6 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
          >
            Ver tabla de precios completa
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-secondary"
          >
            Pide tu valoración gratuita
          </Link>
        </div>
      </div>
    </section>
  );
}
