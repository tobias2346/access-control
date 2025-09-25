import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full p-4 flex flex-col text-light bg-background'>
      <div className='w-full h-40 flex flex-col justify-center items-center gap-y-4 my-2'>
        <Image src='/icons/success.svg' alt='Feedback' width={80} height={80} />
        <h1 className='text-2xl text-light font-headline'>¡Escaneo exitoso!</h1>
      </div>
      <div className="w-full bg-secondary rounded-lg shadow h-16 flex items-center justify-between px-4">
        <Image src='/logos/logo.svg' width={120} height={45} alt='Logo' />
        <div
          className="flex justify-between items-center px-6 py-1 shadow text-black rounded-lg font-semibold bg-green-600 text-sm"
        >
          estado
        </div>
      </div>

      {/* Detalle de entradas */}
      <div className="w-full bg-secondary rounded-lg shadow flex flex-col justify-start p-4 mb-4 font-headline gap-2">
        <h4 className="font-semibold  text-lg">Nombre del Evento</h4>

        <div className="flex justify-between items-center w-full">
          <h6 className="text-semibold">Entrada General x2</h6>
          <h6 className="text-semibold">$4000</h6>
        </div>

        <span className="h-px bg-gray-900 w-full"></span>

        {/* Info fija */}
        <div >
          <h3 className="text-sm text-primary">Fecha</h3>
          <span className="text-sm overflow-hidden text-ellipsis">xx</span>
        </div>
        <div >
          <h3 className="text-sm text-primary">Horario</h3>
          <span className="text-sm overflow-hidden text-ellipsis">xx</span>
        </div>   <div >
          <h3 className="text-sm text-primary">Lugar</h3>
          <span className="text-sm overflow-hidden text-ellipsis">xx</span>
        </div>
      </div>
      <h4 className='my-2 font-semibold text-lg'>Usuario admitido</h4>
      <article className='flex gap-4 bg-secondary rounded-xl shadow p-4 w-full'>
        <div className='bg-primary w-12 h-12 rounded-full'></div>
        <div className='flex flex-col gap-y-1'>
          <h3 className='text-lg font-semibold'>adasdasd adasdasd</h3>
          <h6 className='text-base'>45.130757</h6>
        </div>
      </article>
      <button className="w-full h-11 flex justify-center items-center bg-cyan-500 text-black rounded-xl font-semibold my-4">
        Volver al evento
      </button>
    </div>
  )
}

export default page