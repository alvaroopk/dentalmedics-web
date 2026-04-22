import Image from "next/image";
import Link from "next/link";
import { MADRID, MURCIA, BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f2238] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/assets/logo.png"
              alt="Dental Medics"
              width={160}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Clínica dental familiar con 40 años de historia en Madrid y
              Murcia. El 90% de nuestros pacientes llega por recomendación.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Clínica Madrid
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                {MADRID.shortAddress}
              </li>
              <li>
                <a
                  href={`tel:${MADRID.phoneTel}`}
                  className="flex gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 mt-0.5" />
                  {MADRID.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${MADRID.email}`}
                  className="flex gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 mt-0.5" />
                  {MADRID.email}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                {MADRID.schedule}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Clínica Murcia
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                {MURCIA.shortAddress}
              </li>
              <li>
                <a
                  href={`tel:${MURCIA.phoneTel}`}
                  className="flex gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 mt-0.5" />
                  {MURCIA.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${MURCIA.email}`}
                  className="flex gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 mt-0.5" />
                  {MURCIA.email}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                {MURCIA.schedule}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {BUSINESS.legalName}. Todos los
            derechos reservados.
          </p>
          <p>Primera consulta gratuita · Financiación sin intereses · Desde 1984</p>
        </div>
      </div>
    </footer>
  );
}
