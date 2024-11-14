import "../Styles/Test-Gamescreen.css";
import { useState } from "react";
import Fetch from "./Fetch";

function Gamescreen() {
  const [data1, setTitle] = useState();
  const [load, setLoad] = useState(false);

  function Load() {
    setLoad(true);
  }

  function onAccept() {
    console.log({ data1 });

    let options = {
      method: "POST",
      body: JSON.stringify({ data1 }),
      headers: {
        "Content-type": "application/json",
      },
    };
    Load();
    post();

    async function post() {
      let urlOption = `http://localhost:5000/api/option/0`;
      try {
        fetch(urlOption, options)
          .then((response) => response.json())
          .then((json) => console.log(json));
        post2();
      } catch (error) {
        console.log(error);
      }
    }

    async function post2() {
      let urlImage = `http://localhost:5000/api/image/0`;
      try {
        fetch(urlImage, options)
          .then((response) => response.json())
          .then((json) => console.log(json));
      } catch (error) {
        console.log(error);
      }
    }
  }

  function ShowSite() {
    if (!load) {
      return (
        <>
          <div className="post">
          <h2>Erstelle dein eigenes Szenario</h2>
            <input
              type="text"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Geben Sie Ihre Eingabe ein"
            />
            <button onClick={() => onAccept()} className="t-button">
              PLAY
            </button>
          </div>
        </>
      );
    }
    if (load) {
      return (
        <>
          <Fetch scenarioTitle={data1} onExit={() => setLoad(false)} />
        </>
      );
    }
  }

  return (
    <>
      {ShowSite()}
    </>
  );
}

export default Gamescreen;