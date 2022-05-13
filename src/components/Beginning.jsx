import React from "react";
import PropTypes from 'prop-types'
import getURLParams from "../utils/getURLParams";

class Beginning extends React.Component {
  state = {
    msg: 3,
    countDownSound: new Audio(this.props.soundEffect[0])

  };
  intervalRef;
  readyEnglish = "GO"
  readyUrdu = "چلو"
  componentDidMount() {
    this.intervalRef = setInterval(() => this.setState(this.handleCount), 1000);

  }

  handleCount = prevState => {
    if (prevState.msg === 1) {
      if (getURLParams.lang == 'u')
        return { msg: this.readyUrdu }
      return { msg: this.readyEnglish }

    }

    if (prevState.msg === "GO" || prevState.msg === "چلو") {
      return { msg: undefined };
    }
    return { msg: prevState.msg - 1 };
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.msg === undefined) {
      clearInterval(this.intervalRef);
      this.props.isComplete();
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.intervalRef);
  }
  getReadyEnglish = "GET READY..."
  getReadyUrdu = "...تیار ہو جاؤ"
  render() {
    this.state.countDownSound.play()
    return (
      <div>
        <h3>{getURLParams.lang == 'u' ? this.getReadyUrdu : this.getReadyEnglish} </h3>
        <h1>{this.state.msg}</h1>
      </div>
    );
  }
}


Beginning.propTypes = {
  isComplete: PropTypes.func.isRequired,
}

export default Beginning;
