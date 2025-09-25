import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <section className="w-full h-[10vh] bg-dark flex px-4 justify-between items-center border-b border-slate-700">
      <Link href={'/'}>
        <Image src='/logos/logo.svg' width={100} height={50} alt="logo" />
      </Link>
      <span className='text-light'>Phoo</span>
    </section>
  )
}

export default Header