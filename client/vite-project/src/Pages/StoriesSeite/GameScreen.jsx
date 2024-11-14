import "../../Styles/storiesSeite/GameScreen.css";
import { useState, useEffect, useCallback } from "react";
import Icon from "../../Components/Icons";

function GameScreen({ scenarioTitle, onExit }) {
  const [text, setItems1] = useState([]);
  const [image, setItems2] = useState(``);
  const [load, setLoad] = useState(false);
  const [loadThis, setLoadThis] = useState(false);
  const [data2, setTitle] = useState(``);
  const [counter, setCounter] = useState(0);
  let localURL = "http://localhost:5000/api/";
  let onlineURL = "https://adventure.api.binarybears.net/api/";

  async function FetchData() {
    setTimeout(fetchText, 20000);
    setTimeout(fetchImage, 20000);
  }

  function fetchText() {
    fetch(`${localURL}text/${counter}`)
      .then((response1) => response1.json())
      .then((data1) => {
        setItems1(data1);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchImage() {
    fetch(`${localURL}image/${counter}`)
      .then((response4) => response4.json())
      .then((data4) => {
        setItems2(data4);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let data = { data2 };

  let options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  function maybePost() {
    console.log(image);
    console.log(text);
    console.log(data2);

    setItems1([]);
    setItems2(``);
    setLoad(false);
    setCounter((counter) => counter + 1);
    console.log(counter);
    post();
    setLoadThis(false);
    FetchData();
  }

  function maybePost1(vari) {
    setTitle(vari);
    console.log(vari);
    setItems1([]);
    setItems2(``);
    setLoad(false);
    setCounter((counter) => counter + 1);
    console.log(counter);
    post();
    setLoadThis(false);
    FetchData();
  }

  

  async function post() {
    let urlOption = `${localURL}option/0`;
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
    let urlImage = `${localURL}image/0`;
    try {
      fetch(urlImage, options)
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.log(error);
    }
  }

  function openLoad() {
    setLoad(true);
  }

  function Check() {
    if (!loadThis) {
      FetchData();
      setTimeout(openLoad, 20000);
      setLoadThis(true);
    }

    /*if (image && (text.text || text.option1) !== ``) {
      setLoad(true);
    } else {
      FetchData();
    }*/
  }

  

  if (load) {
    return (
      <>
      <div className="exit-button" onClick={onExit}>
          <Icon type="exit" />
        </div>
        <main className="main-gameScreen">
          <div className="game-screen"></div>
        <div className="story-content">
          <h2>{scenarioTitle}</h2>
          <img src={image} className="story-image" alt="fetch" />
          <p className="story-text">{text.text}</p>
          <div className="story-options">
            <p className="option">
              {text.option1}
            </p>
            <p className="option">
              {text.option2}
            </p>
            <p className="option">
              {text.option3}
            </p>
          </div>
          <div className="user-interaction">
            <input
              type="text"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Geben Sie Ihre Eingabe ein"
              id="userInput"
            />
            <div onClick={maybePost}>
              <Icon type="send" />
            </div>
          </div>
        </div>
        </main>
      </>
    );
  } else {
    return (
      <>
      <div className="exit-button" onClick={onExit}>
          <Icon type="exit" />
        </div>
        <main className="main-gameScreen">
          <div className="game-screen"></div>
        <div className="loading-overlay">
          <img
            src="/Logo/tia-logo.svg"
            className="loading-logo"
            alt="loading"
          />
        </div>
        {Check()}
        </main>
      </>
    );
  }
}

export default GameScreen;
