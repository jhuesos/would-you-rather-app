import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoardUser from '../components/LeaderBoardUser';
import { getLeaderBoard } from '../selectors';

class LeaderBoard extends Component {
  render() {
    const { leaderBoardUsers } = this.props;

    return (
      <div>
        <h1>Leaderboard</h1>
        <ol>
          {Object.values(leaderBoardUsers).map((user, index) => (
            <li key={user.id}>
              <LeaderBoardUser
                userName={user.name}
                avatarURL={user.avatarURL}
                questionsAnswered={user.questionsAnswered}
                questionsCreated={user.questionsCreated}
                total={user.total}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ leaderBoardUsers: getLeaderBoard(state) });

export default connect(mapStateToProps)(LeaderBoard);
