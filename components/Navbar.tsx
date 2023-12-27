"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from '@/components';

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth >= 1025); // replace 768 with your breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <header className='w-full absolute z-10'>
      < nav className='max-w-[1440px] mx-auto flex items-center justify-between sm:px-16 px-6 py-4' >
        <Link href={'/'} className='justify-center items-center'>
          <Image
            src={isSmallScreen ? '/Logo-dark.png' : '/Logo-light.png'}
            alt='Log'
            width={118}
            height={18}
            className='oject-contain'
          />
        </Link>
        <CustomButton
          title='Sign In'
          btntype='button'
          containerStyles='text-primary-blue bg-white px-8 py-3 rounded-full min-w-[120px]'
        />
      </nav>
    </header>
  )
}

export default Navbar