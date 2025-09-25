'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import CommonModal from './common-modal';
import CommonButton from './common-button';

const ManualAccess = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <button className='p-3 bg-primary rounded-full ' type='button' onClick={() => setOpen(true)}>
        <Image src='/icons/edit.svg' alt='edit' width={25} height={25} />
      </button>
      <CommonModal open={open} setOpen={setOpen}>
        <h2 className='text-xl font-semibold text-light'>Ingreso manual</h2>
        <label className='w-full flex flex-col gap-y-2'>
          <h5 className='font-semibold text-sm text-light'>
            Alias
          </h5>
          <input className='w-full h-12 px-2 text-sm bg-background rounded-lg' />
        </label>
        <CommonButton type='primary' text='Validar alias' extend/>
      </CommonModal>
    </>
  )
}

export default ManualAccess