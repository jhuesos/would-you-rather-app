import React from 'react';

export default ({ userName, avatarURL, children }) => (
  <section className="question-container">
    <header>{userName} asks:</header>
    <div className="question-body">
      <div className="user-profile">
        <img src={avatarURL} alt={`${userName} profile pic`} width="128px" />
      </div>
      <div className="question">
        {children}
      </div>
    </div>
  </section>
)
