import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MovieStream from "./Components/MovieStream";
import { MovieDataProvider } from "./Context/MovieContext";
import MoviesList from "./Components/MoviesList";
import Header from "./Components/Header";
import { useState, useEffect } from "react";

const TMDB_API_KEY = "f2d346ac2f0e29fa03f1fd6020cc528c";

const App = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      setShowSuggestions(false);
      setSearchPerformed(false);
      return;
    }

    const fetchSuggestions = async () => {
      setLoadingSuggestions(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US`
      );
      const data = await res.json();
      setSuggestions(data.results || []);
      setSearchPerformed(true);
    };

    const delay = setTimeout(() => {
      fetchSuggestions();
      setLoadingSuggestions(false);
    }, 700);

    return () => clearTimeout(delay);
  }, [query, searchPerformed]);

  return (
    <MovieDataProvider>
      <Header
        query={query}
        setQuery={setQuery}
        suggestions={showSuggestions ? suggestions : []}
        setShowSuggestions={setShowSuggestions}
        showSuggestions={showSuggestions}
        loadingSuggestions={loadingSuggestions}
        searchPerformed={searchPerformed}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieStream />} />
        <Route path="/movies" element={<MoviesList />} />
      </Routes>
    </MovieDataProvider>
  );
};

export default App;
