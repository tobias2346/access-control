import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col px-4 w-full gap-y-3'>
      <h4 className='font-headline text-light font-medium'>Elegi sector</h4>
      <Link className='w-full h-12 text-light font-semibold rounded-lg flex items-center justify-between px-4 bg-secondary' href='/'>
        <span>Todos</span>
        <Image src='/icons/arrow-rigth.svg' alt='arrow rigth' width={8} height={8}/>
      </Link>
      <Link className='w-full h-12 text-light font-semibold rounded-lg flex items-center justify-between px-4 bg-secondary' href='/'>
        <span>Sector</span>
        <Image src='/icons/arrow-rigth.svg' alt='arrow rigth' width={8} height={8}/>
      </Link>
      <Link className='w-full h-12 text-light font-semibold rounded-lg flex items-center justify-between px-4 bg-secondary' href='/'>
        <span>Todos</span>
        <Image src='/icons/arrow-rigth.svg' alt='arrow rigth' width={8} height={8}/>
      </Link>
    </div>
  )
}

export default page