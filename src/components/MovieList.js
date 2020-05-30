import React from "react";
import { connect } from "react-redux";
import { addMovie } from "../actions";
import Movie from "./Movie";

class MovieList extends React.Component {
  state = {
    newMovie: "",
  };
  addMovie = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state.newMovie);
  };
  handleChanges = (e) => this.setState({ newMovie: e.target.value });
  render() {
    return (
      <div>
        <h2>User: {this.props.user.name}</h2>
        <p>Movies to watch: {this.props.moviesToWatch}</p>
        {this.props.movies.map((movie) => (
          <Movie movie={movie} />
        ))}
        <input onChange={this.handleChanges} value={this.state.newMovie} />
        <button onClick={this.addMovie}>add movie</button>
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
