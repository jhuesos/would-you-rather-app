import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

import { handleUsers } from './actions/users';
import { handleQuestions } from './actions/questions';

import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Leaderboard from './views/Leaderboard';
import NewQuestion from './views/NewQuestion';
import QuestionPage from './views/QuestionPage';

import NavBar from './components/NavigationBar';
import RequireAuth from './components/RequireAuth';
import { logOut } from './actions/authedUser';


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleUsers());
    dispatch(handleQuestions());
  }

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logOut());
  }

  render() {
    const { isUserAuth, userName } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />

          <div className="App">
            {!isUserAuth ? null :
              <header className="app-header">
                <NavBar></NavBar>
                <div className="app-navbar-profile">
                  Hello {userName} <button type="button" onClick={this.handleLogout}>Logout</button>
                </div>
              </header>
            }

            <div className="app-main">
              <Route exact path="/" component={RequireAuth(Dashboard)} />
              <Route path="/leaderboard" component={RequireAuth(Leaderboard)} />
              <Route path="/login" component={Login} />
              <Route path="/add" component={RequireAuth(NewQuestion)} />
              <Route path="/question/:id" component={RequireAuth(QuestionPage)} />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => ({
  isUserAuth: authedUser !== null,
  userName: users[authedUser] != null ? users[authedUser].name : ''
});

export default connect(mapStateToProps)(App);
