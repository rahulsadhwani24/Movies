import React, { useState, useEffect } from 'react'
import Header from "./Header";
import MoviesList from "./MoviesList";
const TMDB_API_KEY = "f2d346ac2f0e29fa03f1fd6020cc528c";

const Home = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
      const fetchSuggestions = async () => {
        if (query.length < 2) return setSuggestions([]);
  
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US&sort_by=popularity.desc`
        );
        const data = await res.json();
        setSuggestions(data.results || []);
      };
  
      const delay = setTimeout(() => {
        fetchSuggestions();
      }, 700);
  
      return () => clearTimeout(delay);
    }, [query]);

    const BollywoodMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=hi&sort_by=popularity.desc`;
    
  return (
    <>
        <Header query={query} setQuery={setQuery} suggestions={suggestions} />
    </>
  )
}

export default Home