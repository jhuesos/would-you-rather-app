import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import QuestionOverview from '../components/QuestionOverview';
import { getAnsweredQuestions, getUnansweredQuestions } from '../selectors';

class Dashboard extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;

    return (
      <div>
        <h1>Dashboard</h1>

        {
          [
            ['Answered questions', answeredQuestions],
            ['Unanswered questions', unansweredQuestions]
          ].map(([title, questions]) => (
            <Fragment key={title}>
              <h2>{title}</h2>
              { Object.values(questions).map(question => (
                <QuestionOverview
                  key={question.id}
                  userName={question.author.name}
                  avatarURL={question.author.avatarURL}
                  question={question[Math.floor(Math.random() * 100) % 2 ? 'optionOne' : 'optionTwo'].text}
                  id={question.id}
                />
              )) }
            </Fragment>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  answeredQuestions: getAnsweredQuestions(state),
  unansweredQuestions: getUnansweredQuestions(state),
});

export default connect(mapStateToProps)(Dashboard);
