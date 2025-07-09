import "./App.css";
import Card from "./components/card.jsx";
import pokemonCards from "./components/data.jsx";
import { useState } from "react";

function shuffleCards(cards) {
  for (let i = cards.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function App() {
  const [memoryCards, setMemoryCards] = useState(shuffleCards(pokemonCards));
  // const [selectedID, setSelectedID] = useState(null);
  return (
    <div>
      <div className="header">Pokemon Memory Card Game</div>
      <div className="card-container">
        {memoryCards.map((cardItem) => {
          return <Card key={cardItem.id} name={cardItem.name} />;
        })}
      </div>
    </div>
  );
}

export default App;
