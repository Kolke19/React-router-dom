import React from "react";
import { useState, useEffect } from "react"; // realizar una peticion asincrona en react
import { useParams } from "react-router-dom";
const Character = () => {
  const API_URL = "https://rickandmortyapi.com/api/character";

  const [character, setCharacter] = useState(null);

  const [loading, setLoading] = useState(true); // si esto esta en false, en la linea 30 no tiene en cuenta el if ?

  const { id } = useParams();

  const getCharacter = async () => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    console.log(data);
    setCharacter(data);
    setLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <>
          <h1>{character?.name}</h1> //Esto se leeria como si existe la entidad
          character, mostra la image, si no no la mostes, nos sirve como un if
          <img src={character?.image}></img>
        </>
      )}
    </div>
  );
};

export default Character;
