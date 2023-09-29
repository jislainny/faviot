import React, { useState } from "react";
import styles from "./Conteudo.module.css";

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  function salvarFavorito() {
    setFavoritos([...favoritos, { nomeSite, url }]);

    localStorage.setItem("favorito", JSON.stringify({ favoritos }));
  }

  return (
    <>
      <ul>
        {favoritos[0] !== undefined &&
          favoritos.map((favorito) => (
            <li>{favorito.nomeSite} : {favorito.url}</li>
          ))}
      </ul>
      <div className={styles.area}>
        <h1>Conteudo</h1>
        <form className={styles.formulario}>
          <h1>{nomeSite}</h1>
          <input
            name="nome_site"
            onChange={(evento) => {
              setNomeSite(evento.target.value);
              console.log(nomeSite);
            }}
          ></input>
          <br />
          <label>URL</label>
          <input
            type="url"
            name="url"
            onChange={(evento) => {
              setUrl(evento.target.value);
            }}
          ></input>
          <br />
          <input
            type="button"
            value="Salvar"
            onClick={() => salvarFavorito()}
          />
        </form>
      </div>
    </>
  );
};

export default Conteudo;
