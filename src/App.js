import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import {useState} from "react";

function App() {
    const [numberOfCards, setNumberOfCards] = useState(6);
    const [cards, setCards] = useState([{
        id: 0,
        value: 0,
        opened: 0,
        guessed: 0
    }]);

  return (
      <>
      <Header
          numberOfCards={numberOfCards}
          setNumberOfCards={setNumberOfCards}
          cards={cards}
          setCards={setCards}
      />
      <Main
          cards={cards}
          setCards={setCards}
      />
      </>
  );
}

export default App;
