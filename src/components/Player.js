import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown';
import {Consumer} from './Context'


class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    
    const { 
      index,
    } = this.props;

    return (
      
      <div className="player">
        <Consumer>
          {({actions, players}) => (
            <span className="player-name">
            <Crown index={index}/>
              <button
                className="remove-player"
                onClick={() => actions.removePlayer(players[index].id)}
              >
                ✖
              </button>
              {players[index].name}
            </span>
          )}
        </Consumer>

        <Counter index={index} />
      </div>
    );
  }
}

export default Player;