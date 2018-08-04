import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionPage extends Component {
  render() {
    const { match } = this.props;
    const { id: questionId } = match.params;

    return (
      <div>Question id: {questionId}</div>
    );
  }
}

export default connect()(QuestionPage);
