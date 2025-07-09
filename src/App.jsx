import "./App.css";
import Card from "./components/card.jsx";

function App() {
  return (
    <div>
      <div className="header">Pokemon Memory Card Game</div>
      <div className="card-container">
        <Card name="Pikachu" />
        <Card name="Ditto" />
        <Card name="Bulbasaur" />
        <Card name="Slowpoke" />
        <Card name="Psyduck" />
        <Card name="Dragonite" />
        <Card name="Squirtle" />
        <Card name="Charizard" />
        <Card name="Charmander" />
        <Card name="Gengar" />
        <Card name="Butterfree" />
        <Card name="Vaporeon" />
      </div>
    </div>
  );
}

export default App;
