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
      <section className='flex flex-col w-full items-center'>
        <div className="w-full bg-slate-800 rounded-lg shadow h-16 flex items-center justify-between px-4">
          <Image src='/logos/logo.svg' width={120} height={45} alt='Logo' />
          <div
            className="flex justify-between items-center px-6 py-1 shadow text-black rounded-lg font-semibold bg-green-600 text-sm"
          >
            estado
          </div>
        </div>

        {/* Detalle de entradas */}
        <div className="w-full bg-slate-800 rounded-lg shadow flex flex-col justify-start p-4 mb-4 font-headline gap-2">
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
        <div className='w-full bg-slate-800 rounded-lg shadow flex justify-between items-center p-4 mb-4 font-headline gap-2'>
          <div>
            <header className="text-base font-semibold text-ellipsis">Cant. de Personas</header>
            <p className="text-sm text-primary font-semibold">7 restantes</p>
          </div>
          <div className='bg-background flex justify-around items-center px-3 py-1.5 rounded-lg gap-x-4'>
            <button type='button' className='text-2xl font-bold'>
              <Image
                src='/icons/minus.svg'
                alt='minus'
                width={18}
                height={18}
              />
            </button>
            <span className='text-primary text-lg'>C</span>
            <button type='button' className='text-2xl font-bold'>
              <Image
                src='/icons/add.svg'
                alt='plus'
                width={18}
                height={18}
              />
            </button>
          </div>
        </div>
        <button className="w-full h-11 flex justify-center items-center bg-cyan-600 text-black rounded-xl font-semibold">
          Validar accesso
        </button>
      </section>
    </div>
  )
}

export default page