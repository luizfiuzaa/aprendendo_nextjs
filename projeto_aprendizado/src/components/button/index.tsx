"use client";

import { useState } from "react";

export function Button() {
  const [nome, setNome] = useState("Dummy Name");

  function handleChangeName() {
    setNome("Houdini");
  }

  return (
    <div>
      <button onClick={handleChangeName}>Alterar Nome</button>
      <h3>Nome: {nome}</h3>
    </div>
  );
}
