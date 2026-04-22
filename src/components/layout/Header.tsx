"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, BUSINESS, MADRID } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Dental Medics Dr. Ferrer"
              width={160}
              height={40}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-brand-primary"
                      : "text-slate-700 hover:text-brand-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${MADRID.phoneTel}`}
              className="flex items-center gap-2 text-sm font-medium text-brand-primary hover:underline"
            >
              <Phone className="h-4 w-4" />
              {MADRID.phoneDisplay}
            </a>
            <a
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-brand-secondary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Consulta gratis
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-md p-2 text-slate-700 hover:bg-slate-100"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-slate-100 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 mt-2">
              <a
                href={`tel:${MADRID.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-full border border-brand-primary px-4 py-2 text-sm font-semibold text-brand-primary"
              >
                <Phone className="h-4 w-4" />
                Llamar {MADRID.phoneDisplay}
              </a>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp · Consulta gratis
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
