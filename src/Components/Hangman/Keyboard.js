import React, {Component} from "react";

export default class extends Component {
    constructor(props) {
        super(props);
        this.letterHandler = this.letterHandler.bind(this);
    }

    letterHandler = e => {
        console.log(e.target.getAttribute('data-letter')) 
    };

    render() {
        const alphabet = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R','S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        const keyboard = alphabet.map((letter, index) => 
            <button data-letter={letter} key={index} onClick={this.letterHandler}>{letter}</button>
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