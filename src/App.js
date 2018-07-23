import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import NewQuestion from './components/NewQuestion';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>

          <hr/>

          <Route exact path="/" component={Dashboard}/>
          <Route path="/leaderboard" component={Leaderboard}/>
          <Route path="/login" component={Login}/>
          <Route path="/add" component={NewQuestion}/>
        </div>
      </Router>
    );
  }
}

export default App;
