import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './Context';

const Counter = ({ index }) => {
  return (
    <Consumer>
      { ({actions, players}) => (
      <div className="counter">
      <button className="counter-action decrement" onClick={() => {actions.changeScore(index, -1); actions.highScore()}}> - </button>
      <span className="counter-score">{ players[index].score }</span>
      <button className="counter-action increment" onClick={() => {actions.changeScore(index, 1); actions.highScore()}}> + </button>
    </div>
      )}
    </Consumer>

  );
}

Counter.propTypes = {
  index: PropTypes.number,
};

export default Counter;