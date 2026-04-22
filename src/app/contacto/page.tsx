import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import Clinics from "@/components/sections/Clinics";

export const metadata: Metadata = {
  title: "Contacto — Dental Medics Dr. Ferrer · Madrid y Murcia",
  description:
    "Pide cita en Dental Medics. Primera consulta gratuita. Clínica Madrid (Chamberí): 91 441 80 42. Clínica Murcia: 968 13 50 89. También por WhatsApp.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Contacta con nosotros
          </h1>
          <p className="mt-6 text-lg text-slate-200 leading-relaxed">
            La primera consulta es completamente gratuita. Sin compromiso.
            Llámanos, escríbenos por WhatsApp o rellena el formulario.
          </p>
        </div>
      </section>
      <Clinics />
      <Contact />
    </>
  );
}
