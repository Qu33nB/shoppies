import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Results from './Results';
import Nominations from './Nominations';

function App() {

  // const API_KEY = 'd797e60'
  // const API_URL = `http://www.omdbapi.com/?s=${}&apikey=${API_KEY}`;

  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   loadMovies();
  // }, []);

  // const loadMovies = async () => {
  //   const res = await fetch(`http://www.omdbapi.com/?s=${}&apikey=${API_KEY}`)
  //   const movies = await res.json();
  //   setMovies(movies.hits);
  //   console.log(movies.hits)
  // }

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar />
      {/* {
        movies.map((m, id) => ( */}
      <div id="container">
        <Results />
        <Nominations />
      </div>
        ))
      {/* } */}
    </div>
  );
}

export default App;
