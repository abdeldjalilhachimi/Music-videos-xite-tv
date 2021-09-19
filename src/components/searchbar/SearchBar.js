import React from 'react'
import './searchbar.css'
const SearchBar = ({searchValue, setSearchValue}) => {
    return (
        <div className="searchbar">
            <div className="searchbar__title">
                <h1 data-testid="main-heading">SEARCH FOR YOUR FAVOURITE MUSIC VIDEOS <br/> AND ENJOY WATCHING  <span>everywhere. </span> </h1>
            </div>
            <form >
                <input type="search" data-testid="search-input"
                placeholder="Search on your favourite Music video..."
                 value={searchValue} 
                onChange={(e)=> setSearchValue( e.target.value)}  />
            </form>
        </div>
    )
}

export default SearchBar
