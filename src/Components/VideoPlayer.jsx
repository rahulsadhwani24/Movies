import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

function VideoPlayer({ playlistUrl }) {
  const videoRef = useRef();
  const hlsRef = useRef();

  useEffect(() => {
    if (!playlistUrl || !videoRef.current) return;

    const hls = new Hls();
    hlsRef.current = hls;

    hls.attachMedia(videoRef.current);
    hls.loadSource(playlistUrl);

    return () => {
      hls.destroy();
    };
  }, [playlistUrl]);

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        controls
        autoPlay
        width="100%"
      />
    </div>
  );
}

export default VideoPlayer;
