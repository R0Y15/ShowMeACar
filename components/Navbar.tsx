import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from '@/components';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      < nav className='max-w-[1440px] mx-auto flex items-center justify-between sm:px-16 px-6 py-4' >
        <Link href={'/'} className='justify-center items-center'>
          <Image 
          src={'/Logo-dark.png'}
          alt='Log'
          width={118}
          height={18}
          className='oject-contain'
          />
        </Link>
        <CustomButton 
        title= 'Sign In'
        btntype= 'button'
        containerStyles='text-primary-blue bg-white px-8 py-3 rounded-full min-w-[120px]'
        />
      </nav>
    </header>
  )
}

export default Navbar