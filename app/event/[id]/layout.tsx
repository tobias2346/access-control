import Image from "next/image";

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="flex flex-col w-full p-4">
        <button
          type='button'
          className='text-primary flex items-center gap-x-2'
        >
          <Image src='/icons/arrow-left.svg' alt='Arrow left' width={15} height={15} />
          Volver
        </button>
        <Image
          width={1920}
          height={1080}
          src='/logos/logo.svg'
          className="w-full h-40 rounded-xl"
          alt="event"
        />
        <h1 className="text-2xl font-semibold text-light">Boca vs Sanlo</h1>
      </section>
      <section className="w-full h-auto flex items-center">
        {children}
      </section>
    </>
  );
}
