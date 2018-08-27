import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import QuestionOverview from '../components/QuestionOverview';
import { getAnsweredQuestions, getUnansweredQuestions } from '../selectors';

const Dashboard = ({ answeredQuestions, unansweredQuestions }) => (
  <div>
    <h1>Dashboard</h1>

    {
      [
        ['Unanswered questions', unansweredQuestions],
        ['Answered questions', answeredQuestions],
      ].map(([title, questions]) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          {Object.values(questions).map(question => (
            <QuestionOverview
              key={question.id}
              userName={question.author.name}
              avatarURL={question.author.avatarURL}
              question={
                question[Math.floor(Math.random() * 100) % 2 ? 'optionOne' : 'optionTwo'].text
              }
              id={question.id}
            />
          ))}
        </Fragment>
      ))
    }
  </div>
);

const mapStateToProps = (state) => ({
  answeredQuestions: getAnsweredQuestions(state),
  unansweredQuestions: getUnansweredQuestions(state),
});

export default connect(mapStateToProps)(Dashboard);
