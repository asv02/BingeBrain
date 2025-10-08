import { useEffect, useRef, useState } from "react";
import { GET_TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/appSlice";

function useGetTrailerInfo(id) {
  const dispatch = useDispatch();
  const fetchMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      GET_TMDB_API_OPTIONS
    );
    if (!data.ok) {
      console.log("Error in videoContainer");
      return;
    }
    const json = await data.json();
    console.log(json.results);
    const trailers = json.results.filter((res) => {
      return res.type === "Trailer";
    });
    const trailer = trailers ? trailers[0] : json.results[0];
    console.log("trailerInfo->", trailer);
    dispatch(addTrailer(trailer.key));
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);
}

export default useGetTrailerInfo;
