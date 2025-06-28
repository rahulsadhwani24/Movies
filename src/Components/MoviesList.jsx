import { useContext, useEffect, useState } from 'react';
import { MovieDataContext } from '../Context/MovieContext';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';

const MoviesList = () => {
  const location = useLocation();
  const { title, url: urlFromLocation, lang = "en" } = location.state || {};
  const { movieData, updateMovieData } = useContext(MovieDataContext);

  const contextMovieList = movieData?.[title]?.[lang];
  const [movies, setMovies] = useState(contextMovieList?.movies || []);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(contextMovieList?.page || 1);
  const url = contextMovieList?.url || urlFromLocation;

  const shouldFilterByLang = lang === "multi"; // only filter for genre-based sections

  const filterMovies = (results) => {
    if (shouldFilterByLang) {
      const allowedLanguages = ["en", "hi"];
      return results.filter(movie =>
        allowedLanguages.includes(movie.original_language)
      );
    }
    return results;
  };

  useEffect(() => {
    const fetchInitialMovies = async () => {
      if (!contextMovieList && url) {
        setLoading(true);
        const res = await fetch(`${url}&page=1`);
        const data = await res.json();
        const filteredResults = filterMovies(data.results);
        setMovies(filteredResults);
        setPage(1);
        updateMovieData(title, lang, {
          movies: filteredResults,
          page: 1,
          url,
        });
        setLoading(false);
      }
    };
    fetchInitialMovies();
  }, [contextMovieList, title, lang, url, updateMovieData]);

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    const res = await fetch(`${url}&page=${nextPage}`);
    const data = await res.json();
    const filteredResults = filterMovies(data.results);
    const updatedMovies = [...movies, ...filteredResults];
    setMovies(updatedMovies);
    setPage(nextPage);
    updateMovieData(title, lang, {
      movies: updatedMovies,
      page: nextPage,
      url,
    });
    setLoading(false);
  };

  return (
    <>
      <h1 className="page-title">{title}</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            imgBackdrop={movie.backdrop_path}
            imgPath={movie.poster_path}
            year={movie.release_date}
            movieId={movie.id}
            language={movie.original_language}
            overview={movie.overview}
            vote_average={movie.vote_average}
          />
        ))}
      </div>

      {movies.length > 0 && (
        <div className="load-more-button-container">
          <button className="load-more-button" onClick={loadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More..." }
          </button>
        </div>
      )}
    </>
  );
};

export default MoviesList;
