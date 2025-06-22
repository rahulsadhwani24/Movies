import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieStream from "./MovieStream";

const MovieCard = ({ title, imgBackdrop, imgPath, year, movieId, language, overview, vote_average, upcoming }) => {
    const API_KEY = "f2d346ac2f0e29fa03f1fd6020cc528c"
    const [runtime, setRuntime] = useState(0);

    const fetchRuntime = async (movieId) => {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );
        const data = await res.json();
        // Convert runtime in minutes to hours and minutes
        if (data.runtime !== undefined && data.runtime !== null) {
            const hours = Math.floor(data.runtime / 60);
            const minutes = data.runtime % 60;
            data.runtime = `${hours}h ${minutes}m`;
            setRuntime(data.runtime);
        }
    };

    useEffect(() => {
        fetchRuntime(movieId);
    }, [movieId]);

    if (!imgBackdrop) {
        imgBackdrop = imgPath;
    }

    return (
        <Link to={`/movie/${movieId}`}>
            {upcoming ? <div className="movie-container">
                <div className="movie-image-container">
                        <img className="movie-image" src={`https://image.tmdb.org/t/p/original/${imgPath}`} alt="" />
                    </div>
                    <h2 className="movie-title">{title}</h2>
                    <div className="movie-content" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${imgBackdrop})` }}>
                        <div className="movie-content-overlay">
                            <div className="movie-info">
                                <h3 className="year">{year}</h3>
                            </div>
                            <h2 className="title">{title}</h2>
                            <div className="movie-overview">
                                <p>{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="movie-container">
                    <div className="movie-image-container">
                        <img className="movie-image" src={`https://image.tmdb.org/t/p/original/${imgPath}`} alt="" />
                    </div>
                    <h2 className="movie-title">{title}</h2>
                    <div className="movie-content" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${imgBackdrop})` }}>
                        <div className="movie-content-overlay">
                            <div className="movie-info">
                                <h3 className="year">{(year) ? year.split("-")[0] : "N/A"}</h3> <span className="separator">•</span>
                                <h3 className="runtime">{runtime}</h3> <span className="separator">•</span>
                                <h3 className="rating">{vote_average}
                                    <svg className="star-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" />
                                    </svg>
                                </h3> <span className="separator">•</span>
                                <h3 className="language">{(language == "hi") ? "Hindi" : (language == "en") ? "English" :
                                    (language == "mr") ? "Marathi" : (language == "ta") ? "Tamil" : (language == "te") ? "Telugu" :
                                        (language == "kn") ? "Kannada" : (language == "ml") ? "Malayalam" : (language == "pa") ? "Punjabi" :
                                            (language == "ko") ? "Korean" : (language == "ja") ? "Japanese" : (language == "zh") ? "Chinese" :
                                                (language == "no") ? "Norwegian" : (language == "fr") ? "French" : (language == "de") ? "German" :
                                                    (language == "es") ? "Spanish" : (language == "it") ? "Italian" : (language == "pt") ? "Portuguese" :
                                                        (language == "ru") ? "Russian" : (language == "sv") ? "Swedish" : (language == "tr") ? "Turkish" :
                                                            (language == "vi") ? "Vietnamese" : (language == "ar") ? "Arabic" : (language == "nl") ? "Dutch" :
                                                                (language == "id") ? "Indonesian" : (language == "th") ? "Thai" : (language == "ms") ? "Malay" :
                                                                    (language == "sr") ? "Serbian" : (language == "hi") ? "Hindi" : (language == "en") ? "English" : language}</h3>
                            </div>
                            <h2 className="title">{title}</h2>
                            <div className="movie-overview">
                                <p>{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Link>
    )
}

export default MovieCard;