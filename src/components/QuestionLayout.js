import React from 'react';

export default ({ userName, title, avatarURL, children }) => (
  <section className="question-container">
    <header>{title}</header>
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
