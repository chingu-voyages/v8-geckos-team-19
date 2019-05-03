import React, { Component } from "react";
import styled, { css } from "styled-components";
// import Button from "../../Shared/UI/Button";
import { spin360Shadow } from "../../Shared/animations";
import { RadioButtonGroup, Form } from "grommet";
import Button from '../../Shared/UI/Button';

const CatCard = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    width: 500px;
    box-shadow: 1px 1px 10px -3px;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    align-items: center;
    justify-content: space-between;
    height: 500px;
    background-color: ${props => props.cardColor};
    padding: 15px;
    box-sizing: border-box;
    ${props =>
        props.spin
            ? css`
                  animation: ${spin360Shadow} 0.5s
                      cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
              `
            : null};
`;

const ConfirmationMsg = styled.h1`
    text-align: center;
    color: ${props => props.color};
`

const cardColors = ["#e2ffc6", "#fff8c6", "#c6dcff", "#ffc6ff"];

export default class extends Component {
    state = {
        currentQuestion: 0,
        animateSpin: false,
        userAnswer: null,
        done: false,
        radioOptions: [],
        confirmCorrect: false,
        confirmIncorrect: false
    };

    decodedHTML = html => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };

    animNextQuestion = () => {
        this.setState({ confirmCorrect: false, confirmIncorrect: false, animateSpin: true }, () => {
            setTimeout(
                () =>
                    this.setState(({ currentQuestion }) => ({
                        currentQuestion: currentQuestion + 1
                    })),
                250
            );
            setTimeout(() => this.setState({ animateSpin: false }), 500);
        });
    };

    checkAns = (userAnswer, correctAnswer) => {
        if (userAnswer === correctAnswer) {
            console.log("correct");
            this.setState({confirmCorrect: true}, () => {
                if (this.state.currentQuestion < this.props.questions.length - 1)
                    setTimeout(() => this.animNextQuestion(), 5000)
                else this.setState({ done: true });
            })
        } else {
            this.setState({confirmIncorrect: true}, () => {
                if (this.state.currentQuestion < this.props.questions.length - 1)
                    setTimeout(() => this.animNextQuestion(), 5000)
                else this.setState({ done: true });
            })
        }
    };
    // keypressHandler = () => {
    //     return null;
    // }

    componentDidMount() {
        const optionValues = [
            ...this.props.questions[this.state.currentQuestion].incorrect_answers,
            this.props.questions[this.state.currentQuestion].correct_answer
        ].sort(() => Math.random() - 0.5);
        this.setState({radioOptions: optionValues})
        // window.addEventListener('keydown', this.keypressHandler);
    }

    componentDidUpdate(pP, pS) {
        if (pS.currentQuestion !== this.state.currentQuestion) {
            const optionValues = [
                ...this.props.questions[this.state.currentQuestion].incorrect_answers,
                this.props.questions[this.state.currentQuestion].correct_answer
            ].sort(() => Math.random() - 0.5);
            this.setState({radioOptions: optionValues})
        }
    }

    componentWillUnmount() {
        // window.removeEventListener('keydown', this.keypressHandler);
    }

    render() {
        const { questions } = this.props;
        const { currentQuestion, animateSpin, userAnswer, radioOptions, confirmCorrect, confirmIncorrect } = this.state;
        // const radioOptions = [
        //     ...questions[currentQuestion].incorrect_answers,
        //     questions[currentQuestion].correct_answer
        // ].sort(() => Math.random() - 0.5);
        const options = radioOptions.map((option, idx) => ({id: `${idx}-${option}`, value: option, label: option}));
        return (
            <>
                <CatCard
                    cardColor={cardColors[currentQuestion % 4]}
                    spin={animateSpin}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%"
                        }}
                    >
                        <h4 style={{ textAlign: "center" }}>
                            <span style={{ color: "red" }}>
                                Category:
                                <br />
                            </span>{" "}
                            {this.decodedHTML(
                                questions[currentQuestion].category
                            )}
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            <span style={{ color: "red" }}>
                                Difficulty:
                                <br />
                            </span>{" "}
                            {this.decodedHTML(
                                questions[currentQuestion].difficulty
                            )}
                        </h4>
                    </div>
                    <h2 style={{ textAlign: "center" }}>
                        {this.decodedHTML(questions[currentQuestion].question)}
                    </h2>
                    <Form
                        onSubmit={() =>
                            this.checkAns(
                                userAnswer,
                                questions[currentQuestion].correct_answer
                            )
                        }
                        style={{ alignSelf: "center" }}
                    >
                        <RadioButtonGroup
                            name={`Question ${currentQuestion}`}
                            options={options}
                            onChange={e => this.setState({userAnswer: e.target.value})}
                            value={userAnswer}
                        />
                        {!confirmCorrect && !confirmIncorrect &&
                            <Button style={{marginTop: 50}} type="submit">Submit Answer</Button>}
                    </Form>
                    {confirmCorrect && <ConfirmationMsg color='green' >Correct!</ConfirmationMsg>}
                    {confirmIncorrect && 
                        <div>
                            <ConfirmationMsg color='red' >Incorrect!</ConfirmationMsg>
                            <h4 style={{textAlign: 'center'}}>
                                The right answer was: <span style={{color: 'green'}} >{questions[currentQuestion].correct_answer}</span>
                            </h4>
                        </div>}
                </CatCard>
                {/* <Button onClick={this.animNextQuestion}>Next</Button> */}
            </>
        );
    }
}
