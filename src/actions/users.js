import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { createAction } from 'redux-actions';
import { _getUsers } from '../_DATA';

export const receiveUsers = createAction('RECEIVE_USER');

export const handleUsers = () => (dispatch) => {
  dispatch(showLoading());

  _getUsers().then((users) => {
    dispatch(receiveUsers(users));
    dispatch(hideLoading());
  });
};
