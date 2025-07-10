import { useState, useEffect } from "react";
import "../styles/card.css";

function Card({ id, name, handlerClick }) {
  const results = useData(`http://pokeapi.co/api/v2/pokemon/${name}`);
  function useData(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json.sprites.other["official-artwork"].front_default);
          }
        });
      return () => {
        ignore = true;
      };
    }, [url]);
    return data;
  }

  return (
    <div className="card" onClick={() => handlerClick(id)}>
      <div className="image-placeholder">
        <img src={results} />
      </div>
      <div className="card-name">{name}</div>
    </div>
  );
}

export default Card;
