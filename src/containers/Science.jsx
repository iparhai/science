import React from 'react';
import Beginning from "../components/Beginning";
import Quiz from "../components/Quiz";
import Done from "../components/Done";
import Timmer from '../components/Timmer';
import Lifes from '../components/Lifes'
import Points from '../components/Points'
import "./Science.css"
import TableScore from '../components/TableScore';
import Loader from '../components/loader';
import Hints from '../components/Hints';
import GlobalState from '../components/HintsContext';
import { useEffect } from 'react';
import getAsset from '../utils/getAsset';
import getURLParams from '../utils/getURLParams';


export default function Science(props) {

  const [isBeginningDone, setIsBeginningDone] = React.useState(false)
  const [isLoadingDone, setIsLoadingDone] = React.useState(false)
  const [lastPoints, setLastPoints] = React.useState(0)
  const [sound, setDound] = React.useState(new Audio(props.backgroundMusic))
  const [mute, setMute] = React.useState(false)
  const [provider, setProvider] = React.useState("")

  const retryGame = () => {
    setIsBeginningDone(false)
    props.onRetryGame();
  }
  useEffect(() => {
    console.log("this is the provider ????? " + provider)
  }, [provider])
  const completeBeginning = () => {
    setIsBeginningDone(true)
  };
  const completeLoading = () => {
    setIsLoadingDone(true)
  }

  const handleSoundClick = () => {
    if (!sound.paused) {
      sound.pause()
      setMute(true)
    }
    else if (sound.paused) {
      sound.play()
      setMute(false)
    }
  }
  return (
    !props.isFinished ? (
      <GlobalState.Provider value={[provider, setProvider]}>
        <div>
          {!isLoadingDone ? <Loader isComplete={completeLoading} /> : !isBeginningDone ? (
            <Beginning isComplete={completeBeginning} soundEffect={props.soundEffect} />
          ) : (
            <div className="noselect ">
              <div className="App-header-bar">
                <span onClick={handleSoundClick}>
                  {mute ? <i className="fas fa-volume-mute" /> : <i className="fa fa-volume-up " />}
                </span>
                <Timmer {...props} />
                <Lifes {...props} />
                <Points {...props} />
                {getURLParams.learn == "1" ? <Hints soundEffect={props.soundEffect} /> : null}
              </div>
              <div>
                <Quiz {...props} objectList={props.objectList} soundEffect={props.soundEffect} />
              </div>
            </div>
          )}
        </div>
      </GlobalState.Provider>
    ) : (

      <Done {...props} retryGame={retryGame} isUrdu={props.isUrdu} >
        <TableScore {...props} />
      </ Done>
    )
  )
}
