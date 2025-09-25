import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full p-4 flex flex-col gap-y-4 text-light'>
      <h5 className='font-semibold'>Resultados del usuario</h5>
      <article className='flex gap-4 bg-slate-800 rounded-xl shadow p-4 w-full'>
        <div className='bg-primary w-12 h-12 rounded-full'></div>
        <div className='flex flex-col gap-y-1'>
          <h3 className='text-lg font-semibold'>tobi</h3>
          <h6 className='text-base'>45.130757</h6>
        </div>
      </article>
      <h5 className='font-semibold'>Entradas disponibles</h5>
      <button type='button'  className="w-full md:w-80 h-20 bg-slate-800 hover:bg-primary/50 transition-all duration-300 rounded-lg flex items-center justify-start gap-x-4 px-4 relative">
        <Image src='/icons/ticket.svg' width={30} height={30} alt='ticket' />
        <div className='flex flex-col items-start justify-start' >
          <h3 className="font-semibold text-lg">Compra tu entrada</h3>
          <h6 className="text-base text-primary">Desde 400</h6>
        </div>
        <Image src='/icons/arrow-rigth.svg' width={10} height={10} alt="arrow" className="absolute right-4 " />
      </button>
    </div>
  )
}

export default page