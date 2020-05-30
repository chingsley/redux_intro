import { ADD_MOVIE } from "../actions";

const initialState = {
  user: { name: "James" },
  movies: ["Star Wars", "Lord of the Rings", "Harry Potter"],
  todoList: [{ task: "Learn Redux", id: 0, completed: false }],
  moviesToWatch: 13,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
};
