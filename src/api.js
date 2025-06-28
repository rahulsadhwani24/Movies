import axios from "axios";

export async function fetchStreamInfo(tmdbId, type, season, episode) {
  const base = import.meta.env.VITE_API_URL || "https://getvideo-coral.vercel.app";
  const query = new URLSearchParams({ id: tmdbId, type });
  if (season) query.append("season", season.toString());
  if (episode) query.append("episode", episode.toString());

  const res = await axios.get(`${base}/api/index?${query.toString()}`);
  const streamUrl = res.data?.[0]?.stream;
  if (!streamUrl) throw new Error("No stream found");

  return {
    playlist: `${base}/api/proxy?url=${encodeURIComponent(streamUrl)}`, // ✅ NOT the playlist content!
    audioTracks: []
  };
}
