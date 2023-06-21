import '../styles/GameSettings.css';
import {useEffect} from "react";

function GameSettings({numberOfCards, setNumberOfCards, setCards}){

    const cardsArray = [];

    function setNumber(e){
        e.preventDefault();

        const form = new FormData(e.target);
        const formJson = Object.fromEntries(form.entries());
        const valueToGenerate = formJson.value;
        setNumberOfCards(valueToGenerate);
    }

    //TODO Remove unnecessary useState

    function populateArray(){
        return Array.from({length: numberOfCards}, () => Math.floor(Math.random() * 100));
    }

    function shuffleArray(){
        let copyOfArray = [], n = cardsArray.length, i;

        while (n){
            i = Math.floor(Math.random() * cardsArray.length);

            if (i in cardsArray){
                copyOfArray.push(cardsArray[i]);
                cardsArray.splice(i, 1);
                n--;
            }
        }

        cardsArray.push(...copyOfArray);
    }

    function populateCards(){
        const data = [];
        cardsArray.forEach( (element, index) => {
            data.push({
                id: index,
                value: element,
                opened: false,
                guessed: false
            });
        });
        setCards([...data]);
    }

    useEffect(() =>{
            const populatedArray = populateArray();
            cardsArray.push(...populatedArray.concat(populatedArray));
            shuffleArray();
            populateCards();
    }, [numberOfCards]);

    return(
        <div className={'game-settings'}>
            Game Settings
            <form onSubmit={setNumber}>
                <input type="range" name={'value'} min={'6'} max={'14'} list={'dataList'} step={'2'} defaultValue={numberOfCards}/>
                <datalist id="dataList">
                    <option value="6" label="6">6</option>
                    <option value="8" label="8">8</option>
                    <option value="10" label="10">10</option>
                    <option value="12" label="12">12</option>
                    <option value="14" label="14">14</option>
                </datalist>
                <input type="submit" value={'Generate'}/>
            </form>
        </div>
    )
}

export default GameSettings;
