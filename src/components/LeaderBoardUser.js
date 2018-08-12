import React from 'react';
import QuestionLayout from './QuestionLayout';

export default ({ userName, avatarURL, questionsAnswered, questionsCreated, total }) => (
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
