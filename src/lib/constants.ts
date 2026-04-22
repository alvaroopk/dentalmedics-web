export const BUSINESS = {
  name: "Dental Medics",
  legalName: "Clínica Dental Medics Dr. Ferrer",
  tagline: "40 años devolviendo sonrisas de confianza",
  whatsappNumber: "34648418042",
  whatsappDisplay: "+34 648 41 80 42",
  whatsappUrl:
    "https://wa.me/34648418042?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n",
} as const;

export const MADRID = {
  name: "Madrid",
  address: "Calle de Ramiro II, 10, Chamberí, 28003 Madrid",
  shortAddress: "C/ Ramiro II, 10 · Chamberí, Madrid",
  phone: "+34 91 441 80 42",
  phoneDisplay: "91 441 80 42",
  phoneTel: "+34914418042",
  email: "info@dentalmedics.es",
  schedule: "L-V 10:00 – 20:00",
  transport: "Metro: Cuatro Caminos (L1/L2/L6), Ríos Rosas (L1)",
  mapsEmbed:
    "https://maps.google.com/maps?q=Calle+de+Ramiro+II,+10,+28003+Madrid&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Calle+de+Ramiro+II+10+28003+Madrid",
} as const;

export const MURCIA = {
  name: "Murcia",
  address: "C. Donantes de Sangre, 3, 30007 Santiago y Zaraíche, Murcia",
  shortAddress: "C/ Donantes de Sangre, 3 · Murcia",
  phone: "+34 968 13 50 89",
  phoneDisplay: "968 13 50 89",
  phoneTel: "+34968135089",
  email: "murcia@dentalmedics.es",
  schedule: "L-V 10:00 – 20:00",
  transport: "Tranvía próximo",
  mapsEmbed:
    "https://maps.google.com/maps?q=C.+Donantes+de+Sangre,+3,+30007+Murcia&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Donantes+de+Sangre+3+30007+Murcia",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Implantes", href: "/implantes" },
  { label: "Ortodoncia", href: "/ortodoncia" },
  { label: "Estética", href: "/estetica" },
  { label: "Equipo", href: "/equipo" },
  { label: "Precios", href: "/precios" },
  { label: "Clínicas", href: "/madrid" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const TEAM = [
  {
    slug: "francisco-ferrer",
    name: "Dr. Francisco Ferrer",
    role: "Médico Estomatólogo · Fundador y Director",
    quote:
      "Más de 40 años dedicados a devolver la sonrisa a cada paciente que cruza nuestra puerta.",
    image: "/assets/dr-francisco-ferrer.webp",
    bio: "Fundador de la clínica en 1984. Más de cuatro décadas de experiencia clínica y una vocación intacta: cuidar a cada paciente como si fuera de su propia familia.",
  },
  {
    slug: "jorge-ferrer",
    name: "Dr. Jorge Ferrer",
    role: "Implantología y Cirugía Oral",
    quote:
      "Especialista en los casos más complejos de implantes y cirugía maxilofacial.",
    image: "/assets/dr-jorge-ferrer.webp",
    bio: "Experto en implantología avanzada, incluyendo implantes zigomáticos y pterigoideos, casos con pérdida ósea severa y rehabilitaciones completas de carga inmediata.",
  },
  {
    slug: "paloma-ferrer",
    name: "Dra. Paloma Ferrer",
    role: "Implantología y Ortodoncia",
    quote:
      "Combino la precisión de la cirugía con la dedicación de la ortodoncia para resultados completos.",
    image: "/assets/dra-paloma-ferrer.webp",
    bio: "Especialista certificada en Invisalign y ortodoncia integral para niños y adultos, además de formación avanzada en implantología quirúrgica.",
  },
  {
    slug: "amanda-sanchez",
    name: "Dra. Amanda Sánchez",
    role: "Odontología Conservadora y Estética",
    quote:
      "Especialista en devolver la belleza natural de tu sonrisa con el mínimo impacto.",
    image: "/assets/dra-amanda-sanchez.jpg",
    bio: "Enfocada en tratamientos conservadores mínimamente invasivos: carillas de composite y porcelana, blanqueamientos LED y diseño digital de sonrisa.",
  },
  {
    slug: "maria-munuera",
    name: "Dra. María Munuera",
    role: "Odontología Conservadora y Estética",
    quote:
      "Cuidado dental diario y preventivo para que nunca necesites intervenciones mayores.",
    image: "/assets/dra-maria-munuera.webp",
    bio: "Referente en odontología preventiva y restauradora. Trata con especial cariño a pacientes con miedo al dentista y revisiones infantiles.",
  },
] as const;

export const PRICES_HOME = [
  { name: "Implante dental (JDentalCare)", price: "€380" },
  { name: "Implante dental (Nobel / Straumann)", price: "€530" },
  { name: "Carilla de composite", price: "€120 / diente" },
  { name: "Carilla de porcelana", price: "€350 / diente" },
  { name: "Blanqueamiento LED", price: "€250" },
  { name: "Diseño de sonrisa (estudio)", price: "€250" },
  { name: "Endodoncia (1 conducto)", price: "€230" },
  { name: "Limpieza dental", price: "€50" },
  { name: "Empaste", price: "€50" },
  { name: "TAC dental completo", price: "€120" },
] as const;

export const PRICES_FULL = [
  {
    category: "Implantología",
    items: [
      { name: "Implante JDentalCare + corona", price: "€380" },
      { name: "Implante Nobel Biocare / Straumann + corona", price: "€530" },
      { name: "Implante zigomático", price: "Consultar" },
      { name: "Implante pterigoideo", price: "Consultar" },
      { name: "Injerto óseo", price: "Desde €300" },
      { name: "Carga inmediata (All-on-4)", price: "Consultar" },
    ],
  },
  {
    category: "Ortodoncia",
    items: [
      { name: "Ortodoncia metálica (12-18 meses)", price: "Desde €1.950" },
      { name: "Ortodoncia estética zafiro", price: "Desde €2.450" },
      { name: "Ortodoncia autoligable", price: "Desde €2.650" },
      { name: "Invisalign Lite", price: "Desde €2.900" },
      { name: "Invisalign Full", price: "Desde €4.200" },
      { name: "Ortodoncia infantil", price: "Desde €1.450" },
      { name: "Retenedor fijo o removible", price: "€150" },
    ],
  },
  {
    category: "Estética dental",
    items: [
      { name: "Carilla de composite", price: "€120 / diente" },
      { name: "Carilla de porcelana", price: "€350 / diente" },
      { name: "Blanqueamiento LED en clínica", price: "€250" },
      { name: "Diseño de sonrisa digital", price: "€250" },
      { name: "Bichectomía", price: "€900" },
      { name: "Contorneado estético", price: "€90 / diente" },
      { name: "Ácido hialurónico labial", price: "€290" },
      { name: "Piercing dental", price: "€60" },
      { name: "Corona de porcelana", price: "€450" },
    ],
  },
  {
    category: "Odontología general",
    items: [
      { name: "Primera consulta + diagnóstico", price: "GRATIS" },
      { name: "Limpieza dental", price: "€50" },
      { name: "Empaste", price: "€50" },
      { name: "Endodoncia (1 conducto)", price: "€230" },
      { name: "Endodoncia (multi-conducto)", price: "€290" },
      { name: "Extracción simple", price: "€60" },
      { name: "Extracción cordal incluida", price: "Desde €120" },
      { name: "TAC dental completo", price: "€120" },
      { name: "Radiografía periapical", price: "€15" },
    ],
  },
] as const;

export const FAQS = [
  {
    q: "¿La primera consulta es realmente gratuita?",
    a: "Sí, sin ningún compromiso. Evaluamos tu caso, hacemos exploración inicial y te explicamos todas las opciones y costes.",
  },
  {
    q: "¿Por qué no trabajan con seguros dentales?",
    a: "Los seguros suelen limitar los materiales y técnicas que podemos usar. Sin seguros, elegimos siempre lo mejor para tu caso clínico.",
  },
  {
    q: "¿Cuánto dura un implante dental?",
    a: "Con el cuidado adecuado, toda la vida. Ofrecemos garantía de reimplante en caso de rechazo durante los primeros años.",
  },
  {
    q: "¿Tienen financiación sin intereses?",
    a: "Sí, hasta 24 meses sin intereses (TIN 0%) con Sabadell Consumer Finance. Papeleo rápido y respuesta en pocas horas.",
  },
  {
    q: "¿Qué diferencia hay entre Invisalign y los brackets?",
    a: "Invisalign son alineadores transparentes removibles, más discretos y cómodos para adultos. Los brackets están fijos, son más económicos y permiten tratar casos muy complejos.",
  },
  {
    q: "¿Atienden urgencias el mismo día?",
    a: "Sí, hacemos todo lo posible para atender urgencias en el mismo día o el día siguiente. Llámanos y priorizaremos tu caso.",
  },
  {
    q: "¿Qué tecnología utilizan?",
    a: "Contamos con TAC 3D, escáner intraoral digital iTero y sistema CAD-CAM para prótesis de alta precisión.",
  },
  {
    q: "¿Hay aparcamiento cerca de la clínica en Madrid?",
    a: "Hay zona de aparcamiento regulada en los alrededores y dos paradas de metro muy cerca: Cuatro Caminos y Ríos Rosas.",
  },
  {
    q: "¿Puedo pedir cita online?",
    a: "Sí, puedes usar el formulario web, escribirnos por WhatsApp o llamar directamente a cualquiera de nuestras clínicas.",
  },
  {
    q: "¿Atienden a niños?",
    a: "Por supuesto. Ofrecemos ortodoncia infantil, revisiones pediátricas y tratamientos preventivos para toda la familia.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Eva M.",
    treatment: "Implantes dentales",
    text: "Llevan más de 40 años en el barrio y se nota. Te tratan como a un familiar, no como a un número. Mi caso de implantes fue perfecto.",
  },
  {
    name: "Marco Antonio",
    treatment: "Ortodoncia",
    text: "Tenía mucho miedo al dentista y aquí lo perdí completamente. El Dr. Ferrer y su equipo te explican todo con paciencia.",
  },
  {
    name: "David R.",
    treatment: "Estética dental",
    text: "Lo que más me sorprendió fue la transparencia de precios. Sin sorpresas. Los precios están publicados y no hay letra pequeña.",
  },
] as const;
