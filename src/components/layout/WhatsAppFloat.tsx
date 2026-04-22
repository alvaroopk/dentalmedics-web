import { BUSINESS } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={BUSINESS.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="pulse-whatsapp fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.582-.515 2.98-1.39.13-.288.23-.795.23-1.09 0-.715-2.054-1.404-2.206-1.404zm-2.775 5.622a9.58 9.58 0 0 1-5.418-1.676l-3.79 1.216 1.234-3.673a9.6 9.6 0 0 1-1.879-5.706c0-5.282 4.3-9.582 9.583-9.582s9.582 4.3 9.582 9.582-4.3 9.582-9.582 9.582m0-20.882C10.01 1.945 4.4 7.555 4.4 13.94a11.96 11.96 0 0 0 1.737 6.23L4 26.745l6.781-2.17a11.95 11.95 0 0 0 5.553 1.384c6.386 0 11.996-5.61 11.996-11.996S22.72 1.945 16.334 1.945" />
      </svg>
    </a>
  );
}
