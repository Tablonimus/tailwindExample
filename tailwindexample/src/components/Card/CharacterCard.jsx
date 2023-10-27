import React from "react";
import { Card } from "flowbite-react";

export default function CharacterCard({ character }) {
  return (
    <Card imgAlt="character" imgSrc={character.image}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {character.name}
      </h5>
    </Card>
  );
}
