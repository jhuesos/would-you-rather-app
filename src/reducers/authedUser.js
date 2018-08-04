import { handleActions } from 'redux-actions';
import { logIn, logOut } from '../actions/authedUser';

export default handleActions({
  // There is no need to pass second argument. If not provided, payLoad creator will be the
  // identity function. We pass it here as en example
  [logIn]: (state, action) => ({ userId: action.payload }),
  [logOut]: () => ({ userId: null }),
}, { userId: 'sarahedo' });
