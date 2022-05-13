import React from 'react';
import Button from '../components/Button';
// import Input from '../components/Input';
import { Session } from '../utils/storage'
import ReactTypingEffect from 'react-typing-effect';
import getURLParams from '../utils/getURLParams';


class Start extends React.Component {

    state = {
        player: "player",
        startGameSound: new Audio(this.props.soundEffect[3]),
    }

    setNameOfPlayer = (event) => {
        this.setState({ player: event.target.value })
    }
    

    clicked = () => {
        Session.set("onlinePlayer", this.state.player)
        this.state.startGameSound.pause()
        

        this.props.startPressed();
    }
    startGamePromptEnglish = "Press to start the game"
    startGamePromptUrdu = "گیم شروع کرنے کے لیے بٹن دبائیں۔"

    startEnglish = "Start"
    startUrdu = "شروع کریں"
    render() {
        this.state.startGameSound.play()
        return (
            <div >
                <div className="App-brandname">
                    <i className="fas fa-graduation-cap"></i>
                    <br />
                </div>
                <p>
                    {getURLParams.lang == 'u' ? this.startGamePromptUrdu : this.startGamePromptEnglish}
                </p>
                <Button isClicked={this.clicked}>{getURLParams.lang == 'u' ? this.startUrdu : this.startEnglish}</Button>
            </div>
        )
    }
}
export default Start;