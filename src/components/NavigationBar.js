import React from 'react';
import { NavLink } from 'react-router-dom';

// TODO: add user profile and logout link

export default () => (
  <nav>
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/add">New Question</NavLink></li>
      <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
    </ul>
  </nav>
);
