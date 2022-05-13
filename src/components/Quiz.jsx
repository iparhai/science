import React from "react";
import AnswerModal from "./AnswerModal";
import { MathHelper } from "../utils";
import './Quiz.css'
import getURLParams from "../utils/getURLParams";
import IMBP from "./Games/Grade 4/Unit 1 (Our Body)/IMBP/IMBP";

// import Shape from "./geometry/shape";
class Quiz extends React.Component {
  _isMounted = false;
  _secondsIntervalRef;
  state = {
    modal: "",
    modalShowing: false,
    streaks: 0,
    units: 0
  };
  earnLife = () => {
    this.props.onEarnLife();
    this.showModal("success", "STREAK!! You won a life ♥");
    this.setState({
      streaks: 0,
      units: this.state.units < 3 ? this.state.units + 1 : 2
    });
  };
  correctAnswer = () => {
    if (this.state.streaks > 2) {
      this.earnLife();
    } else {
      this.showModal("success");
    }
    this._isMounted && this.props.onCorretAnswer();
    this.setState(state => {
      return {
        streaks: state.streaks + 1
      };
    });
    setTimeout(() => {
      this._isMounted &&
        this.setState({
          modalShowing: false,

        });
      if (this.props.lifes > 0) (this.answerInput && this.answerInput.focus());
    }, 2500);
  };
  componentDidUpdate() {
    if (this.state.totalProblems > getURLParams.limit) {
      this.props.onEndGame()
    }
  }
  componentDidMount() {
    this._isMounted = true;

    // this.answerInput.focus();
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.lifes < 1) {
      this.props.onEndGame(this.state.points);
      return false;
    }
    return nextProps.lifes > -1;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  wrongAnswer = () => {
    this._isMounted && this.props.onWrongAnswer();
    this.setState({
      streaks: 0
    });
    this.showModal("error");
    setTimeout(() => {
      this._isMounted &&
        this.setState({
          modalShowing: false,
        });
      if (this.props.lifes > 0) (this.answerInput && this.answerInput.focus());
    }, 2500);
  };
  showModal = (type, text) => {
    this.setState({
      modal: <AnswerModal type={type} text={text} soundEffect={this.props.soundEffect} />,
      modalShowing: true
    });
  };

  renderGrade4Games = (gameName) => {
    if (gameName.toLocaleLowerCase() == "imbp") {
      return <IMBP onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
  }
  renderGame = (grade, gameName) => {
    if (grade == 4 || grade == "4") {
      return this.renderGrade4Games(gameName)
    }
  }
  render() {
    return (
      <section className="show-up" style={{ width: "100%", height: "100vh" }}>
        <div >
          {this.state.modalShowing ? (
            this.state.modal
          ) : (
            <div>
              {this.renderGame(getURLParams.grade, getURLParams.gameName)}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Quiz;
