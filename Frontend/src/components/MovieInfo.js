import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieInfo } from "../utils/appSlice";
import useGetTrailerInfo from "../hooks/useGetTrailerInfo";

function MovieInfo() {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieInfo = localStorage.getItem("MovieInfo");
    const MovieInfo = JSON.parse(movieInfo);
    dispatch(addMovieInfo(MovieInfo));
  }, []);
  const movie = useSelector((store) => store?.MovieReducer?.MovieInfo);
  const key = useSelector((store) => store.MovieReducer?.Maintrailer);
  useGetTrailerInfo(movie?.id);

  console.log("key for card:::", key);

  return (
    <div>
      <div>
        {key && (
          <iframe
            key={key}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&modestbranding=1&rel=0&playlist=${key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
      <div>
        <span>
          {movie?.title}({movie?.original_title})
        </span>
        <span>Original Language:{movie?.original_language}</span>
        <span>{movie?.overview}</span>
        <span>Poplularity:{movie?.popularity}</span>
        <span>Release Date{movie?.release_date}</span>
        <span>Vote Average{movie?.vote_average}</span>
        <span>Vote Count{movie?.vote_count}</span>
      </div>
    </div>
  );
}

export default MovieInfo;
