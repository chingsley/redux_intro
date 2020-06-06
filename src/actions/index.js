export const ADD_MOVIE = 'ADD_MOVIE';
export const CHANGE_TITLE = 'CHANGE_TITLE';

export const addMovie = (movieName) => {
  console.log(movieName);
  return {
    type: ADD_MOVIE,
    payload: movieName,
  };
};

export const changeTitle = (newTitle) => {
  return {
    type: CHANGE_TITLE,
    payload: newTitle,
  };
};
