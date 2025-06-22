import React from 'react'
import { useParams } from 'react-router-dom';

const MovieStream = () => {

    const { movieId } = useParams();

    const vidPlay = `https://vidplay.to/movie/${movieId}` //No Ads but some links (Bollywood) are not working
    const vidFast = `https://vidfast.pro/movie/${movieId}?autoplay=true` //Too many ads
    const vidLink = `https://vidlink.pro/movie/${movieId}` //Too many ads
    const vidEasy = `https://player.videasy.net/movie/${movieId}` //Not working properly
    const smashStream = `https://player.smashy.stream/movie/${movieId}?autoplay=true` //Too many ads + Download Option
    const vidSrc = `https://vidsrc.in/embed/movie/${movieId}`; //Good option
    const embed = `https://www.2embed.cc/embed/${movieId}` //recommended

    return (
        <div className='video-container'>
            <iframe allowFullScreen={true} fullScreen={true} autoPlay={true} src={embed} width="100%" height="100%" />
        </div>
    )
}

export default MovieStream
