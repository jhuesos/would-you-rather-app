import React from 'react';
import { NavLink } from 'react-router-dom';
import QuestionLayout from './QuestionLayout';
import PropTypes from 'prop-types';

const QuestionOverview = ({ userName, avatarURL, question, id }) => (
  <NavLink exact to={`/question/${id}`}>
    <QuestionLayout userName={userName} avatarURL={avatarURL} title={`${userName} asks:`}>
      <b>Would you rather</b> ...{question}...
    </QuestionLayout>
  </NavLink>
);

QuestionOverview.propTypes = {
  userName: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default QuestionOverview;
