import { handleActions } from 'redux-actions';
import {receiveQuestions} from '../actions/questions';

export default handleActions({
  [receiveQuestions]: (state, { payload }) => payload,
}, {});
