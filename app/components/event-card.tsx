import Image from "next/image";
import Link from "next/link";
import HeadText from "./common-head-text";

// 👇 Tipos defensivos (no dependemos de "Event" de otro archivo)
type Maybe<T> = T | null | undefined;
type Category = { name?: string } | null | undefined;
type Address = { description?: string } | string | null | undefined;

export interface EventCardProp {
  id: string;
  name?: string;
  flyer?: string; // opcional
  banner?: string; // por si viene así en otros endpoints
  address?: Address; // puede venir objeto, string o nada
  startDate?: string; // "YYYY-MM-DD HH:mm" o similar
  category?: Category;
  extend?: boolean;
  href?: string;
}

export function EventCard({
  id,
  name,
  flyer,
  banner,
  address,
  startDate,
  extend,
  category,
  href,
}: EventCardProp) {
  // -------- helpers seguros --------
  const getDates = () => {
    if (!startDate) return { date: "...", time: "..." };
    // admite "YYYY-MM-DD HH:mm" o ISO; si no matchea, devolvemos todo en date
    const parts = startDate.split(" ");
    if (parts.length >= 2) return { date: parts[0], time: parts[1] };
    return { date: startDate, time: "..." };
  };

  const getAddressText = (addr: Address): string => {
    if (!addr) return "";
    if (typeof addr === "string") return addr;
    return addr.description ?? "";
  };

  const title = name ?? "Evento";
  const categoryText = category?.name ?? "";
  const addressText = getAddressText(address);

  // imagen de fallback si no viene flyer/banner
  const imageSrc = flyer || banner || "/images/placeholder-event.png"; // asegurate de tener un placeholder en /public/images

  return (
    <Link
      href={href || "/"}
      className={`${
        extend
          ? "w-[75vw] min-w-80 max-w-xs md:min-w-96 md:max-w-sm h-96 md:h-[400px]"
          : "w-[75vw] min-w-80 max-w-xs h-[335px]"
      } overflow-hidden h-[345px] flex flex-col border-none shadow-lg rounded-xl transition-all duration-300 hover:shadow-gray-800`}
    >
      <article className="p-0 h-1/2">
        <Image
          src={imageSrc}
          alt={`Logo ${id}`}
          width={400}
          height={400}
          quality={100}
          className="w-full object-cover"
        />
      </article>

      <article className="h-1/2 flex flex-col font-headline items-start justify-start py-2 px-6 gap-y-1 bg-slate-800">
        <h5
          className={`${
            extend ? "text-sm font-medium" : "text-xs font-medium"
          }`}
        >
          {categoryText}
        </h5>

        <h3
          className={`${
            extend ? "text-2xl font-semibold" : "text-xl font-medium"
          }`}
        >
          {title}
        </h3>

        <article className="flex flex-wrap items-center gap-x-8 h-2/3">
          <HeadText head="Fecha" description={getDates().date} />
          <HeadText head="Horario" description={getDates().time} />
          <div
            className={`${
              extend ? "w-56 max-w-56 md:w-80 md:max-w-80" : "w-56 max-w-56"
            }`}
          >
            <h3 className="text-sm text-primary">Dirección</h3>
            <p className="block text-sm truncate overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {addressText}
            </p>
          </div>
        </article>
      </article>
    </Link>
  );
}
