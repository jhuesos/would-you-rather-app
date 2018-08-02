import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// FIXME: loading bar is not shown
import { LoadingBar } from 'react-redux-loading';

import NavBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import RequireAuth from './components/RequireAuth';
import Login from './components/Login';
import NewQuestion from './components/NewQuestion';
import { handleUsers } from './actions/users';
import { handleQuestions } from './actions/questions';


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleUsers());
    dispatch(handleQuestions());
  }

  render() {
    const { isUserAuth } = this.props;
    console.log(isUserAuth)

    return (
      <Router>
        <Fragment>
          <LoadingBar />

          <div className="App">
            {!isUserAuth ? null :
              <Fragment>
                <NavBar></NavBar>
                <hr />
              </Fragment>
            }

            <Route exact path="/" component={RequireAuth(Dashboard)} />
            <Route path="/leaderboard" component={RequireAuth(Leaderboard)} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={RequireAuth(NewQuestion)} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({ isUserAuth: authedUser.userId !== null });

export default connect(mapStateToProps)(App);
