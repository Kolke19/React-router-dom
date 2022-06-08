import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Character from "./Character";

const RickAndMorty = () => {
  const API_URL = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  // funcion asincrona para hacer la peticion de datos
  const getCharacters = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data);
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []); //recibe 2 parametros que son un callback y una dependencia: son como un listeners (escuchan cambios en el estado)
  //cuando haya un cambio en el estado que nos interese se ejkecuta el cb
  return (
    <div>
      <h1>This is Rick and Morty</h1>
      <div>
        {characters.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {characters.map(({ id, name }) => (
              <li key={id}>
                <Link to={`/rick-and-morty/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RickAndMorty;
