import React, {Component} from 'react';
import styled from 'styled-components';
import Button from "../../Shared/UI/Button";


const CardVisibleWindow = styled.div`
    position: relative;
    display: block;
    width: 300px;
    height: 300px;
    overflow: hidden;
    box-shadow: 1px 1px 10px -3px;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
`

const CardCarousel = styled.div`
    display: flex;
    height: 100%;
    width: ${props => props.width}px;
    margin-left: ${props => props.leftMargin};
    transition: margin-left 0.5s ease-in-out;
`

const CatCard = styled(CardVisibleWindow)`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 300px;
    width: ${props => props.size || '300px'};
    background-color: ${props => props.cardColor};
    padding: 15px;
    box-sizing: border-box;
    box-shadow: none;
    border-radius: 0px;
`

const CarouselBtn = styled.button.attrs({
    type: "button"
}
)`
    padding: 8px;
    background-color: transparent;
    outline: none;
    color: #3e70c1;
    font-size: 1.3rem;
    font-family: inherit;
    border: none;
    cursor: pointer;
    ${props => props.left? 'transform: rotate(180deg);': null}
    &:hover {
        transform: scale(1.2) ${props => props.left? 'rotate(180deg)': null};
    }
    transition: transform 0.2s ease-in-out;
`
const cardColors = [
    '#e2ffc6',
    '#fff8c6',
    '#c6dcff',
    '#ffc6ff'
]

const validKeyPresses = new Set([
    "ArrowLeft",
    "ArrowRight",
    "Enter"
    ]
)

export default class extends Component {

    state = {
        displayedCat: 0
    }
    
    scrollCatHandler = (direction) => {
        const {categories} = this.props;
            this.setState(({displayedCat}) => (
                {displayedCat: (direction === 'ArrowRight')
                    ? (displayedCat < categories.length - 1)
                        ? displayedCat + 1
                        : 0
                    : (displayedCat > 0)
                        ? displayedCat - 1
                        : categories.length - 1}))
    }

    keyPressHandler = (e) => {
        console.log(e.key);
        console.log(validKeyPresses.has(e.key));
        if (!(validKeyPresses.has(e.key))) return null;
        if (e.key === "Enter") {
            this.props.setCatId(this.state.displayedCat + 9)
        } else {
            this.scrollCatHandler(e.key)
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyPressHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyPressHandler)
    }

    render() {
        const {categories, setCatId} = this.props;
        const {displayedCat} = this.state;

        return (
            <>
            <h1>Choose a Category:</h1>
            <CardVisibleWindow>
                <CardCarousel width={categories.length * 300} leftMargin={`${displayedCat * -1 * 300}px`}>
                    {categories.map((cat, idx) =>
                        <CatCard cardColor={cardColors[idx%4]} key={cat.id}>
                            <h1 style={{textAlign: 'center'}}>
                                <span style={{display: 'inline-block', padding: '0px 5px', border: '3px solid black', borderRadius: '50%'}}>{idx + 1}</span>
                                <br/>{cat.name}
                            </h1>
                        </CatCard> )}
                </CardCarousel>
                <div style={{display: 'flex', width: '100%', padding: '0px 15px', boxSizing: 'border-box', justifyContent: 'space-between', position: 'absolute', bottom: '10px', left: '0px'}}>
                    <CarouselBtn onClick={() => this.scrollCatHandler('prev')} left>▶</CarouselBtn>
                    <Button onClick={() => setCatId(displayedCat+9)}>Select</Button>
                    <CarouselBtn onClick={() => this.scrollCatHandler('ArrowRight')}>▶</CarouselBtn>
                </div>
            </CardVisibleWindow>
            </>
        )
    }
}