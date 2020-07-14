import React from 'react';
import { connect } from 'react-redux';
import { toggleDragonStatus } from '../actions';
const Movie = (props) => (
  <React.Fragment>
    <li
      class="movie-li"
      onClick={() => props.toggleDragonStatus(props.movie.id)}
    >
      {props.movie.title}{' '}
      {props.movie.dragonStatus && <i className="fas fa-dragon" />}
    </li>
  </React.Fragment>
);

export default connect(undefined, { toggleDragonStatus })(Movie);
