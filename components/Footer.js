import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const date=new Date();
    const year=date.getFullYear();
  return (
    <footer className='bg-transparent p-2 shadow-xl w-full px-2 md:p-5 flex items-center justify-center h-20 '>
      <p className='text-sm  '>All rights reserved ©{year}|Made by
      <Link href={"https://twitter.com/iamsidar07"}>
       <span className='cursor-pointer text-sky-500'> @Manoj kumar</span>
      </Link>
       🚀</p>

    </footer>
  )
}

export default Footer
