import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionNotAnswered from './QuestionNotAnswered';
import { handleAnswerQuestions } from '../actions/questions';


class QuestionPage extends Component {
  handleAnswerQuestion = (questionId, answer) => {
    const { authedUser, dispatch } = this.props;

    dispatch(handleAnswerQuestions(authedUser, questionId, answer));
    // TODO: once is answered, it should display questionAnswered
  }

  render() {
    const { match, questions, users } = this.props;
    const { id: questionId } = match.params;
    const question = questions[questionId];

    if (question == null) {
      // TODO: Show loading.
      return null;
    }

    const author = users[question.author];
    const { name, avatarURL } = author;

    return (
      <QuestionNotAnswered
        userName={name}
        avatarURL={avatarURL}
        question={question}
        handleAnswerQuestion={this.handleAnswerQuestion}
      />
    );
  }
}

const mapStateToProps = (({ questions, users, authedUser }) => ({
  questions,
  users,
  authedUser: authedUser.userId,
}));

export default connect(mapStateToProps)(QuestionPage);
