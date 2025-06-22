import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import MoviesList from './MoviesList';

const HomeMovieList = ({ url, title }) => {
    const [movies, setMovies] = useState([]);
    const [upcoming, setUpcoming] = useState(false);
    const langs = ["en", "hi"];
    useEffect(() => {
        const fetchMovies = async () => {
            if (title == "Bollywood Movies" || title == "Hindi Comedy Movies") {
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results || []);
            }
            else {
                for (const lang of langs) {
                    const res = await fetch(url + `&with_original_language=${lang}`);
                    const data = await res.json();
                    setMovies((prev) => [...prev, ...data.results]);
                }
            }
        };
        fetchMovies();
    }, [url]);

    useEffect(() => {
        (title == "Upcoming Movies") && setUpcoming(true);
    }, [title]);

    const setTitle = (title === "Bollywood Movies") ? "Most Watched Movies in India" :
        (title === "Marvel Movies") ? "For Marvel Fans" :
            (title === "Romance Movies") ? "Popular in Romance" :
                (title === "Horror Movies") ? "Horror Movies" :
                    (title === "Action Movies") ? "Action Movies" :
                        (title === "Comedy Movies") ? "Comedy Movies" :
                            (title === "Hindi Comedy Movies") ? "Hindi Comedy Movies" :
                                (title === "Reality Movies") ? "Popular Reality" :
                                    (title === "Sci-Fi Movies") ? "Sci-Fi Movies" :
                                        (title === "Upcoming Movies") ? "Upcoming Movies" :
                                            (title === "Trending Movies") ? "Trending Movies of the Day" : "";

    return (
        <div className='home-movie-list'>
            <h1>{setTitle || "Movies"}</h1>
            <h4 onClick={() => <MoviesList url={url} title={title} />}>View All
                <svg width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M1.67473e-06 37.3219V41.5259C1.67473e-06 41.8903 0.485296 42.0916 0.813026 41.8686L29.2247 22.719C29.4661 22.5571 29.6614 22.3496 29.7958 22.1126C29.9302 21.8755 30 21.6151 30 21.3512C30 21.0873 29.9302 20.8269 29.7958 20.5899C29.6614 20.3528 29.4661 20.1454 29.2247 19.9834L0.813026 0.833872C0.478993 0.610887 1.67473e-06 0.812117 1.67473e-06 1.17651V5.3806C1.67473e-06 5.64709 0.144958 5.90271 0.384453 6.06587L23.0735 21.3485L0.384453 36.6366C0.144958 36.7997 1.67473e-06 37.0554 1.67473e-06 37.3219V37.3219Z" fill="white" />
                    </g>
                </svg>
            </h4>
            <div className='home-movie-list-container'>
                {movies.length > 1 && movies.slice(0, 12).map((movie) => (
                    <MovieCard key={movie.id} title={movie.title} 
                        imgBackdrop={movie.backdrop_path} imgPath={movie.poster_path}
                        year={movie.release_date} language={movie.original_language}
                        overview={movie.overview} vote_average={movie.vote_average} movieId={movie.id} upcoming={upcoming} />
                ))}
            </div>
        </div>
    )
}

export default HomeMovieList