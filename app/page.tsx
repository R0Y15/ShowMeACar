"use client";

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { getCar } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const catalogRef = useRef(null);

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [maker, setMaker] = useState('');
  const [model, setModel] = useState('');

  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await getCar({
        model: model || '',
        maker: maker || '',
        year: year || currentYear,
        fuel: fuel || '',
        limit: limit || 10,
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, maker, model])

  const allCarsResult = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero catalogRef={catalogRef} />

      <div className="mt-12 padding-x padding-y max-width" ref={catalogRef} id='catalog'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalog
          </h1>
          <p>Explore the Best cars</p>
          <Link href={'/'}>
            View Our Collection
          </Link>
        </div>

        <div className="home__filters">
          <SearchBar
            setMaker={setMaker}
            setModel={setModel}
          />

          <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel} />
            <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>


        {allCars.length > 0 ? (
          <section>
            <div className='home__error-container'>
              {maker && <h2 className='font-semibold text-xl tracking-wide'>Showing Results for "{maker.toLocaleUpperCase()} {model.toLocaleUpperCase()}"</h2>
                ||
                <h2 className='font-semibold text-xl tracking-wide'> Showing the Best Cars in Our Collection</h2>
              }

              <div className="home__cars-wrapper">
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>

              {loading &&
                <div className="mt-16 w-full flex-center">
                  <Image
                    src='/loader.svg'
                    alt='loader'
                    width={100}
                    height={100}
                    className='object-contain'
                  />
                </div>
              }

              <ShowMore
                pageNumber={limit / 10}
                isNext={limit > allCars.length}
                setLimit={setLimit}
              />

            </div>
          </section>
        ) : (
          <div>
            <h2>
              OOPS! No Cars Available
            </h2>
            <p>
              {allCars?.message}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
