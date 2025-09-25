import Image from "next/image";
import { EventCardLoading } from "./components/event-card-loading";

export default function Home() {
  return (
    <section className="w-full h-auto flex flex-col ">
      <div className="w-full px-4 py-3 bg-dark">
        <input className="w-full h-10 rounded-lg shadow bg-background "/>
      </div>
      <div className="flex flex-col gap-y-8 items-center py-10 w-full">
        {
          [0,1,2].map(e => <EventCardLoading key={e}/>)
        }
      </div>
    </section>
  );
}
