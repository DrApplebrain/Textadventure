import { useState } from "react";
import PropTypes from "prop-types";
import "../../Styles/storiesSeite/ScenarioCard.css";
import Icon from "../../Components/Icons";

const ScenarioCard = ({ scenario, onLike, onSave, onPlay }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike();
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave();
  };

  const handleShare = (scenarioId) => {
    const url = `${window.location.origin}/game/${scenarioId}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link zum Szenario wurde kopiert!");
    });
  };

  return (
    <div
      className="scenario-card"
      style={{
        backgroundImage: `url(${
          scenario.image || "/Scenarios-Images/placeholder.jpg"
        })`,
      }}
    >
      <div className="scenario-header">
        <img className="scenario-logo" src="/Logo/tia-logo.svg" alt="Logo" />
        <div
          className="scenario-share"
          onClick={() => handleShare(scenario.id)}
        >
          <Icon type="share" />
        </div>
      </div>
      <div className="scenario-content">
        <h3>{scenario.title}</h3>
      </div>
      <div className="scenario-actions">
        <div onClick={handleLike}>
          <Icon type="heart" style={{ color: isLiked ? "red" : "inherit" }} /> 
        </div>
        <div onClick={handleSave}>
          <Icon type="save" style={{ color: isSaved ? "blue" : "inherit" }} />
        </div>
        <div onClick={onPlay}>
          <Icon type="play" />
        </div>
      </div>
    </div>
  );
};

ScenarioCard.propTypes = {
  scenario: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onLike: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
};

export default ScenarioCard;