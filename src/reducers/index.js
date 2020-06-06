import { ADD_MOVIE, CHANGE_TITLE } from '../actions';

const initialState = {
  user: { name: 'James' },
  movies: ['Star Wars', 'Lord of the Rings', 'Harry Potter'],
  todoList: [{ task: 'Learn Redux', id: 0, completed: false }],
  moviesToWatch: 13,
  title: 'Redux Movies',
};

export const reducer = (state = initialState, action) => {
  console.log(
    'reducer has been automatically called with\nstate = ',
    state,
    '\naction = ',
    action
  );
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};
