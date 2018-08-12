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

export const getLeaderBoard = createSelector(
  [state => state.users],
  (users) => Object.keys(users)
    .map((id) => ({
      id,
      questionsAnswered: Object.keys(users[id].answers).length,
      questionsCreated: Object.keys(users[id].questions).length,
      avatarURL: users[id].avatarURL,
      name: users[id].name,
    }))
    .map(user => ({
      ...user,
      total: user.questionsAnswered + user.questionsAnswered
    }))
    .sort((a, b) => a.total > b.total ? -1 : 1)
);
