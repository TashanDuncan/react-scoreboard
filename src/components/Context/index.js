import React, {Component} from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
  state = {
    players: [
      {
        name: 'Tashan',
        score: 0,
        id: 1,
        isHighScore: false,
      },
      {
        name: 'Liam',
        score: 0,
        id: 2,
        isHighScore: false,
      },
      {
        name: 'Will',
        score: 0,
        id: 3,
        isHighScore: false,
      },
      {
        name: 'Kamal',
        score: 0,
        id: 4,
        isHighScore: false,
      },
    ],
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  handleHighScore = () => {
    this.setState((prevState) => {
      const updated = [...prevState.players];
      const highScore = Math.max.apply(
        Math,
        updated.map(function (player) {
          return player.score;
        })
      );
      console.log(highScore);
      for (let i = 0; i < updated.length; i++) {
        if (updated[i].score === highScore && highScore > 0)
          updated[i].isHighScore = true;
        else if (updated[i].score <= 0 || highScore === 0) {
          updated[i].isHighScore = false;
        } else {
          updated[i].isHighScore = false;
        }
      }
      return { players: updated };
    });
  };
  render() {
    return (
      <ScoreboardContext.Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer,
            highScore: this.handleHighScore,
          },
        }}
      >
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}
export const Consumer = ScoreboardContext.Consumer;

