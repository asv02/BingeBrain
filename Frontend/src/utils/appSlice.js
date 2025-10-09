import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlaying: [],
    PopularPlaying: [],
    TopRatedPlaying: [],
    UpComingPlaying: [],
    Maintrailer: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      // console.log('payload->',action.payload)
      // return action.payload;
      state.nowPlaying = action.payload;
    },
    removeNowPlayingMovie: (state, action) => {
      const filteredMovie = state.nowPlaying.filter((res) => {
        return res.id != action.payload;
      });
      state.nowPlaying = filteredMovie;
    },
    addTopRatedPlayingMovie: (state, action) => {
      // console.log('payload->',action.payload)
      // return action.payload;
      state.TopRatedPlaying = action.payload;
    },
    removeTopRatedPlayingMovie: (state, action) => {
      const filteredMovie = state.TopRatedPlaying.filter((res) => {
        return res.id != action.payload;
      });
      state.TopRatedPlaying = filteredMovie;
    },
    addUpComingPlayingMovie: (state, action) => {
      // console.log('payload->',action.payload)
      // return action.payload;
      state.UpComingPlaying = action.payload;
    },
    removeUpComingPlayingMovie: (state, action) => {
      const filteredMovie = state.UpComingPlaying.filter((res) => {
        return res.id != action.payload;
      });
      state.UpComingPlaying = filteredMovie;
    },
    addPopularPlayingMovie: (state, action) => {
      // console.log('payload->',action.payload)
      // return action.payload;
      state.PopularPlaying = action.payload;
    },
    removePopularPlayingMovie: (state, action) => {
      const filteredMovie = state.PopularPlaying.filter((res) => {
        return res.id != action.payload;
      });
      state.PopularPlaying = filteredMovie;
    },
    addTrailer: (state, action) => {
      state.Maintrailer = action.payload;
    },
  },
});

const GptSearchSlice = createSlice({
  name: "GptSearch",
  initialState: {
    toggle: false,
    recommendedMovie: [],
  },
  reducers: {
    toggleSearch: (state) => {
      state = { ...state, toggle: !state.toggle };
      console.log("gpt state->", state.toggle);
      return state;
    },
    addRecommendedMovie: (state, action) => {
      state = {...state,recommendedMovie:action.payload};
      return state;
    },
  },
});

export const GptReducer = GptSearchSlice.reducer;
export const { toggleSearch,addRecommendedMovie } = GptSearchSlice.actions;

export const MovieReducer = movieSlice.reducer;
export const {
  addNowPlayingMovie,
  addTopRatedPlayingMovie,
  addUpComingPlayingMovie,
  addPopularPlayingMovie,
  removeNowPlayingMovie,
  removeTopRatedPlayingMovie,
  removeUpComingPlayingMovie,
  removePopularPlayingMovie,
  addTrailer,
} = movieSlice.actions;
export const { setUser, removeUser } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
