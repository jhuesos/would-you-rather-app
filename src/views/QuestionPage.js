import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';

import QuestionNotAnswered from '../components/QuestionNotAnswered';
import { handleAnswerQuestions } from '../actions/questions';
import QuestionAnswered from '../components/QuestionAnswered';

class QuestionPage extends Component {
  handleAnswerQuestion = (questionId, answer) => {
    const { authedUser, dispatch } = this.props;

    dispatch(handleAnswerQuestions(authedUser, questionId, answer));
  }

  render() {
    const { match, questions, users, authedUser } = this.props;
    const { id: questionId } = match.params;
    const wereQuestionsLoaded = Object.keys(questions).length > 0;
    const question = questions[questionId];

    if (question == null) {
      return !wereQuestionsLoaded
        ? <div>Loading...</div>
        : <Redirect to={{
          pathname: '/404',
          state: { msg: 'Question does not exist' }
        }}/>
    }

    const author = users[question.author];
    const { name, avatarURL } = author;
    const questionsAnswered = [
      question.optionOne.votes,
      question.optionTwo.votes
    ].some(votes => votes.includes(authedUser));

    return questionsAnswered ? (
      <QuestionAnswered
        userName={name}
        avatarURL={avatarURL}
        question={question}
        userId={authedUser}
      />
    ) : (
      <QuestionNotAnswered
        userName={name}
        avatarURL={avatarURL}
        question={question}
        handleAnswerQuestion={this.handleAnswerQuestion}
      />
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => ({
  questions,
  users,
  authedUser: authedUser
});

export default withRouter(connect(mapStateToProps)(QuestionPage));
