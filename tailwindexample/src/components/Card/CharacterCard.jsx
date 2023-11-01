import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  console.log("DATOS DEL PERSONAJE", character);

  return (
    <Link to={`/character/${character.id}`} className="hover:opacity-70  ">
      <Card imgAlt="character" imgSrc={character.image}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {character.name}
        </h5>
      </Card>
    </Link>
  );
}
