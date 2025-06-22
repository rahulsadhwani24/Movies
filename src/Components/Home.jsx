import React, { useState, useEffect } from 'react'
import Header from "./Header";
import MoviesList from "./MoviesList";
import HomeMovieList from "./HomeMovieList";
const TMDB_API_KEY = "f2d346ac2f0e29fa03f1fd6020cc528c";

const Home = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const fetchSuggestions = async () => {
      // if (query.length < 2) return setSuggestions([]);
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
  const MarvelMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_keywords=180547&language=en-US&sort_by=release_date.asc`;
  const HorrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&language=en-US`;
  const ActionMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&language=en-US`;
  const ComedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&language=en-US&sort_by=popularity.desc`;
  const HindiComedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&with_original_language=hi&sort_by=popularity.desc`;
  const TrendingMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc`;
  const RomanceMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749&language=en-US&sort_by=trending_desc.desc`;
  const SciFiMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878&language=en-US&sort_by=popularity.desc`;
  const UpcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&region=IN&sort_by=release_date.desc`;
  
  return (
    <>
      <Header query={query} setQuery={setQuery} suggestions={suggestions} />
      <HomeMovieList url={TrendingMovies} title="Trending Movies" />
      <HomeMovieList url={BollywoodMovies} title="Bollywood Movies" />
      <HomeMovieList url={MarvelMovies} title="Marvel Movies" />
      <HomeMovieList url={HindiComedyMovies} title="Hindi Comedy Movies" />
      <HomeMovieList url={UpcomingMovies} title="Upcoming Movies" />
      <HomeMovieList url={HorrorMovies} title="Horror Movies" />
      <HomeMovieList url={ActionMovies} title="Action Movies" />
      <HomeMovieList url={ComedyMovies} title="Comedy Movies" />
      <HomeMovieList url={RomanceMovies} title="Romance Movies" />
      <HomeMovieList url={SciFiMovies} title="Sci-Fi Movies" />
    </>
  )
}

export default Home