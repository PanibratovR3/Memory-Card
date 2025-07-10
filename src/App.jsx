import "./App.css";
import Card from "./components/card.jsx";
import pokemonCards from "./components/data.jsx";
import { useState } from "react";
import Header from "./components/header.jsx";
import GameBoard from "./components/gameBoard.jsx";

function shuffleCards(cards) {
  for (let i = cards.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function App() {
  const [memoryCards, setMemoryCards] = useState([
    ...shuffleCards(pokemonCards),
  ]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = (id) => {
    let memoryCardsCopy = [...memoryCards];
    const selectedCard = memoryCardsCopy.find(
      (memoryCard) => memoryCard.id === id
    );
    const selectedCardFlag = selectedCard.wasClicked;
    if (!selectedCardFlag) {
      selectedCard.wasClicked = !selectedCardFlag;
      setCurrentScore(currentScore + 1);
    } else {
      memoryCardsCopy = memoryCardsCopy.map((memoryCardItem) => {
        return {
          ...memoryCardItem,
          wasClicked: false,
        };
      });
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
    }
    setMemoryCards([...shuffleCards(memoryCardsCopy)]);
  };

  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <GameBoard>
        {memoryCards.map((cardItem) => {
          return (
            <Card
              key={cardItem.id}
              id={cardItem.id}
              name={cardItem.name}
              handlerClick={handleClick}
            />
          );
        })}
      </GameBoard>
    </div>
  );
}

export default App;
