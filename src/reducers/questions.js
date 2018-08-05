import { handleActions } from 'redux-actions';
import { receiveQuestions, answerQuestion } from '../actions/questions';

export default handleActions({
  [receiveQuestions]: (state, { payload }) => payload,
  [answerQuestion]: (state, { payload }) => {
    const { authedUser, questionId, answer } = payload;
    const question = state[questionId];

    return {
      ...state,
      ...{
        ...question,
        [answer]: {
          text: question[answer].text,
          votes: question[answer].votes.concat(authedUser),
        }
      },
    }
  },
}, {});
