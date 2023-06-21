import '../styles/Main.css';
import Card from "./Card";

function Main({cards, setCards}){
    const elements = [];
    const cardsCopy = [];
    cardsCopy.push(...cards);

    const clickHandler = (id) => {
        let array = openCard(cardsCopy, id);
        array = checkForOpenedCards(array);

        setCards([...array]);
    }

    function openCard(arr, id){
        return arr.map( el => {
            if (el.id === id){
                return {
                    ...el,
                    opened: !el.opened
                }
            }else{
                return el;
            }
        })
    }

    function guessCards(openedCards, closedCards){
        let cluedArray = openedCards.map( el => {
            return{
                ...el,
                opened: false,
                guessed: true
            }
        })
        return cluedArray.concat(closedCards).sort((a,b) => a.id - b.id);
    }

    function closeCards(openedCards, closedCards){
            let cluedArray = openedCards.map( el => {
                return{
                    ...el,
                    opened: false,
                    guessed: false
                }
            })
            return cluedArray.concat(closedCards).sort((a,b) => a.id - b.id);
    }

    function checkForOpenedCards(array){
        let openedCards = array.filter( el => el.opened === true);
        let closedCards = array.filter( el => el.opened === false);
        if (openedCards.length > 2) {
            return closeCards(openedCards, closedCards);
        }else if (openedCards[0]?.value === openedCards[1]?.value){
            return guessCards(openedCards, closedCards);
        }else {
            return array;
        }
    }


    cards.forEach( element => {
        elements.push(
            <Card
                key={element.id}
                id={element.id}
                value={element.value}
                opened={element.opened}
                guessed={element.guessed}
                clickHandler = {clickHandler}
            />
        )
    })
    return(
        <div className={'main'}>
            {elements}
        </div>
    )
}

export default Main;
