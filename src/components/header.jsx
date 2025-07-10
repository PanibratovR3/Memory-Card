import pokemonCards from "./data.jsx";

import "../styles/header.css";
function Header({ currentScore, bestScore }) {
  return (
    <div className="header-container">
      <div className="header">Pokemon Memory Card Game</div>
      <div className="description">
        Get your points by clicking on the cards, but only without repetition.
      </div>
      <div className="header-row">
        <div className="current-score">Current Score: {currentScore}</div>{" "}
        <div className="best-score">Best Score: {bestScore}</div>
      </div>
      <div className="win">
        {currentScore === pokemonCards.length && "Nice memory! ;-)"}
      </div>
    </div>
  );
}

export default Header;
