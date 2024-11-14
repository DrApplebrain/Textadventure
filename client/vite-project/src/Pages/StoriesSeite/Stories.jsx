import "../../Styles/storiesSeite/Stories.css";
import { useState } from "react";
import GameScreen from "./GameScreen";
import Icon from "../../Components/Icons";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import scenarios from "../../Scenarios/scenarios";
import ScenarioCard from "./ScenarioCard";
import { useNavigate } from "react-router-dom";
import useScenarioContext from "../../Scenarios/useScenarioContext";

function Stories({ setOriginPage }) {
  const [data1, setTitle] = useState();
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const { likeScenario, saveScenario } = useScenarioContext();
  const [customTitle, setCustomTitle] = useState("");

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

  const playScenario = (scenarioTitle) => {
    setOriginPage("stories");
    navigate(`/game/${encodeURIComponent(scenarioTitle)}`);
  };

  const startGame = (scenarioTitle) => {
    console.log({ scenarioTitle });

    let options = {
      method: "POST",
      body: JSON.stringify({ scenarioTitle }),
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

    playScenario(scenarioTitle);
  };

  function ShowSite() {
    if (!load) {
      return (
        <>
          <Header />
          <main className="main-Stories">
            <div className="stories-contents">
              <div className="create-scenario">
                <h2>Erstelle dein eigenes Szenario</h2>
                <input
                  type="text"
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Geben Sie Ihre Eingabe ein"
                  id="scenarioTitle"
                />
                <div onClick={() => onAccept()} className="play-icon">
                  <Icon type="play" />
                </div>
              </div>
              <div className="scenarios-list">
                {scenarios.map((scenario) => (
                  <ScenarioCard
                    key={scenario.id}
                    scenario={scenario}
                    onPlay={() => startGame(scenario.title)}
                    onLike={() => likeScenario(scenario.id)}
                    onSave={() => saveScenario(scenario.id)}
                    onShare={() => console.log(`Szenario ${scenario.id} geteilt`)}
                  />
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </>
      );
    }
    if (load) {
      return (
        <GameScreen scenarioTitle={data1} onExit={() => setLoad(false)} />
      );
    }
  }

  return (
    <>
      {ShowSite()}
    </>
  );
}

export default Stories;