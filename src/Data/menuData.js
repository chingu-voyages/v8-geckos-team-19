import hangmanImg from "../Assets/Images/Menu/hangman.svg";
import ticTacToeImg from "../Assets/Images/Menu/tic_tac_toe.svg";
import triviaImg from "../Assets/Images/Menu/trivia.svg";
import snakeImg from "../Assets/Images/Menu/snake.svg";

export default [
    {
        title: "Hangman",
        descr: "The classic word guessing game. Fill in the letters to guess the word in a limited number of guesses.",
        image: hangmanImg
    },
    {
        title: "Tic Tac Toe",
        descr: "The classic turn based pencil & paper game where either player wins by getting 3 X's or O's in a line.",
        image: ticTacToeImg
    },
    {
        title: "Snake",
        descr: "Another classic. Grow the snake by eating the apples and avoid colliding with yourself or the edges of the box.",
        image: snakeImg
    },
    {
        title: "Trivia Quiz",
        descr: "Test your general knowledge by answering the questions from the chosen categories.",
        image: triviaImg
    },
]
