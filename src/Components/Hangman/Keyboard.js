import React, {Component} from "react";
import Button from '../../Shared/UI/Button';

let currentGuess;

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.letterHandler = this.letterHandler.bind(this);
    }

    letterHandler = e => {
        currentGuess = e.target.getAttribute('data-letter');
        console.log('current guess is: ' + currentGuess);
    };

    render() {
        const alphabet = [
            'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
            'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
            'Z', 'X', 'C', 'V', 'B', 'N', 'M',
        ];

        const keyboard = alphabet.map((letter, index) => 
            <Button
                data-letter={letter} 
                key={index} 
                onClick={this.letterHandler}
            >{letter}</Button>
        );

        return (
            <>
                <div className="keyboard">
                    {keyboard}
                </div>
            </>
        )
    }
}