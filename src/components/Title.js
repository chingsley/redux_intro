import React from 'react';
import { connect } from 'react-redux';
import { changeTitle } from '../actions';

class Title extends React.Component {
  state = {
    newTitle: '',
    editing: false,
  };

  activateTitleEditMode = () => {
    this.setState({ editing: true });
  };

  handleChanges = (e) => this.setState({ [e.target.name]: e.target.value });

  changeTitle = (e) => {
    e.preventDefault();
    this.state.newTitle.trim() && this.props.changeTitle(this.state.newTitle);
    this.setState({ editing: false });
  };

  render() {
    return (
      <div>
        {this.state.editing ? (
          <form onSubmit={this.changeTitle}>
            <input
              className="title-input"
              type="text"
              name="newTitle"
              onChange={this.handleChanges}
              value={this.state.newTitle}
              placeholder="Enter a New Title"
            />
            <button onClick={this.changeTitle}>Save</button>
          </form>
        ) : (
          <h1>
            {this.props.titleFromRedux}
            <i className="fa fa-edit" onClick={this.activateTitleEditMode} />
          </h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    titleFromRedux: state.titleReducer.title,
  };
};

export default connect(mapStateToProps, { changeTitle })(Title);
