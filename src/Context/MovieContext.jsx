// context/MovieDataContext.js
import { createContext, useState } from 'react';

export const MovieDataContext = createContext();

export const MovieDataProvider = ({ children }) => {
  const [movieData, setMovieData] = useState({}); 
  // structure: { [title]: { [lang]: { movies: [...], page: 1, url: "" } } }

  const updateMovieData = (title, lang, newData) => {
    setMovieData((prev) => ({
      ...prev,
      [title]: {
        ...(prev[title] || {}),
        [lang]: {
          ...(prev[title]?.[lang] || {}),
          ...newData,
        },
      },
    }));
  };

  return (
    <MovieDataContext.Provider value={{ movieData, updateMovieData }}>
      {children}
    </MovieDataContext.Provider>
  );
};
