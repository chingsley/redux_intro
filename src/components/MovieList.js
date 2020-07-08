import React from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';
import Movie from './Movie';

class MovieList extends React.Component {
  state = {
    newMovie: '',
    addingNewMovie: false,
  };
  addMovie = (e) => {
    e.preventDefault();
    this.state.newMovie.trim() && this.props.addMovie(this.state.newMovie);
    this.setState({ addingNewMovie: false, newMovie: '' });
  };
  handleChanges = (e) => this.setState({ newMovie: e.target.value });
  render() {
    return (
      <div>
        <div className="user-profile">
          <p>User: {this.props.user.name}</p>
          <p>Movies to watch: {this.props.moviesToWatch}</p>
        </div>
        <ul>
          {this.props.movies.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
        </ul>
        {this.state.addingNewMovie ? (
          <form onSubmit={this.addMovie}>
            <input onChange={this.handleChanges} value={this.state.newMovie} />
            <button onClick={this.addMovie}>save</button>
          </form>
        ) : (
          <button onClick={() => this.setState({ addingNewMovie: true })}>
            add movie
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    moviesToWatch: state.moviesToWatch,
    user: state.user,
  };
};

export default connect(mapStateToProps, { addMovie })(MovieList);
