import { ADD_MOVIE, CHANGE_TITLE, TOGGLE_DRAGON_STATUS } from '../actions';

const initialState = {
  title: 'Redux Movie List App',
};

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

export default titleReducer;
