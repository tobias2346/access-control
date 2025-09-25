import Image from "next/image";
import { EventCardLoading } from "./components/event-card-loading";

export default function Home() {
  return (
    <section className="w-full h-auto flex flex-col ">
      <div className="w-full px-4 py-3 bg-dark">
        <div className="relative">
          <input className="w-full h-11 rounded-xl shadow bg-background text-light pr-4 pl-10" placeholder="Buscar partido" />
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Image src='/icons/search.svg' width={20} height={20} alt="Buscar"/>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 items-center py-10 w-full bg-background">
        {
          [0, 1, 2].map(e => <EventCardLoading key={e} />)
        }
      </div>
    </section>
  );
}
