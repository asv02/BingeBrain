export const GET_TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};

export const CDN_URL = 'https://image.tmdb.org/t/p/w200/';
