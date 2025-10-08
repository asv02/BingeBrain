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
  initialState:{
    nowPlaying:[],
    Maintrailer:null
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
        // console.log('payload->',action.payload)
        // return action.payload;
        state.nowPlaying = action.payload
    },
    removeNowPlayingMovie: (state, action) => {
      const filteredMovie = state.nowPlaying.filter((res) => {
        return res.id != action.payload;
      });
      return filteredMovie;
    },
    addTrailer:(state,action)=>
      {
          state.Maintrailer = action.payload;
      }
  },
});

export const MovieReducer = movieSlice.reducer;
export const { addNowPlayingMovie, removeNowPlayingMovie,addTrailer } = movieSlice.actions;
export const { setUser, removeUser } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
