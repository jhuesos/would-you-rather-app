import React from 'react';

export default ({ location }) => (
  <div>
    <h3>
      Error 404. <span>{
        location.state && location.state.msg
          ? location.state.msg
          : 'Location does not exist'
      }</span>
    </h3>
  </div>
);
