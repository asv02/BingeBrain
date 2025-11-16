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
import Background from "url:../assests/bg.jpg";

function Browse() {
  const gptSearch = useSelector((store) => store.GptReducer.toggle);
  useNowPlayingMovies();
  usePopularPlayingMovies();
  useTopRatedPlayingMovies();
  useUpComingPlayingMovies();

  return (
    <div className="relative min-h-screen bg-black border-amber-50">
      <img
        src={Background}
        alt="Background image"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />

      <div className="relative z-10">
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
    </div>
  );
}

export default Browse;
