import { handleActions } from 'redux-actions';
import { receiveUsers } from '../actions/users';
import { answerQuestion, createQuestion } from '../actions/questions';

export default handleActions({
  [receiveUsers]: (state, { payload }) => payload,
  [answerQuestion]: (state, { payload }) => {
    const { questionId, authedUser, answer } = payload;

    return {
      ...state,
      [authedUser]: {
        ...state[authedUser],
        answers: {
          ...state[authedUser].answers,
          [questionId]: answer
        },
      },
    };
  },
  [createQuestion]: (state, { payload }) => {
    const { id: questionId, author: userId } = payload;

    return {
      ...state,
      [userId]: {
        ...state[userId],
        questions: state[userId].questions.concat(questionId),
      },
    };
  }
}, {});
