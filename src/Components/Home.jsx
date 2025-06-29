import React, { useState, useEffect, useContext } from 'react'
import { MovieDataContext } from "../Context/MovieContext";
import HomeMovieList from "./HomeMovieList";
import { useNavigate } from "react-router-dom";
const TMDB_API_KEY = "f2d346ac2f0e29fa03f1fd6020cc528c";

const Home = () => {
  // Movie data fetching
  const { movieData, updateMovieData } = useContext(MovieDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    movieListConfigs.forEach(({ title, url, langType }) => {
      if (langType === "multi") {
        ['hi', 'en'].forEach(async (lang) => {
          if (!movieData[title]?.[lang]) {
            const res = await fetch(`${url}&with_original_language=${lang}`);
            const data = await res.json();
            updateMovieData(title, lang, { movies: data.results, page: 1, url });
          }
        });
      } else {
        if (!movieData[title]?.[langType]) {
          fetch(`${url}&with_original_language=${langType}`)
            .then((res) => res.json())
            .then((data) =>
              updateMovieData(title, langType, { movies: data.results, page: 1, url })
            );
        }
      }
    });
  }, []);

  const movieListConfigs = [
    { title: "Trending Movies", url: `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}&language=en-US`, langType: "multi" },
    { title: "Bollywood Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=hi`, langType: "hi" },
    { title: "Marvel Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_keywords=180547&language=en-US&sort_by=release_date.asc`, langType: "multi" },
    { title: "Hindi Comedy Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&with_original_language=hi`, langType: "hi" },
    { title: "Horror Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&language=en-US`, langType: "multi" },
    { title: "Action Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&language=en-US`, langType: "multi" },
    { title: "Romance Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749&language=en-US`, langType: "multi" },
    { title: "Sci-Fi Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878&language=en-US`, langType: "multi" },
  ];

  const genres = [
    { title: "Action", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&language=en-US`, langType: "multi" },
    { title: "Adventure", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=12&language=en-US`, langType: "multi" },
    { title: "Animation", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16&language=en-US`, langType: "multi" },
    { title: "Biography", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=36&language=en-US`, langType: "multi" },
    { title: "Comedy", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&language=en-US`, langType: "multi" },
    { title: "Crime", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=80&language=en-US`, langType: "multi" },
    { title: "Drama", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=18&language=en-US`, langType: "multi" },
    { title: "Documentary", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99&language=en-US`, langType: "multi" },
    { title: "Family", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10751&language=en-US`, langType: "multi" },
    { title: "Fantasy", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=14&language=en-US`, langType: "multi" },
    { title: "History", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=36&language=en-US`, langType: "multi" },
    { title: "Horror", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&language=en-US`, langType: "multi" },
    { title: "Mystery", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648&language=en-US`, langType: "multi" },
    { title: "Romance", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749&language=en-US`, langType: "multi" },
    { title: "Sci-Fi", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878&language=en-US`, langType: "multi" },
    { title: "Thriller", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=53&language=en-US`, langType: "multi" },
    { title: "War", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10752&language=en-US`, langType: "multi" },
    { title: "Western", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=37&language=en-US`, langType: "multi" },
  ];

  const languages = [
    { title: "English", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc`, langType: "en", showTitle: "All Hollywood Movies" },
    { title: "Hindi", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=hi&sort_by=popularity.desc`, langType: "hi", showTitle: "All Bollywood Movies" },
    { title: "Marathi", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=mr&sort_by=popularity.desc`, langType: "mr", showTitle: "All Marathi Movies" },
    { title: "Kannada", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=kn&sort_by=popularity.desc`, langType: "kn", showTitle: "All Kannada Movies" },
    { title: "Telugu", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=te&sort_by=popularity.desc`, langType: "te", showTitle: "All Telugu Movies" },
    { title: "Tamil", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ta&sort_by=popularity.desc`, langType: "ta", showTitle: "All Tamil Movies" },
    { title: "Malayalam", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ml&sort_by=popularity.desc`, langType: "ml", showTitle: "All Malayalam Movies" },
    { title: "Bengali", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=bn&sort_by=popularity.desc`, langType: "bn", showTitle: "All Bengali Movies" },
    { title: "Punjabi", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=pa&sort_by=popularity.desc`, langType: "pa", showTitle: "All Punjabi Movies" },
    { title: "Gujarati", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=gu&sort_by=popularity.desc`, langType: "gu", showTitle: "All Gujarati Movies" },
    { title: "Nepali", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ne&sort_by=popularity.desc`, langType: "ne", showTitle: "All Nepali Movies" },
    { title: "Japanese", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ja&sort_by=popularity.desc`, langType: "ja", showTitle: "All Japanese Movies" },
    { title: "Korean", url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ko&sort_by=popularity.desc`, langType: "ko", showTitle: "All Korean Movies" }
  ]

  return (
    <>
      {movieListConfigs.map(({ title, url, langType }) => (
        <HomeMovieList key={title} title={title} url={url} langType={langType} />
      ))}

      <div className="genre-list-container">
        <h1 className="genre-list-header">Popular Genres</h1>
        <div className="genre-list-wrapper">
          {genres.map(({ title, url, langType }) => (
            <div key={title} className="genre-list-item" onClick={() => navigate('/movies', { state: { title: title, url, lang: langType } })}>
              <h3 className="genre-list-item-title">{title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="language-list-container">
        <h1 className="language-list-header">Watch in your Language</h1>
        <div className="language-list-wrapper">
          {languages.map(({ title, url, langType, showTitle }) => (
            <div key={title} className="language-list-item" onClick={() => navigate('/movies', { state: { title: showTitle, url, lang: langType } })}>
              <h3 className="language-list-item-title">{title}</h3>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Home