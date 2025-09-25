import React from 'react'

const Info = () => {
  return (
    <div className='flex flex-col w-full gap-y-3 pb-8'>
      <h4 className='font-headline text-light font-medium'>Resumen de ingresos</h4>
      <div className='flex flex-wrap gap-4'>
        <div className='w-40 h-24 bg-secondary rounded-xl font-headline flex flex-col justify-evenly px-4 py-2'>
          <h4 className='text-2xl font-semibold text-light'>100</h4>
          <h4 className='text-base text-slate-200'>total participaio</h4>
        </div>
          <div className='w-40 h-24 bg-secondary rounded-xl font-headline flex flex-col justify-evenly px-4 py-2'>
          <h4 className='text-2xl font-semibold text-light'>100</h4>
          <h4 className='text-base text-slate-200'>total participaio</h4>
        </div>
      </div>
    </div>
  )
}

export default Info