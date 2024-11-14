import { useState } from "react";
import PropTypes from "prop-types";
import useScenarioContext from "../Scenarios/useScenarioContext";
import scenarios from "../Scenarios/scenarios";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import "../Styles/Profile.css";
import Icon from "../Components/Icons";

const Profile = ({
  setOriginPage,
  isLoggedIn,
  userName,
  userEmail,
  onLogout,
}) => {
  const { likedScenarios, savedScenarios, removeLike, removeFavorite } =
    useScenarioContext();
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const getScenarioDetails = (id) =>
    scenarios.find((scenario) => scenario.id === id) || {};

  //
  const playScenario = (scenarioId, scenarioTitle) => {
    setOriginPage("profile");
    navigate(`/game/${scenarioId}/${encodeURIComponent(scenarioTitle)}`);
  };

  const handleShare = (scenarioId) => {
    const url = `${window.location.origin}/game/${scenarioId}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link zum Szenario wurde kopiert!");
    });
  };
  //

  const handleContactSubmit = (message) => {
    console.log("Kontakt Nachricht:", message);
  };

  return (
    <main className="main-profile">
      <div className="user-info">
        {!isLoggedIn ? (
          <h3>Melde dich an, um die volle Funktion der Seite zu bekommen.</h3>
        ) : (
          <>
            <h3>Hallo</h3>
            <h2>Kai</h2>
            <p>Du bist mit: kai.chr1995@outlook.de angemeldet.</p>
          </>
        )}
      </div>

      <div className="button-container">
        {!isLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/register")}
              className="an-abmelden-toggle-button"
            >
              Anmelden
            </button>
          </>
        ) : (
          <>
            <button onClick={onLogout} className="an-abmelden-toggle-button">
              Abmelden
            </button>
          </>
        )}
        <button
          onClick={() => toggleSection("likes")}
          className="an-abmelden-toggle-button"
        >
          Likes
        </button>
        <button
          onClick={() => toggleSection("favorites")}
          className="an-abmelden-toggle-button"
        >
          Favoriten
        </button>
        <button
          onClick={() => toggleSection("contact")}
          className="an-abmelden-toggle-button"
        >
          Kontakt
        </button>
      </div>

      <div className="content-container">
        {activeSection === "likes" && (
          <div className="scenario-container">
            {likedScenarios.length > 0 ? (
              likedScenarios.map((id, index) => {
                const { title, description, image } = getScenarioDetails(id);
                return (
                  <div key={index} className="scenario">
                    <img src={image} alt={title} className="scenario-image" />
                    <div className="scenario-details">
                      <h4>{title}</h4>
                      <div className="button-group">
                        <div onClick={() => playScenario(id, title)}>
                          <Icon type="play" />
                        </div>
                        <div onClick={() => handleShare(id)}>
                          <Icon type="share" />
                        </div>
                        <div onClick={() => removeLike(id)}>
                          <Icon type="delete" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Keine gelikten Szenarien.</p>
            )}
          </div>
        )}

        {activeSection === "favorites" && (
          <div className="scenario-container">
            {savedScenarios.length > 0 ? (
              savedScenarios.map((id, index) => {
                const { title, description, image } = getScenarioDetails(id);
                return (
                  <div key={index} className="scenario">
                    <img src={image} alt={title} className="scenario-image" />
                    <div className="scenario-details">
                      <h4>{title}</h4>
                      <p>{description}</p>
                      <div className="button-group">
                        <div onClick={() => playScenario(id, title)}>
                          <Icon type="play" />
                        </div>
                        <div onClick={() => handleShare(id)}>
                          <Icon type="share" />
                        </div>
                        <div onClick={() => removeFavorite(id)}>
                          <Icon type="delete" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Keine gespeicherten Szenarien.</p>
            )}
          </div>
        )}

        {activeSection === "contact" && (
          <Contact onSubmit={handleContactSubmit} />
        )}
      </div>
    </main>
  );
};

Profile.propTypes = {
  setOriginPage: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

export default Profile;
