import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const nowPlayingMovieList = useSelector(
    (store) => store.MovieReducer.nowPlaying
  );
  const PopularPlayingMovieList = useSelector(
    (store) => store.MovieReducer.PopularPlaying
  );
  const TopRatedPlayingMovieList = useSelector(
    (store) => store.MovieReducer.TopRatedPlaying
  );
  const UpComingPlayingMovieList = useSelector(
    (store) => store.MovieReducer.UpComingPlaying
  );

  
  return (
    <div className="space-y-8 md:space-y-10 px-4 md:px-8 py-6">
      <section>
        <h3 className="text-white text-lg md:text-2xl font-bold mb-3 md:mb-4">Now Playing</h3>
        {nowPlayingMovieList && (
          <MoviesList moviesList={nowPlayingMovieList} />
        )}
      </section>

      <section>
        <h3 className="text-white text-lg md:text-2xl font-bold mb-3 md:mb-4">Top Picks For You</h3>
        {PopularPlayingMovieList && (
          <MoviesList moviesList={PopularPlayingMovieList} />
        )}
      </section>

      <section>
        <h3 className="text-white text-lg md:text-2xl font-bold mb-3 md:mb-4">Top Rated</h3>
        {TopRatedPlayingMovieList && (
          <MoviesList moviesList={TopRatedPlayingMovieList} />
        )}
      </section>

      <section>
        <h3 className="text-white text-lg md:text-2xl font-bold mb-3 md:mb-4">Up Coming</h3>
        {UpComingPlayingMovieList && (
          <MoviesList moviesList={UpComingPlayingMovieList} />
        )}
      </section>
    </div>
  );
}

export default SecondaryContainer;
