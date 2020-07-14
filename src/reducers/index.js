import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import titleReducer from './titleReducer';

export default combineReducers({
  movieReducer,
  titleReducer,
});
