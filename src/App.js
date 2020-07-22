import React, { useEffect, useState} from 'react';
import AnimeList from './animelist';
import AnimeSearch from './animeSearch';
import AnimeGenre from './animeGenre';
import './App.css';

function App() {
  const [query,setQuery] = useState('')
  const [genre,setGenre] = useState('')
  
  function handleSearch(e) {
    setQuery(e.target.value)
  }

  function handleGenre(genreNumber) {
    console.log(genreNumber)
    setGenre(genreNumber)
  }

  const {anime,loading} = AnimeSearch(query,genre)   

  return (
    <>
      <AnimeGenre className="anime-genre-picker" genre={genre} handleGenre={handleGenre} />
      <input className="anime-search" type="text" onChange={handleSearch}></input>
      {loading ? <div>loading...</div> : null}
      <AnimeList anime={anime} />
    </>
  );
}

export default App;
