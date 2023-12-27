"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { carProps } from '@/types';
import { CustomButton } from '.';
import { calculateCarRent, generateImage } from '@/utils';
import CarDetails from './CarDetails';


interface CarCardProps {
  car: carProps
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year } = car;
const [showCarDetails, setShowCarDetails] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className='car-card__content-title'>
          {make} {model} {year}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] text-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          ₹
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={generateImage(car)} alt='car-model' fill priority className='object-contain'/>
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/steering-wheel.svg"} alt="steering-wheel" width={20} height={20} />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} alt="tire" width={20} height={20} />
            <p className="text-[14px]">
              {drive.toLocaleUpperCase()}
            </p>
          </div>
          
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} alt="gas" width={20} height={20} />
            <p className="text-[14px]">
              {city_mpg} kmpl
            </p>
          </div>
          
        </div>
        <div className="car-card__btn-container">
          <CustomButton 
          title='More Details'
          containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
          textStyles='text-white text-[14px] leading-[17px] font-bold'
          rightIcon='right-arrow.svg' 
          handleClick={() => setShowCarDetails(true)}
          />
        </div>
      </div>

      <CarDetails openPane={showCarDetails} closePane={() => setShowCarDetails(false)} car={car} />
    </div>
  )
}

export default CarCard