import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedPlayingMovies from "../hooks/useTopRatedPlayingMovies";
import useUpComingPlayingMovies from "../hooks/useUpComingPlayingMovies";
import usePopularPlayingMovies from "../hooks/usePopularPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

function Browse() {
  const gptSearch = useSelector((store) => store.GptReducer.toggle);
  useNowPlayingMovies();
  usePopularPlayingMovies();
  useTopRatedPlayingMovies();
  useUpComingPlayingMovies();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
