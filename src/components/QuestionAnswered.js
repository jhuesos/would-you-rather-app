import React, { Fragment } from 'react';
import QuestionLayout from './QuestionLayout';
import PropTypes from 'prop-types';

const calculateVotes = ({ optionOne, optionTwo }, userId) => {
  const total = optionOne.votes.length + optionTwo.votes.length;

  return {
    optionOne: {
      text: optionOne.text,
      votes: optionOne.votes.length,
      percentage: Math.round((optionOne.votes.length / total) * 100),
      chosen: optionOne.votes.includes(userId)
    },
    optionTwo: {
      text: optionTwo.text,
      votes: optionTwo.votes.length,
      percentage: Math.round((optionTwo.votes.length / total) * 100),
      chosen: optionTwo.votes.includes(userId)
    },
    total
  };
};

const QuestionAnswered = ({ userName, avatarURL, question, userId }) => {
  const votesInfo = calculateVotes(question, userId);
  const { optionOne, optionTwo, total } = votesInfo;

  return (
    <QuestionLayout userName={userName} avatarURL={avatarURL} title={`${userName} asks:`}>
      <Fragment>
        <h2>Would you rather... (Votes: {total})</h2>
        <div className="question-answered">
          <div className={optionOne.chosen ? 'chosen': ''}>
            {optionOne.text} - {optionOne.percentage}% ({optionOne.votes}) {optionOne.chosen ? '<-- Your choice': ''}
          </div>

          <div className={optionTwo.chosen ? 'chosen': ''}>
            {optionTwo.text} - {optionTwo.percentage}% ({optionTwo.votes}) {optionTwo.chosen ? '<-- Your choice': ''}
          </div>
        </div>
      </Fragment>
    </QuestionLayout>
  );
};

QuestionAnswered.propTypes = {
  userName: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
};

export default QuestionAnswered;
