"use client";

import { CarCard, CustomFilter, Hero, Loader, SearchBar, ShowMore } from "@/components";
import { getCar } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingIn, setIsFadingIn] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsFadingIn(true);
    }, 2000); // replace 2000 with the actual loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  // if (isLoading) {
    return (
      <main className={`overflow-hidden ${isFadingIn ? 'fade-in' : ''}`}>
        <Hero catalogRef={catalogRef} />

        <div className="mt-12 padding-x padding-y max-width" ref={catalogRef} id='catalog'>
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
              Car Catalog
            </h1>
            <p>Explore the Best cars</p>
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
                  <div className="loader mt-10">
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
            <div className="home__error-container">
              <h2 className='font-semibold text-xl tracking-wide'>
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
// }
