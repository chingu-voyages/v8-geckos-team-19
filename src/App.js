import React, { Component } from 'react';
import './App.css';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

class App extends Component {
  onChange = (input) => {
    console.log("Input changed", input);
  }

  onKeyPress = (button) => {
    console.log("Button pressed", button);
  }

  render() {
    return (
      <div className="App">
        <Keyboard
          onChange={input =>
            this.onChange(input)}
          onKeyPress={button =>
            this.onKeyPress(button)}
          layoutName={'letters'}
          layout={{
            'letters': [
              'q w e r t y u i o p',
              'a s d f g h j k l',
              'z x c v b n m'
            ]
          }}
        />
      </div>
    );
  }
}

export default App;
