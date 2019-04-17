import Trivia from 'trivia-api';
import React, {Component} from 'react';
import styled from 'styled-components';
import { fadeZoomIn } from '../../Shared/animations';
import LoadingAnimation from "../../Shared/UI/LoadingAnimation";
import Button from "../../Shared/UI/Button";
import CatCarousel from "../../Components/Trivia/CatCarousel";
import Questions from "../../Components/Trivia/Questions";

const trivia = new Trivia({ encoding: 'url3986' });

const GameWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    animation: ${fadeZoomIn} 0.3s ease-in-out;
`


export default class extends Component {

    state = {
        loadingCats: null,
        loadingQuestions: null,
        fetchError: null,
        categories: null,
        categoryId: null,
        questions: null,
        activeDisplay: 'categories'
    }
    
    fetchCategories = async () => {
        this.setState({loadingCats: true, fetchError: false});

        const getCategories = () => trivia.getCategories()
        
        try {
            const categories = await getCategories();
            console.log(categories);
            this.setState({categories: categories.trivia_categories}, () => this.setState({loadingCats: false}));
        } catch (error) {
            this.setState({fetchError: error}, () => this.setState({loadingCats: false}))
        }
    }

    setCatId = (id) => this.setState({categoryId: id, activeDisplay: 'questions'}, this.fetchQuestions);

    fetchQuestions = async () => {
        let options = {
            // type: 'boolean',
            amount: 10,
            category: this.state.categoryId
            // difficulty: 'hard'
        };
        this.setState({loadingQuestions: true, fetchError: false});

        const getQuestions = () => trivia.getQuestions(options)
        
        try {
            const questions = await getQuestions();
            console.log(questions)
            this.setState({questions: questions.results}, () => this.setState({loadingQuestions: false}));
        } catch (error) {
            this.setState({fetchError: error}, () => this.setState({loadingQuestions: false}))
        }
    }

    componentDidMount() {
        this.fetchCategories();
    }
    
    render() {
        const {loadingCats, loadingQuestions, fetchError, categories, questions, activeDisplay} = this.state;

        let mainDisplay = () => {
            if (loadingCats && activeDisplay === 'categories') return <LoadingAnimation fullHeight>Fetching Categories...</LoadingAnimation>
            if (loadingQuestions && activeDisplay === 'questions') return <LoadingAnimation fullHeight>Fetching Questions...</LoadingAnimation>
            if (fetchError) return (
            <>
                <h1>There was a problem in fetching the ${activeDisplay}.</h1>
                <Button onClick={this.btnHandler}>Try Again?</Button>
            </>
            )
            if (categories && activeDisplay === 'categories') {
                return <CatCarousel categories={categories} setCatId={this.setCatId}/>
            }
            if (questions && activeDisplay === 'questions') {
                return  <Questions questions={questions}/>
            }
        }


        return (
            <GameWrapper>
                {mainDisplay()}
            </GameWrapper>
        )
    }
}