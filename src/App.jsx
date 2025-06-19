import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MoviesList from "./Components/MoviesList";
import MovieStream from "./Components/MovieStream";

const TMDB_API_KEY = "f2d346ac2f0e29fa03f1fd6020cc528c";

const App = () => {
  const BollywoodMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=hi`;
  const MarvelMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_keywords=180547&language=en-US`;
  const HorrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&language=en-US`;
  const ActionMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&language=en-US`;
  const ComedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&language=en-US`;
  const RomanceMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749&language=en-US`;
  const DocumentaryMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99&language=en-US`;
  const ScienceFictionMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878&language=en-US`;
  const ThrillerMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=53&language=en-US`;
  const AnimationMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16&language=en-US`;
  const AdventureMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=12&language=en-US`;
  const FamilyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10751&language=en-US`;
  const FantasyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=14&language=en-US`;
  const HistoryMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=36&language=en-US`;
  const MusicMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10402&language=en-US`;
  const MysteryMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648&language=en-US`;
  const NewsMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10763&language=en-US`;
  const RealityTVMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10764&language=en-US`;
  const SciFiMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878&language=en-US`;
  const SoapMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10766&language=en-US`;
  const TalkShowMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10767&language=en-US`;
  const WarMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10768&language=en-US`;
  const WesternMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=37&language=en-US`;
  const TVMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10765&language=en-US`;

  return (
    <Routes>
      {/* <Route path="/" element={<MoviesList title="Bollywood Movies" url={BollywoodMovies} />} /> */}
      {/* <Route path="/" element={<MoviesList title="Horror Movies" url={HorrorMovies} />} /> */}
      {/* <Route path="/" element={<MoviesList title="Action Movies" url={ActionMovies} />} /> */}
      <Route path="/" element={<MoviesList title="Marvel Movies" url={MarvelMovies} />} />
      {/* <Route path="/" element={<MoviesList title="Comedy Movies" url={ComedyMovies} />} /> */}
      <Route path="/movie/:movieId" element={<MovieStream />} />
    </Routes>
  )
}

export default App