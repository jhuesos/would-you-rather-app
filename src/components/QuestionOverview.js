import React from 'react';
import { NavLink } from 'react-router-dom';
import QuestionLayout from './QuestionLayout';

export default ({ userName, avatarURL, question, id }) => (
  <NavLink exact to={`/question/${id}`}>
    <QuestionLayout userName={userName} avatarURL={avatarURL}>
      <b>Would you rather</b> ...{question}...
    </QuestionLayout>
  </NavLink>
);
