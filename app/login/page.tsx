import React from 'react'

const page = () => {
  return (
    <div className='w-11/12 h-auto gap-y-4 bg-dark flex flex-col items-center justify-around shadow rounded-xl text-light p-4'>
      <h4 className='text-xl font-semibold'>Iniciar sesión</h4>
      <h6 className='font-medium text-sm'>Ingresa al Control de Acceso</h6>
      <div className='flex flex-col gap-y-4 w-full'>
        <label className='w-full flex flex-col'>
          <h5 className='font-semibold text-sm'>
            Correo electrónico
          </h5>
          <input className='w-full h-12 px-2 text-sm bg-background rounded-lg' />
        </label>
        <label className='w-full flex flex-col'>
          <h5 className='font-semibold text-sm'>
            Contraseña
          </h5>
          <input className='w-full h-12 px-2 text-sm bg-background rounded-lg' />
        </label>
      </div>
      <button type='button' className='w-full h-10 bg-primary text-dark flex justify-center items-center rounded-xl font-semibold'>
        Iniciar sesión
      </button>
    </div>
  )
}

export default page