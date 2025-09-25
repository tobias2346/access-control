import Image from "next/image";

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <section className="flex flex-col w-full p-4 gap-y-2 bg-dark">
        <button
          type='button'
          className='text-primary flex items-center gap-x-2'
        >
          <Image src='/icons/arrow-left.svg' alt='Arrow left' width={15} height={15} />
          Volver
        </button>
        <div className="h-60 py-2">

        <Image
          width={1920}
          height={1080}
          src='/icons/prueba.png'
          className="rounded-xl h-auto  "
          alt="event"
        />
        </div>

        <h1 className="text-2xl font-semibold font-headline text-light">Boca vs Sanlo</h1>
      </section>
      <section className="w-full h-auto flex items-center">
        {children}
      </section>
    </section>
  );
}
