import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ userName, avatarURL, question, id }) => (
  <NavLink exact to={`/question/${id}`} className="question-container">
    <section>
      <header>{userName} asks:</header>
      <div className="question-body">
        <div className="user-profile"><img src={avatarURL} alt={`${userName} profile pic`} width="128px"/></div>
        <div className="question">
          <b>Would you rather</b> ...{question}...
      </div>
      </div>
    </section>
  </NavLink>
)
