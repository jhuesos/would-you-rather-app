import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapStateToProps = ({ authedUser }) => ({ isUserAuth: authedUser !== null });

export default (WrappedComponent) => connect(mapStateToProps)(class extends Component {
  render() {
    const { isUserAuth } = this.props;

    return isUserAuth ? <WrappedComponent {...this.props} /> : <Redirect to='/login' />;
  }
})
