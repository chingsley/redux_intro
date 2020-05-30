export const ADD_MOVIE = "ADD_MOVIE";

export const addMovie = (movieName) => {
  console.log(movieName);
  return {
    type: ADD_MOVIE,
    payload: movieName,
  };
};
