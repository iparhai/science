import React from "react";
import PropTypes from 'prop-types'

const style = {
  buttonRetry: {
    fontSize: "1.5em",
    color: "white",
    fontFamily: "fantasy",
    cursor: "pointer"
  },
  otherButton: {
    color: "white",
    fontFamily: "fantasy",
    cursor: "pointer",
    fontSize: "1em",
    margin: "0.1em auto 3em"
  },
  divider: {
    height: 0,
    border: "0.5px solid #61dafb"
  },
  poinstStyle: {
    color: "black",
    fontWeight: "bold"
  }
};

class Done extends React.Component {
  gameOverEnglish = "GAME OVER"
  gameOverUrdu = "!!!کھیل ختم"

  finalScoreEnglish = "FINAL SCORE"
  finalScoreUrdu = "حتمی اسکور"

  retryEnglish = "RETRY"
  retryUrdu = "دوبارہ کوشش کریں"
  render() {
    const { divider, buttonRetry, otherButton, poinstStyle } = style;
    return (
      <div>
        <h1>{this.props.isUrdu ? this.gameOverUrdu : this.gameOverEnglish}</h1>
        <hr style={divider} />
        <h3>
          {this.props.isUrdu ? this.finalScoreUrdu : this.finalScoreEnglish} <b style={poinstStyle}>{this.props.points}</b>
        </h3>
        <br />
        <h3 style={buttonRetry} onClick={this.props.retryGame}>
          {this.props.isUrdu ? this.retryUrdu : this.retryEnglish}
        </h3>
        {/* <h5 style={otherButton} onClick={this.props.onReStartGame}>
        Another player
      </h5> */}
        {this.children}
      </div>
    );
  }
}

Done.propTypes = {
  points: PropTypes.number.isRequired,
  retryGame: PropTypes.func.isRequired,
  onReStartGame: PropTypes.func.isRequired
}

export default Done;
