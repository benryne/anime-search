import React, { useEffect, useState} from 'react';
import AnimeList from './animelist';
import AnimeSearch from './animeSearch';

function App() {
  const [query,setQuery] = useState('')
  
  function handleSearch(e) {
    setQuery(e.target.value)
  }

  const anime = AnimeSearch(query)   

  return (
    <>
      <input type="text" onChange={handleSearch}></input>
      <AnimeList anime={anime} />
    </>
  );
}

export default App;
