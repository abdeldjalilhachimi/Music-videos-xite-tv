import React from "react";
import { useState } from "react";
import ListsOfVideos from "./components/listOfVideos/ListsOfVideos";
import SearchBar from "./components/searchbar/SearchBar";
import FilterByGenre from "./components/filtering/FilterByGenre";
import FilterByYear from "./components/filtering/FilterByYear";
import NotFound from "./components/data-not-found/NotFound";
import "./App.css";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectYear, setSelectYear] = useState();
  const [loadingNumber, setLoadingNumber] = useState(10);
  const [checkVideos, setcheckVideos] = useState(null);
  const handlLoadingVideos = () => {
    setLoadingNumber((pervStat) => pervStat + 10);
  };
  return (
    <div className="app">
      <section className="app__content">
        <section className="app__searchbar">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </section>
        <section className="app__settings">
          <FilterByGenre setSelectedGenres={setSelectedGenres} />
          <FilterByYear setSelectYear={setSelectYear} />
        </section>

        <section className="gallery">
          <ListsOfVideos
            searchkeyword={searchValue}
            loadingNumber={loadingNumber}
            selectedGenres={selectedGenres}
            setcheckVideos={setcheckVideos}
            selectYear={selectYear}
          />
        </section>
        {checkVideos ? (
          <button onClick={handlLoadingVideos} id="app__loading" data-testid="loade-more">
            {" "}
            load more
          </button>
        ) : (
          <NotFound />
        )}
      </section>
    </div>
  );
};

export default App;
