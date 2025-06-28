import React, { useState, useEffect, useContext } from 'react'
import { MovieDataContext } from "../Context/MovieContext";
import HomeMovieList from "./HomeMovieList";
import { useNavigate } from "react-router-dom";
const TMDB_API_KEY = "f2d346ac2f0e29fa03f1fd6020cc528c";

const Home = () => {
  // Movie data fetching
  const { movieData, updateMovieData } = useContext(MovieDataContext);
  const navigate = useNavigate();

  // Filters for Home Page
  const MarvelMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_keywords=180547&language=en-US&sort_by=release_date.asc`;
  const HindiComedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&with_original_language=hi&sort_by=popularity.desc`;
  const TrendingMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc`;

  // Genres
  const HorrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&language=en-US`;
  const ActionMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&language=en-US`;
  const ComedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&language=en-US&sort_by=popularity.desc`;
  const RomanceMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749&language=en-US&sort_by=trending_desc.desc`;
  const SciFiMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878&language=en-US&sort_by=popularity.desc`;
  const AdventureMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=12&language=en-US&sort_by=popularity.desc`;
  const AnimationMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16&language=en-US&sort_by=popularity.desc`;
  const BiographyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=36&language=en-US&sort_by=popularity.desc`;
  const CrimeMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=80&language=en-US&sort_by=popularity.desc`;
  const DramaMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=18&language=en-US&sort_by=popularity.desc`;
  const DocumentaryMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99&language=en-US&sort_by=popularity.desc`;
  const FamilyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10751&language=en-US&sort_by=popularity.desc`;
  const FantasyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=14&language=en-US&sort_by=popularity.desc`;
  const HistoryMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=36&language=en-US&sort_by=popularity.desc`;
  const MysteryMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648&language=en-US&sort_by=popularity.desc`;
  const ThrillerMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=53&language=en-US&sort_by=popularity.desc`;
  const WarMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10752&language=en-US&sort_by=popularity.desc`;
  const WesternMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=37&language=en-US&sort_by=popularity.desc`;

  // Languages
  const EnglishMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=en&sort_by=popularity.desc`;
  const BollywoodMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=hi&sort_by=trending_desc.desc`;
  const MarathiMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=mr&sort_by=popularity.desc`;
  const KannadaMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=kn&sort_by=popularity.desc`;
  const TeluguMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=te&sort_by=popularity.desc`;
  const TamilMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ta&sort_by=popularity.desc`;
  const MalayalamMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ml&sort_by=popularity.desc`;
  const BengaliMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=bn&sort_by=popularity.desc`;
  const PunjabiMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=pa&sort_by=popularity.desc`;
  const GujaratiMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=gu&sort_by=popularity.desc`;
  const NepaliMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ne&sort_by=popularity.desc`;
  const JapaneseMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ja&sort_by=popularity.desc`;
  const KoreanMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=ko&sort_by=popularity.desc`;

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
    { title: "Trending Movies", url: TrendingMovies, langType: "multi" },
    { title: "Bollywood Movies", url: BollywoodMovies, langType: "hi" },
    { title: "Marvel Movies", url: MarvelMovies, langType: "multi" },
    { title: "Hindi Comedy Movies", url: HindiComedyMovies, langType: "hi" },
    { title: "Horror Movies", url: HorrorMovies, langType: "multi" },
    { title: "Action Movies", url: ActionMovies, langType: "multi" },
    { title: "Comedy Movies", url: ComedyMovies, langType: "multi" },
    { title: "Romance Movies", url: RomanceMovies, langType: "multi" },
    { title: "Sci-Fi Movies", url: SciFiMovies, langType: "multi" },
  ];

  const genres = [
    { title: "Action", url: ActionMovies, langType: "multi" },
    { title: "Adventure", url: AdventureMovies, langType: "multi" },
    { title: "Animation", url: AnimationMovies, langType: "multi" },
    { title: "Biography", url: BiographyMovies, langType: "multi" },
    { title: "Comedy", url: ComedyMovies, langType: "multi" },
    { title: "Crime", url: CrimeMovies, langType: "multi" },
    { title: "Drama", url: DramaMovies, langType: "multi" },
    { title: "Documentary", url: DocumentaryMovies, langType: "multi" },
    { title: "Family", url: FamilyMovies, langType: "multi" },
    { title: "Fantasy", url: FantasyMovies, langType: "multi" },
    { title: "History", url: HistoryMovies, langType: "multi" },
    { title: "Horror", url: HorrorMovies, langType: "multi" },
    { title: "Mystery", url: MysteryMovies, langType: "multi" },
    { title: "Romance", url: RomanceMovies, langType: "multi" },
    { title: "Sci-Fi", url: SciFiMovies, langType: "multi" },
    { title: "Thriller", url: ThrillerMovies, langType: "multi" },
    { title: "War", url: WarMovies, langType: "multi" },
    { title: "Western", url: WesternMovies, langType: "multi" },
  ];

  const languages = [
    { title: "English", url: EnglishMovies, langType: "en", showTitle: "All Hollywood Movies" },
    { title: "Hindi", url: BollywoodMovies, langType: "hi", showTitle: "All Bollywood Movies" },
    { title: "Marathi", url: MarathiMovies, langType: "mr", showTitle: "All Marathi Movies" },
    { title: "Kannada", url: KannadaMovies, langType: "kn", showTitle: "All Kannada Movies" },
    { title: "Telugu", url: TeluguMovies, langType: "te", showTitle: "All Telugu Movies" },
    { title: "Tamil", url: TamilMovies, langType: "ta", showTitle: "All Tamil Movies" },
    { title: "Malayalam", url: MalayalamMovies, langType: "ml", showTitle: "All Malayalam Movies" },
    { title: "Bengali", url: BengaliMovies, langType: "bn", showTitle: "All Bengali Movies" },
    { title: "Punjabi", url: PunjabiMovies, langType: "pa", showTitle: "All Punjabi Movies" },
    { title: "Gujarati", url: GujaratiMovies, langType: "gu", showTitle: "All Gujarati Movies" },
    { title: "Nepali", url: NepaliMovies, langType: "ne", showTitle: "All Nepali Movies" },
    { title: "Japanese", url: JapaneseMovies, langType: "ja", showTitle: "All Japanese Movies" },
    { title: "Korean", url: KoreanMovies, langType: "ko", showTitle: "All Korean Movies" }
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