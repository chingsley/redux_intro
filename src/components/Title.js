import React from 'react';
import { connect } from 'react-redux';
import { changeTitle } from '../actions';

class Title extends React.Component {
  state = {
    newTitle: '',
  };

  handleChanges = (e) => this.setState({ newTitle: e.target.value });

  changeTitle = (e) => {
    e.preventDefault();

    this.props.changeTitle(this.state.newTitle);
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          onChange={this.handleChanges}
          value={this.state.newTitle}
        />
        <button onClick={this.changeTitle}>change title</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};

export default connect(mapStateToProps, { changeTitle })(Title);
