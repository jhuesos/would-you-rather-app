import { handleActions } from 'redux-actions';
import { receiveQuestions, answerQuestion } from '../actions/questions';

export default handleActions(
  {
    [receiveQuestions]: (state, { payload }) => payload,
    [answerQuestion]: (state, { payload }) => {
      const { authedUser, questionId, answer } = payload;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: state[questionId][answer].votes.concat(authedUser),
          }
        }
      };
    }
  },
  {},
);
