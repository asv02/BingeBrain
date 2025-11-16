import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieInfo } from "../utils/appSlice";
import { useNavigate } from "react-router";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (movie) => {
    localStorage.setItem("MovieInfo", JSON.stringify(movie));
    navigate("/movieInfo");
  };

  return (
    <div
      onClick={() => handleClick(movie)}
      className="flex-shrink-0 snap-start w-28 md:w-36 lg:w-44"
    >
      <img
        className="w-full h-auto rounded-md shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform duration-200 ease-out"
        src={CDN_URL + movie?.poster_path}
        alt="poster"
        loading="lazy"
      />
    </div>
  );
}

export default MovieCard;
