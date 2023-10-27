import React, { useState } from "react";
import CharacterCard from "../../components/Card/CharacterCard";
import { Spinner } from "flowbite-react";
import MyFooter from "../../components/Footer/MyFooter";
import MyNavBar from "../../components/MyNavBar/MyNavBar";

export default function Home({ characters }) {


  return (
    <div className="flex flex-col justify-between items-center  h-screen w-screen bg-[#1D93BD]">


      <MyNavBar />
      <main className="bg-blue-500 pt-32 p-10">
        <section className="flex flex-wrap gap-5 justify-center items-center">
          {characters ? (
            characters.map((character) => (
              <CharacterCard character={character} />
            ))
          ) : (
            <section className="flex justify-center items-center absolute w-screen h-screen bg-black/50 ">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </section>
          )}
        </section>
      </main>
      <MyFooter />
    </div>
  );
}
