import { useEffect } from "react";
import { GET_TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedPlayingMovie, removeTopRatedPlayingMovie } from "../utils/appSlice";

const fetchTopRatedPlaying = async () => {
  const TopRatedPlaying = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    GET_TMDB_API_OPTIONS
  );
  if (!TopRatedPlaying.ok) {
    console.log("Error in fetching movies");
    return;
  }
  const data = await TopRatedPlaying.json();
  console.log('populaarPlaying->',data);
  return data;
};

const useTopRatedPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await fetchTopRatedPlaying();
      console.log("data->", data.results);
      dispatch(addTopRatedPlayingMovie(data?.results));
    })();
  }, []);
};

export default useTopRatedPlayingMovies;
