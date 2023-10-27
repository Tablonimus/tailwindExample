import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./screens/Error404/Error404";
import Home from "./screens/Home/Home";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null);//[]

  async function getCharacters() {
    let data = await fetch("https://rickandmortyapi.com/api/character");
    let response = await data.json();
    setCharacters(response.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);




  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home  characters={characters}/>} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
