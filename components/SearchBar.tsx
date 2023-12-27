"use client";

import React, { useState } from 'react'
import { SearchByMaker } from '.';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={'/magnifying-glass.svg'}
      alt='magnifying glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

const SearchBar = ({setMaker, setModel}) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (SearchMaker === '' && SearchModel === '') {
      alert('Please select a maker');
      return;
    }

    setModel(SearchModel)
    setMaker(SearchMaker)
  };

  const [SearchMaker, setSearchMaker] = useState('');
  const [SearchModel, setSearchModel] = useState('');
  const router = useRouter();

  return (
    <form className="searchbar"
      onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchByMaker
          selected={SearchMaker}
          setSelected={setSearchMaker} />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='model'
        />
        <input
          type="text"
          name='model'
          value={SearchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar