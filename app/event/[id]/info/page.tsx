import ManualAccess from '@/app/components/manual-access'
import QrCameraButton from '@/app/components/qr-button'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-4 bg-dark p-4 h-[90vh] overflow-y-auto'>
      {
        [0, 6, 7, 8, 1, 2, 3, 4].map(e => <div key={e} className='w-full h-20 flex justify-between bg-secondary rounded-xl p-4'>
          <div className='flex flex-col justify-between'>
            <h4 className='text-light font-semibold'>Mariano pere</h4>
            <h4 className='text-light '>Numero dni</h4>
          </div>
          <div className='flex items-start justify-end h-full'>
            <span className='px-5 py-1 bg-red-500 rounded-lg font-semibold '>Rechazo</span>
          </div>
        </div>)
      }
      <div className='flex flex-col gap-y-4 fixed bottom-3 right-3'>
        <ManualAccess/>
        <QrCameraButton/>
      </div>
    </div>
  )
}

export default page