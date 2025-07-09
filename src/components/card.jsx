import { useState, useEffect } from "react";
import "../styles/card.css";

function Card({ name }) {
  const results = useData(`http://pokeapi.co/api/v2/pokemon/${name}`);
  function useData(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            console.log(json);
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
    <div className="card">
      <div className="image-placeholder">
        <img src={results} alt={name} />
      </div>
      <div>{name}</div>
    </div>
  );
}

export default Card;
