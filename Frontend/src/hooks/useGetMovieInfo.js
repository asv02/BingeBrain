import { useEffect, useState } from "react";
import { GET_TMDB_API_OPTIONS } from "../utils/constants";

const fetchRecommendedMovie = async (query) => {
  const moviename = typeof query === "string" ? query : query?.moviename;
  if (!moviename) return null;
  const nowPlaying = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" + encodeURIComponent(moviename),
    GET_TMDB_API_OPTIONS
  );
  if (!nowPlaying.ok) {
    return null;
  }
  const data = await nowPlaying.json();
  return data;
};

const useGetMovieInfo = (movieList) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    if (!Array.isArray(movieList) || movieList.length === 0) {
      setRecommendedMovies([]);
      return;
    }

    const promises = movieList.map((item) => fetchRecommendedMovie(item));
    Promise.all(promises)
      .then((responses) => {
        const result = responses
          .filter(Boolean)
          .map((res) => res?.results?.[0])
          .filter(Boolean);
        setRecommendedMovies(result);
      })
      .catch(() => {
        setRecommendedMovies([]);
      });
  }, [movieList]);

  return recommendedMovies;
};

export default useGetMovieInfo;
