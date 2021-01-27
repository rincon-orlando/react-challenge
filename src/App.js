import React from "react";
import "./styles.css";
import { PokeCard } from "./components/PokeCard";
import { mockPokemonData as pokeData } from "./mock/pokeData";

export default function App() {
  return (
    <div className="App">
      <PokeCard
        name={pokeData.name}
        img_default={pokeData.sprites.front_default}
        img_shiny={pokeData.sprites.front_shiny}
        video={pokeData.video}
      />
    </div>
  );
}
