import React, { Component } from 'react';
import { connect } from "react-redux"
import { mapDispatchToProps, mapStateToProps } from './redux/index'
import Start from './containers/Start';
import Science from './containers/Science';
import './App.css';
import getAsset from './utils/getAsset';
import Footer from './components/Footer';
import sessionData from './utils/sessionData';
import mlmBackground from './bgnow-01.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import getURLParams from './utils/getURLParams';

const { background, objects, backgroundMusic, soundEffect } = getAsset.getRandomTheme()

class App extends Component {
  gameStart = () => {
    this.props.onStartGame();
  }
  render() {

    return (
      <div className="App"  >
        <header className="App-header">
          {getURLParams.gameName == "mlm" ? <img src={mlmBackground} id="bg" /> : <img src={background} id="bg" alt="" />}
          {
            !this.props.isStarted ? (
              <Start startPressed={this.gameStart} soundEffect={soundEffect} />
            ) : (
              <Science {...this.props} gameStart={this.gameStart} soundEffect={soundEffect} backgroundMusic={backgroundMusic} objectList={objects} />
            )
          }
        </header>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
