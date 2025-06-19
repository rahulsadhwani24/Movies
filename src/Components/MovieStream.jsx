import React from 'react'
import { useParams } from 'react-router-dom';
// `https://vidsrc.icu/embed/movie/${movieId}`

const MovieStream = () => {
    const { movieId } = useParams();
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <iframe allowFullScreen={true} src={`https://vidsrc.icu/embed/movie/${movieId}`} width="100%" height="100%" />
        </div>
    )
}

export default MovieStream
