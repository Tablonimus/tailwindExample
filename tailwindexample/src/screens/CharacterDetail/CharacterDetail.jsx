import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detailStyles.css";
import MyNavBar from "../../components/MyNavBar/MyNavBar";
import MyFooter from "../../components/Footer/MyFooter";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null); //{.....}

  async function getCharacterDetail(id) {
    let data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    let response = await data.json();
    setCharacter(response);
  }

  useEffect(() => {
    getCharacterDetail(id);
  }, []);

  console.log("DETALLE DEL PERSONAJE", character);

  return (
    <div>
      <MyNavBar />
      <div className="w-screen h-screen flex bg-blue-500">
        <section className=" flex flex-col justify-center items-center w-1/2 gap-4 p-4">
          {character && character.image ? (
            <img
              src={character?.image} //
              alt="image"
              id="section-1"
              className="w-1/2 object-cover rounded-2xl"
            />
          ) : (
            <div className="w-full h-96 bg-gray-50">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
          )}
          <span className="text-3xl font-bold">{character?.name}</span>
        </section>
        <section className="flex flex-col justify-center items-center w-1/2 gap-4">
          <span className="text-3xl font-bold">
            Estado: {character?.status}
          </span>
          <span className="text-3xl font-bold">
            Especie: {character?.species}
          </span>
          <span className="text-3xl font-bold">
            Género: {character?.gender}
          </span>
          <span className="text-3xl font-bold">
            Origen: {character?.origin.name}
          </span>
          <span className="text-3xl font-bold">
            Ubicación: {character?.location.name}
          </span>
        </section>
      </div>
      <MyFooter />
    </div>
  );
}
