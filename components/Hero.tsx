"use client";

import Image from "next/image";
import { CustomButton } from ".";
import { useEffect, useState } from "react";

const hero = ({ catalogRef }) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1025);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handelScrollToSection = () => {
    catalogRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <div
        className="flex-1 pt-36 padding-x"
        style={ isSmallScreen ?  {color: '#fff'} : {} }
      >
        <h1 className="hero__title">
          Find, Book or Rent a Car Easily
        </h1>
        <p className="hero__subtitle" style={ isSmallScreen ?  {color: '#fff'} : {} }>
          Streamline your car rental business with our booking software
        </p>

        <CustomButton
          title="Explore Now"
          containerStyles="bg-primary-blue text-white px-8 py-3 rounded-full mt-8"
          handleClick={handelScrollToSection}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default hero