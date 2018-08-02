import React from 'react';
import PropTypes from 'prop-types';

const QuestionLayout = ({ userName, title, avatarURL, children }) => (
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
);

QuestionLayout.propTypes = {
  userName: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default QuestionLayout;
