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
    //console.log("Error in fetching movies");
    return;
  }
  const data = await nowPlaying.json();
  //console.log(data);
  return data;
};

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const NowPlay = useSelector((store)=>store.MovieReducer.nowPlaying)

  
  useEffect(() => {
    (async () => {
      if(NowPlay.length>0){return;}
      const data = await fetchNowPlaying();
      dispatch(addNowPlayingMovie(data?.results));
    })();
  }, []);
};

export default useNowPlayingMovies;
