import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './Simon.css';

// This is the same css as for the Individual games containers. Should be shared - under layout component or something
// const GameWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     box-sizing: border-box;
// `

class Simon extends React.Component {

    constructor(props)
    {
      super(props);

      this.state = {
        greenColor: 'grey',
        redColor: 'grey',
        yellowColor: 'grey',
        blueColor: 'grey',
        totalCount: 0,
        probability: ['#greenButton', '#redButton', '#yellowButton', '#blueButton'],
        currentPlay: [],
        player: [],
        beep: {},
        gameMode: false
      }

      this.changeGreenColor = this.changeGreenColor.bind(this);
      this.changeRedColor = this.changeRedColor.bind(this);
      this.changeYellowColor = this.changeYellowColor.bind(this);
      this.changeBlueColor = this.changeBlueColor.bind(this);

      this.reset = this.reset.bind(this);

      this.newRound = this.newRound.bind(this);
      this.resetRound = this.resetRound.bind(this);
      this.addCount = this.addCount.bind(this);
      this.action = this.action.bind(this);
      this.startPlaying = this.startPlaying.bind(this);
      this.clearGamer = this.clearGamer.bind(this);
      this.addToGamer= this.addToGamer.bind(this);
      this.playerRound = this.playerRound.bind(this);

      this.addToGame = this.addToGame.bind(this);
    }

    addToGame(){
    }

    addCount(){
      this.setState({
          totalCount: this.state.totalCount + 1
      })
    }

    resetRound(){
      this.setState({
          currentPlay: [],
          totalCount: 0
      })

      this.addCount();
    }

    newRound(){
      this.resetRound();
    }

    reset(){
      this.setState({
        greenColor: 'grey',
        redColor: 'grey',
        yellowColor: 'grey',
        blueColor: 'grey'
      })
    }

    action(){
      this.setState({
        currentPlay: this.state.currentPlay.push(this.state.probability[(Math.floor(Math.random() * 4))])
      });

      this.displayActions();
    }

    displayActions(){
      let increment = 0;

      let actions = setInterval(function(){
            this.startPlaying(this.state.currentPlay[increment]);
            increment++;

            if (increment >= this.state.currentPlay.length)
            {
              clearInterval(actions);
            }
      },800);
    }

    startPlaying(element){
      alert('Game has started');
      // Add light
      // Add sound
      // Remove light
    }

    clearGamer(){
      this.setState({
        currentPlay: []
      })
    }

    addToGamer(id){
      let element = "#" + id;
      alert("Element is " + element);
      let newArray = this.state.player;
      newArray.push(id);

      this.playerRound(id);

      alert('Adding');
    }

    playerRound(i){
        // alert(this.state.player[this.state.player.length - 1]);

        let length = this.state.player.length - 1;
        //this.state.player[length];
        alert(length);
        alert(this.state.player.length - 1);
        alert(this.state.player);
        //console.log(this.state.player);

        // if(this.state.player[this.state.player.length - 1] !== this.state.currentPlay[this.player.length - 1]){
        //   alert('Try again');
        // }
        // else {
        //   alert('Keep it up');
        // }
    }

    changeGreenColor(){
      this.setState({
        greenColor: 'green'
      })

      setTimeout(this.reset, 1000);
    }

    changeRedColor(){
      this.setState({
        redColor: 'red'
      })

      setTimeout(this.reset, 1000);
    }

    changeYellowColor(){
      this.setState({
        yellowColor: 'yellow'
      })

      setTimeout(this.reset, 1000);
    }

    changeBlueColor(){
      this.setState({
        blueColor: 'blue'
      })

      setTimeout(this.reset, 1000);
    }

    render() {
        return(
          <div className="grid-container">
            <div className="grid-item"><button id="greenButton" className="simonButton" onClick={() => {this.addToGamer("greenButton") }} style={{backgroundColor: this.state.greenColor}}>Green</button></div>
            <div className="grid-item"></div>
            <div className="grid-item"><button id="redButton" className="simonButton" onClick={() => {this.addToGamer("redButton") }}  style={{backgroundColor: this.state.redColor}}>Red</button></div>
            <div className="grid-item"></div>
            <div className="grid-item"><div className="centerButton"> Simon </div></div>
            <div className="grid-item"></div>
            <div className="grid-item"><button id="yellowButton" className="simonButton" onClick={() => {this.addToGamer("yellowButton") }}  style={{backgroundColor: this.state.yellowColor}}>Yellow</button></div>
            <div className="grid-item"></div>
            <div className="grid-item"><button id="blueButton" className="simonButton" onClick={() => {this.addToGamer("blueButton") }}  style={{backgroundColor: this.state.blueColor}}>Blue</button></div>
          </div>
        );
    }
}

export default Simon;
