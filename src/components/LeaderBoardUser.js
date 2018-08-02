import React from 'react';
import PropTypes from 'prop-types';
import QuestionLayout from './QuestionLayout';

const LeaderBoardUser = ({ userName, avatarURL, questionsAnswered, questionsCreated, total }) => (
  <QuestionLayout
    userName={userName}
    avatarURL={avatarURL}
    title={userName}
  >
    <ul>
      <li>Total Questions Answered: {questionsAnswered}</li>
      <li>Total Questions Created: {questionsCreated}</li>
      <li>Total Score: {total}</li>
    </ul>
  </QuestionLayout>
);

LeaderBoardUser.propTypes = {
  userName: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  questionsAnswered: PropTypes.number.isRequired,
  questionsCreated: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default LeaderBoardUser;
