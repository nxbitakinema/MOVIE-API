import React, { useState, useEffect } from 'react'
import movieApi from '../../api/MovieApi'
import { APIKey } from '../../api/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../store/Reducer'
import MovieListing from '../MovieListing/MovieListing'

import './Home.scss'

function Home() {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  console.log(search)

  useEffect(() => {
    const fetchMovies = async () => {

      const searchKey = search ? search : "marvel";
      const res = await movieApi.get(`?apiKey=${APIKey}&s=${searchKey}&type=movie`)

      setTimeout(() => {
        dispatch(addMovie(res.data.Search))
      }, 500);
    }

    fetchMovies();

  }, [ search ] );

  return (
    <div>
      <h3 style={{ margin: "1rem 0" }}>movie</h3>
      <input
        type = "text" 
        placeholder = 'search here' 
        value = {search} 
        onChange = { (e) => setSearch(e.target.value) }
        />
      <MovieListing />
    </div>
  )
}

export default Home