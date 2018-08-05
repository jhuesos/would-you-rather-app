import { createAction } from 'redux-actions';
import { showLoading, hideLoading } from 'react-redux-loading';
import { _getQuestions, _saveQuestionAnswer } from '../_DATA';

export const receiveQuestions = createAction('RECEIVE_QUESTIONS');
export const answerQuestion = createAction('ANSWER_QUESTION', (authedUser, questionId, answer) => ({
  authedUser,
  questionId,
  answer,
}));

export const handleAnswerQuestions = (authedUser, qid, answer) => (dispatch) => {
  dispatch(showLoading());

  _saveQuestionAnswer({authedUser, qid, answer})
    .then(() => {
      dispatch(answerQuestion(authedUser, qid, answer));
      dispatch(hideLoading());
      // TODO: on error, revert change in all actions
    })
};

export const handleQuestions = () => (dispatch) => {
  dispatch(showLoading());

  _getQuestions().then((questions) => {
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  });
};
