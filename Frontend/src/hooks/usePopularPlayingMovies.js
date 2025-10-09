import { useEffect } from "react";
import { GET_TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularPlayingMovie, removePopularPlayingMovie } from "../utils/appSlice";

const fetchPopularPlaying = async () => {
  const PopularPlaying = await fetch(
    "https://api.themoviedb.org/3/movie/popular?page=1",
    GET_TMDB_API_OPTIONS
  );
  if (!PopularPlaying.ok) {
    console.log("Error in fetching movies");
    return;
  }
  const data = await PopularPlaying.json();
  console.log('populaarPlaying->',data);
  return data;
};

const usePopularPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await fetchPopularPlaying();
      console.log("data->", data.results);
      dispatch(addPopularPlayingMovie(data?.results));
    })();
  }, []);
};

export default usePopularPlayingMovies;
