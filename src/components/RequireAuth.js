import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = ({ authedUser }) => ({ isUserAuth: authedUser !== null });

export default (WrappedComponent) => connect(mapStateToProps)(({ isUserAuth }) => (
  isUserAuth ? <WrappedComponent {...this.props} /> : <Redirect to='/login' />
))
