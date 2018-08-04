import { createSelector } from 'reselect';

const getQuestionsSelector = (filterQuestionFn) => createSelector(
  [
    state => state.questions,
    state => state.authedUser.userId,
    state => state.users,
  ],
  (questions, userId, users) => {
    if (userId == null) {
      return {};
    }

    return Object
      .values(questions)
      .filter(filterQuestionFn.bind(null, userId))
      .map(question => ({
        ...question,
        author: users[question.author],
      }))
      .reduce((result, current) => ({ [current.id]: current, ...result }), {});
  }
);

export const getAnsweredQuestions = getQuestionsSelector(
  (userId, { optionOne, optionTwo }) => (
    optionOne.votes.includes(userId) || optionTwo.votes.includes(userId)
  )
);

export const getUnansweredQuestions = getQuestionsSelector(
  (userId, { optionOne, optionTwo }) => (
    !optionOne.votes.includes(userId) && !optionTwo.votes.includes(userId)
  )
);
