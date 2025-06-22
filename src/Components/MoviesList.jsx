import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ url, title }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const fetchMovies = async (pageNum = 1) => {
        try {
            const URL = `${url}&page=${pageNum}`;
            const response = await fetch(URL);
            const data = await response.json();
            setMovies((prev) => [...prev, ...data.results]);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        fetchMovies(page);
    }, [page]);

    return (
        <>
            <h1 className="page-title">{title}</h1>
            <div className="movies-container">
                {movies.map((movie, index) => (
                    <MovieCard key={index} title={movie.title} imgBackdrop={movie.backdrop_path} imgPath={movie.poster_path} year={movie.release_date} movieId={movie.id} language={movie.original_language} overview={movie.overview} />
                ))}
            </div>
            <div className="load-more-button-container">
                <button className="load-more-button"
                    onClick={() => setPage((prev) => prev + 1)}> Load More... </button>
            </div>
        </>
    );
};

export default MoviesList;
