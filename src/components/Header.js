import '../styles/Header.css'
import GameSettings from "./GameSettings";

function Header({numberOfCards, setNumberOfCards, cards, setCards}){
    return(
        <div className={'header'}>
            Header
            <GameSettings
                numberOfCards={numberOfCards}
                setNumberOfCards={setNumberOfCards}
                cards={cards}
                setCards={setCards}
            />
        </div>
    )
}

export default Header;
