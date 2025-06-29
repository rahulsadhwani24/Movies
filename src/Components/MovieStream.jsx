import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { fetchStreamInfo } from '../api';
import VideoPlayer from './VideoPlayer';

const MovieStream = () => {

    // Redirect to Home
    const navigate = useNavigate();
    useEffect(() => {
        const handlePopState = () => {
            navigate("/");
        };
        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);


    // if (!movieId) movieId = "76338"; //Thor - The Dark World
    // if (!movieId) movieId = "574475"; //Final Destination 5

    //const vidPlay = `https://vidplay.to/movie/${movieId}` //No Ads but some links (Bollywood) are not working
    //const vidLink = `https://vidlink.pro/movie/${movieId}` //Limited ads
    //const smashStream = `https://player.smashy.stream/movie/${movieId}` //Too many ads + Download Option
    // const vidEasy = `https://player.videasy.net/movie/${movieId}` //Not working properly
    // const embedSu = `https://embed.su/embed/movie/${movieId}`
    // const vidSrc = `https://vidsrc.in/embed/movie/${movieId}`; //recommended

    let { movieId } = useParams();

    useEffect(() => {
        setStream("stream");
    }, [movieId]);

    const vidFast = `https://vidfast.pro/movie/${movieId}?autoplay=true` //Too many ads
    const embed = `https://www.2embed.cc/embed/${movieId}?autoplay=true` //recommended
    const autoEmbed = `https://player.autoembed.cc/embed/movie/${movieId}?autoplay=true?server=5` //no ads

    const [stream, setStream] = useState("stream");
    const [streamData, setStreamData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchStreamInfo(movieId, "movie");
                setStreamData(data);
            } catch (err) { }
        };
        fetchData();
    }, [movieId]);

    return (
        <>
            <div className='video-container'>
                {stream === "stream" ? (
                    streamData ? <VideoPlayer playlistUrl={streamData.playlist} audioTracks={streamData.audioTracks} />
                        : <div className='video-stream-text-center'>Video cannot be loaded with the current server. Please change server</div>
                ) : (
                    <iframe allowFullScreen={true} fullScreen={true} autoPlay={true} src={stream} width="100%" height="100%" referrerPolicy="origin" />
                )}
            </div>
            <div className='stream-options'>
                <button disabled={stream === "stream"} onClick={() => setStream("stream")}>Play with Stream</button>
                <button disabled={stream === embed} onClick={() => setStream(embed)}>Play with Server 2</button>
                <button disabled={stream === autoEmbed} onClick={() => setStream(autoEmbed)}>Play with Server 3</button>
                <button disabled={stream === vidFast} onClick={() => setStream(vidFast)}>Play with Server 4</button>
            </div>
        </>
    )
}

export default MovieStream
