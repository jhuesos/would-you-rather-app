import { handleActions } from 'redux-actions';
import { receiveUsers } from '../actions/users';

export default handleActions({
  [receiveUsers]: (state, {payload}) => payload,
}, {});
