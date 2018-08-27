import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

const mapStateToProps = ({ authedUser, history }) => ({
  isUserAuth: authedUser !== null,
  history,
});

export default (WrappedComponent) => connect(mapStateToProps)(withRouter(({ isUserAuth, history }) => (
  isUserAuth
    ? <WrappedComponent {...this.props} />
    : <Redirect to={{
      pathname: '/login',
      state: { from: history.location.pathname }
    }} />)
));
