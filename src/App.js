import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [genero, setGenero] = useState("o");

  return (
    <>
      <main>
        <label>Digite seu nome: </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label>Digite seu sobrenome: </label>
        <input
          type="text"
          value={sobreNome}
          onChange={(e) => setSobreNome(e.target.value)}
        />
        <label>Selecione seu gênero</label>
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value={"o"}>Masculino</option>
          <option value={"a"}>Feminino</option>
        </select>

        <p>
          Bem vind{genero}, {nome} {sobreNome}
        </p>
      </main>
    </>
  );
}
