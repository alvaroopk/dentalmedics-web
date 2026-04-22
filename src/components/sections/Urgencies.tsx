import { Siren, Phone } from "lucide-react";
import { MADRID, MURCIA } from "@/lib/constants";

export default function Urgencies() {
  return (
    <section className="bg-brand-urgent text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="h-20 w-20 rounded-2xl bg-white/15 flex items-center justify-center">
              <Siren className="h-10 w-10 animate-pulse" />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              ¿Dolor de muelas? Atendemos urgencias
            </h2>
            <p className="mt-3 text-lg text-white/90 max-w-2xl">
              El dolor dental no espera. Llámanos y te damos cita el mismo día
              o el siguiente. Atendemos accidentes, dolor agudo, fracturas y
              pérdida de empastes.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center lg:items-stretch">
            <a
              href={`tel:${MADRID.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-urgent hover:bg-brand-accent transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              Madrid · {MADRID.phoneDisplay}
            </a>
            <a
              href={`tel:${MURCIA.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/25 transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              Murcia · {MURCIA.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
