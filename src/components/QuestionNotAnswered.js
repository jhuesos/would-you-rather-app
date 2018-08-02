import React, { Fragment, Component } from 'react';
import QuestionLayout from './QuestionLayout';
import PropTypes from 'prop-types';

class QuestionNotAnswered extends Component {
  state = {
    answer: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { handleAnswerQuestion, question } = this.props;
    handleAnswerQuestion(question.id, this.state.answer);

  }

  handleChange = ({ target }) => {
    this.setState(() => ({
      answer: target.value,
    }));
  }

  render() {
    const { userName, avatarURL, question } = this.props;
    const { answer } = this.state;

    return (
      <QuestionLayout userName={userName} avatarURL={avatarURL} title={`${userName} asks:`}>
        <Fragment>
          <h2>Would you rather...</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="answer">
              <label htmlFor="optionOne">{question.optionOne.text}</label>
              <input
                id="optionOne"
                type="radio"
                name="answer"
                value="optionOne"
                checked={answer === 'optionOne'}
                onChange={this.handleChange}
              />
            </div>
            <div className="answer">
              <label htmlFor="optionTwo">{question.optionTwo.text}</label>
              <input
                id="optionTwo"
                type="radio"
                name="answer"
                value="optionTwo"
                checked={answer === 'optionTwo'}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" disabled={answer === ''}>Answer</button>
          </form>
        </Fragment>
      </QuestionLayout>
    );
  }
}

QuestionNotAnswered.propTypes = {
  userName: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired,
  handleAnswerQuestion: PropTypes.func.isRequired,
};

export default QuestionNotAnswered;
