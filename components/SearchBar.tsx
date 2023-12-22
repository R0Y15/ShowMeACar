"use client";

import React, { useState } from 'react'
import { SearchByMaker } from '.';

const SearchBar = () => {
  const handleSearch = () => {
  };

  const [maker, setMaker] = useState('');

  return (
    <form className="searchbar"
      onSubmit={handleSearch}>
      <div className="searchbr__item">
        <SearchByMaker
        maker= {maker}
        setMaker = {setMaker} />

      </div>
    </form>
  )
}

export default SearchBar