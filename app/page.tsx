import Image from 'next/image';
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { getCar } from '@/utils';

export default async function Home() {
  const allCars = await getCar();

  const allCarsResult = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id='catalog'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalog
          </h1>
          <p>Explore the Best cars</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>


        {!allCarsResult ? (
          <section>
            <div className='home__error-container'>
              <div className="home__cars-wrapper">
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
            </div>
          </section>
        ) : (
          <div>
            <h2>
              OOPS! No Results
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