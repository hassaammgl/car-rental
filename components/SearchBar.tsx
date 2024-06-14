"use client"

import React from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
  const handleSearch = () =>{}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 

        />
      </div>
     // 2:14:00 
    </form>
  )
}

export default SearchBar