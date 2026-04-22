import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TEAM, BUSINESS } from "@/lib/constants";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Nuestro Equipo — Dental Medics Dr. Ferrer",
  description:
    "Conoce al equipo de Dental Medics: Dr. Francisco Ferrer (fundador, 40 años de experiencia), Dr. Jorge Ferrer, Dra. Paloma Ferrer, Dra. Amanda Sánchez y Dra. María Munuera.",
};

export default function EquipoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Nuestro equipo médico
          </h1>
          <p className="mt-6 text-lg text-slate-200 leading-relaxed">
            Tres generaciones de la familia Ferrer y un equipo de especialistas
            comprometidos con la excelencia clínica y el trato humano.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div key={member.slug} className="flex flex-col">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-bold text-brand-primary">{member.name}</h2>
                  <p className="text-sm text-brand-secondary font-medium mt-1">{member.role}</p>
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">{member.bio}</p>
                  <blockquote className="mt-4 border-l-2 border-brand-accent pl-4 italic text-sm text-brand-muted">
                    &ldquo;{member.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-brand-muted mb-6">
              ¿Quieres conocernos en persona? La primera consulta es completamente gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-secondary transition-colors"
              >
                Pedir cita
              </Link>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1fb858] transition-colors"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
