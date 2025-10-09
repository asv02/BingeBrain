import { useEffect } from "react";
import { GET_TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingPlayingMovie, removeUpComingPlayingMovie } from "../utils/appSlice";

const fetchUpComingPlaying = async () => {
  const UpComingPlaying = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?page=2",
    GET_TMDB_API_OPTIONS
  );
  if (!UpComingPlaying.ok) {
    console.log("Error in fetching movies");
    return;
  }
  const data = await UpComingPlaying.json();
  console.log('populaarPlaying->',data);
  return data;
};

const useUpComingPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await fetchUpComingPlaying();
      console.log("data->", data.results);
      dispatch(addUpComingPlayingMovie(data?.results));
    })();
  }, []);
};

export default useUpComingPlayingMovies;
