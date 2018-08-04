import { createSelector } from 'reselect';

export const getAnsweredQuestions = createSelector(
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
      .filter(({ optionOne, optionTwo }) => (
        optionOne.votes.includes(userId) || optionTwo.votes.includes(userId)
      ))
      .map(question => ({
        ...question,
        author: users[question.author],
      }))
      .reduce((result, current) => ({ [current.id]: current, ...result }), {});
  }
);

export const getUnansweredQuestions = createSelector(
  [
    state => state.questions,
    state => state.authedUser.userId,
    state => state.users
  ],
  (questions, userId, users) => {
    if (userId == null) {
      return {};
    }

    return Object
      .values(questions)
      .filter(({ optionOne, optionTwo }) => (
        !optionOne.votes.includes(userId) && !optionTwo.votes.includes(userId)
      ))
      .map(question => ({
        ...question,
        author: users[question.author],
      }))
      .reduce((result, current) => ({ [current.id]: current, ...result }), {});
  }
);
