import { createAction } from 'redux-actions';

export const logIn = createAction('LOG_IN', id => id);
export const logOut = createAction('LOG_OUT');
