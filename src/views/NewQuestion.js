import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCreateQuestion } from '../actions/questions';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    const { authedUser, history, dispatch } = this.props;
    const { optionOneText, optionTwoText } = this.state;

    dispatch(handleCreateQuestion({ author: authedUser, optionOneText, optionTwoText }))
      .then(({ id: questionId }) => {
        history.push(`/question/${questionId}`);
      });
  };

  render() {
    return (
      <div>
        <h1>New Question</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="optionOneText">Option One:</label>
            <input
              type="text"
              id="optionOneText"
              name="optionOneText"
              val={this.state.optionOneText}
              onChange={this.handleChange}
              autoFocus
            />
          </div>

          <div className="input-group">
            <label htmlFor="optionTwoText">Option Two:</label>
            <input
              type="text"
              id="optionTwoText"
              name="optionTwoText"
              val={this.state.text}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group">
            <button
              type="submit"
              disabled={!this.state.optionOneText || !this.state.optionTwoText}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser
});

export default connect(mapStateToProps)(NewQuestion);
