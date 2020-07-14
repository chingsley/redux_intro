import { ADD_MOVIE, TOGGLE_DRAGON_STATUS } from '../actions';

const initialState = {
  user: { name: 'James' },
  movies: [
    { id: 1, title: 'Star Wars', dragonStatus: false },
    { id: 2, title: 'Lord of the Rings', dragonStatus: false },
    { id: 3, title: 'Harry Potter', dragonStatus: false },
  ],
};

initialState.moviesToWatch = initialState.movies.length;

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: state.movies.length + 1,
            title: action.payload,
            dragonStatus: false,
          },
        ],
        moviesToWatch: state.movies.length + 1,
      };
    case TOGGLE_DRAGON_STATUS:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.payload) {
            return { ...movie, dragonStatus: !movie.dragonStatus };
          } else {
            return movie;
          }
        }),
      };
    default:
      return state;
  }
};

export default movieReducer;
