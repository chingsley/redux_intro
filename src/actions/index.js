export const ADD_MOVIE = 'ADD_MOVIE';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const TOGGLE_DRAGON_STATUS = 'TOGGLE_DRAGON_STATUS';

export const addMovie = (movieName) => {
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

export const toggleDragonStatus = (id) => {
  return {
    type: TOGGLE_DRAGON_STATUS,
    payload: id,
  };
};
