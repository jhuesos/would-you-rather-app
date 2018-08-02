import { createAction } from 'redux-actions';
import {showLoading, hideLoading} from 'react-redux-loading';
import { _getQuestions } from '../_DATA';

export const receiveQuestions = createAction('RECEIVE_QUESTIONS');

export const handleQuestions = () => (dispatch) => {
  dispatch(showLoading());

  _getQuestions().then((questions) => {
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  });
};
