import { useEffect } from "react";
import { GET_TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie, removeNowPlayingMovie } from "../utils/appSlice";

const fetchNowPlaying = async () => {
  const nowPlaying = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?&page=1",
    GET_TMDB_API_OPTIONS
  );
  if (!nowPlaying.ok) {
    console.log("Error in fetching movies");
    return;
  }
  const data = await nowPlaying.json();
  console.log(data);
  return data;
};

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await fetchNowPlaying();
      console.log("data->", data.results);
      dispatch(addNowPlayingMovie(data?.results));
    })();
  }, []);
};

export default useNowPlayingMovies;
