"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type CounterItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
};

const items: CounterItem[] = [
  { value: 40, suffix: "+", label: "Años de experiencia", sublabel: "Desde 1984" },
  { value: 90, suffix: "%", label: "Pacientes por recomendación", sublabel: "Nuestro mayor orgullo" },
  { value: 2, label: "Clínicas", sublabel: "Madrid y Murcia" },
  {
    value: 5000,
    prefix: "+",
    label: "Pacientes atendidos",
    sublabel: "Familias que confían en nosotros",
  },
];

function CountUp({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCurrent(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {current.toLocaleString("es-ES")}
      {suffix}
    </span>
  );
}

export default function Counters() {
  return (
    <section className="bg-brand-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-5xl lg:text-6xl font-bold text-brand-accent">
                <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-base font-semibold">{item.label}</p>
              <p className="text-sm text-slate-300">{item.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
