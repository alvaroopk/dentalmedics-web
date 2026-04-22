"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle2 } from "lucide-react";

const termsNoInterest = [12, 18, 24];

function computeMonthly(amount: number, months: number, interest = false) {
  if (!interest) return amount / months;
  const r = 0.0925 / 12;
  return (amount * r) / (1 - Math.pow(1 + r, -months));
}

export default function Financing() {
  const [amount, setAmount] = useState(2000);

  return (
    <section className="bg-brand-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(45,125,210,0.4),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-wider uppercase text-brand-accent">
              Financiación
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Tu tratamiento, a tu ritmo
            </h2>
            <p className="mt-4 text-lg text-slate-200">
              ¿Preocupado por el coste? Financiamos tu tratamiento hasta en 24
              meses sin intereses. Sin bancos, sin papeleo complicado.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Hasta 24 meses sin intereses (TIN 0%, TAE desde 0,97%)",
                "Hasta 60 meses con intereses (TIN 9,25%)",
                "Financiación con Sabadell Consumer Finance",
                "Ejemplo: €2.000 de tratamiento → desde €83/mes",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-slate-100">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/#contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-accent transition-colors"
            >
              Consulta tu financiación personalizada
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-brand-accent text-brand-primary flex items-center justify-center">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-brand-muted">Calculadora</p>
                <p className="font-display font-bold text-lg text-brand-primary">
                  Simula tu cuota mensual
                </p>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="amount"
                className="block text-sm font-semibold text-slate-700"
              >
                Importe del tratamiento
              </label>
              <div className="mt-2 flex items-center gap-4">
                <input
                  id="amount"
                  type="range"
                  min={300}
                  max={10000}
                  step={50}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="flex-1 accent-brand-primary"
                />
                <div className="w-28 rounded-lg border border-slate-200 px-3 py-2 text-right font-semibold text-brand-primary">
                  €{amount.toLocaleString("es-ES")}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {termsNoInterest.map((m) => (
                <div
                  key={m}
                  className="rounded-xl bg-brand-bg-alt p-4 text-center"
                >
                  <p className="text-xs text-brand-muted font-semibold uppercase tracking-wider">
                    {m} meses
                  </p>
                  <p className="mt-1 font-display font-bold text-xl text-brand-primary">
                    €
                    {computeMonthly(amount, m).toLocaleString("es-ES", {
                      maximumFractionDigits: 0,
                    })}
                    <span className="text-xs font-normal text-brand-muted">
                      /mes
                    </span>
                  </p>
                  <p className="text-[10px] text-brand-success font-semibold mt-1">
                    Sin intereses
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-brand-muted leading-relaxed">
              *Simulación orientativa con Sabadell Consumer Finance. Sujeto a
              aprobación. TIN 0% en plazos de 12-24 meses. Condiciones
              detalladas en clínica.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
