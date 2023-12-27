"use client";

import Image from "next/image";
import { CustomButton } from ".";

const hero = ({ catalogRef }) => {
  const handelScrollToSection = () => {
    catalogRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x" >
        <h1 className="hero__title">
          Find, Book or Rent a Car Easily
        </h1>
        <p className="hero__subtitle">
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