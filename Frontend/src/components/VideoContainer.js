import useGetTrailerInfo from "../hooks/useGetTrailerInfo";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

function VideoContainer({ id, original_title, overview }) {
  const key = useSelector((store) => store.MovieReducer?.Maintrailer);
  useGetTrailerInfo(id);

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {key && (
        <iframe
          key={key}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* Title and controls overlayed on the video */}
      <div className="absolute z-20 left-6 md:left-12 bottom-24 md:bottom-28 max-w-xl md:max-w-2xl pr-6">
        <VideoTitle original_title={original_title} overview={overview} />
      </div>
    </div>
  );
}

export default VideoContainer;
