import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logIn } from '../actions/authedUser';

class Login extends Component {
  state = {
    userId: ''
  }

  handleChange = ({ target }) => {
    this.setState(() => ({
      userId: target.value
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { dispatch, history, location } = this.props;
    const { userId } = this.state;
    const { from } = location.state || { from: { pathname: '/' } };

    dispatch(logIn(userId));
    history.push(from);
  }

  render() {
    const { users } = this.props;
    const { userId } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user">User: </label>
          <select id="user" value={userId} onChange={this.handleChange}>
            <option disabled value="">Pick a user</option>

            {Object.values(users).map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default withRouter(connect(mapStateToProps)(Login));
