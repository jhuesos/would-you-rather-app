import { createAction } from 'redux-actions';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../_DATA';

export const receiveQuestions = createAction('RECEIVE_QUESTIONS');
export const answerQuestion = createAction('ANSWER_QUESTION', (authedUser, questionId, answer) => ({
  authedUser,
  questionId,
  answer,
}));

export const createQuestion = createAction('CREATE_QUESTION');

export const handleAnswerQuestions = (authedUser, qid, answer) => (dispatch) => {
  dispatch(showLoading());
  dispatch(answerQuestion(authedUser, qid, answer));

  _saveQuestionAnswer({ authedUser, qid, answer })
    .then(() => {
      dispatch(hideLoading());
    })
};

export const handleQuestions = () => (dispatch) => {
  dispatch(showLoading());

  _getQuestions().then((questions) => {
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  });
};

export const handleCreateQuestion = (question) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(showLoading());

    _saveQuestion(question).then((savedQuestion) => {
      dispatch(createQuestion(savedQuestion));
      dispatch(hideLoading());

      resolve(savedQuestion);
    });
  });
};
