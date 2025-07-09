import "./App.css";
import Card from "./components/card.jsx";

const cards = [
  {
    id: crypto.randomUUID(),
    name: "Pikachu",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Ditto",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Bulbasaur",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Slowpoke",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Psyduck",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Dragonite",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Squirtle",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Charizard",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Charmander",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Gengar",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Butterfree",
    wasClicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Vaporeon",
    wasClicked: false,
  },
];

function shuffleCards() {
  for (let i = cards.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}
shuffleCards();
function App() {
  return (
    <div>
      <div className="header">Pokemon Memory Card Game</div>
      <div className="card-container">
        {cards.map((cardItem) => {
          return <Card key={cardItem.id} name={cardItem.name} />;
        })}
      </div>
    </div>
  );
}

export default App;
