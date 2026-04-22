"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { BUSINESS, MADRID, MURCIA } from "@/lib/constants";

type FormData = {
  name: string;
  phone: string;
  email: string;
  clinic: "madrid" | "murcia";
  treatment: string;
  message: string;
  rgpd: boolean;
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      clinic: "madrid",
      treatment: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      // Simulación de envío. En producción se sustituirá por Formspree/API.
      await new Promise((r) => setTimeout(r, 900));
      console.log("[contact-form]", data);
      setStatus("sent");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-wider uppercase text-brand-secondary">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary">
            ¿Hablamos? Tu primera consulta es gratis
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Cuéntanos tu caso o lo que necesitas. Te responderemos en menos de
            24 horas.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-brand-bg-alt rounded-2xl p-6 lg:p-8 border border-slate-200"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-brand-primary">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-brand-urgent">
                    El nombre es obligatorio.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-primary">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="600 000 000"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-brand-urgent">
                    El teléfono es obligatorio.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-primary">
                  Email *
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="nombre@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-brand-urgent">
                    El email es obligatorio.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-primary">
                  Clínica
                </label>
                <select
                  {...register("clinic")}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="madrid">Madrid</option>
                  <option value="murcia">Murcia</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-primary">
                  Tratamiento de interés
                </label>
                <select
                  {...register("treatment")}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="">Selecciona...</option>
                  <option>Implantes</option>
                  <option>Ortodoncia / Invisalign</option>
                  <option>Estética dental</option>
                  <option>Urgencia</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-brand-primary">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  {...register("message")}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="Cuéntanos lo que necesitas"
                />
              </div>

              <label className="sm:col-span-2 flex items-start gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  {...register("rgpd", { required: true })}
                  className="mt-0.5 h-4 w-4 accent-brand-primary"
                />
                <span>
                  He leído y acepto la política de privacidad. Mis datos serán
                  tratados para responder a mi solicitud.
                </span>
              </label>
              {errors.rgpd && (
                <p className="sm:col-span-2 text-xs text-brand-urgent">
                  Debes aceptar la política de privacidad.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-secondary transition-colors disabled:opacity-60"
            >
              {status === "sending" && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              {status === "sent" ? "¡Mensaje enviado!" : "Solicitar mi consulta gratuita"}
            </button>

            {status === "sent" && (
              <p className="mt-3 flex items-center gap-2 text-sm text-brand-success">
                <CheckCircle2 className="h-4 w-4" />
                Gracias. Nuestro equipo te contactará en menos de 24 horas.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-brand-urgent">
                No hemos podido enviar el mensaje. Prueba por WhatsApp o
                llámanos directamente.
              </p>
            )}
          </motion.form>

          <div className="space-y-6">
            <div className="rounded-2xl bg-brand-primary text-white p-6 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
                WhatsApp directo
              </p>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1fb858]"
              >
                <MessageCircle className="h-4 w-4" />
                {BUSINESS.whatsappDisplay}
              </a>
            </div>

            {[
              {
                name: "Madrid",
                phone: MADRID.phoneDisplay,
                tel: MADRID.phoneTel,
                email: MADRID.email,
                schedule: MADRID.schedule,
                address: MADRID.shortAddress,
              },
              {
                name: "Murcia",
                phone: MURCIA.phoneDisplay,
                tel: MURCIA.phoneTel,
                email: MURCIA.email,
                schedule: MURCIA.schedule,
                address: MURCIA.shortAddress,
              },
            ].map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-display font-bold text-lg text-brand-primary">
                  Clínica {c.name}
                </h3>
                <p className="mt-1 text-sm text-brand-muted">{c.address}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a
                      href={`tel:${c.tel}`}
                      className="flex items-center gap-2 text-slate-800 hover:text-brand-primary"
                    >
                      <Phone className="h-4 w-4 text-brand-primary" />
                      {c.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-2 text-slate-800 hover:text-brand-primary"
                    >
                      <Mail className="h-4 w-4 text-brand-primary" />
                      {c.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-slate-800">
                    <Clock className="h-4 w-4 text-brand-primary" />
                    {c.schedule}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
