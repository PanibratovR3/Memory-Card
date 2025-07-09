import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const results = useData("http://pokeapi.co/api/v2/pokemon/bulbasaur");
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
    <div>
      <img src={results} />
    </div>
  );
}

export default App;
