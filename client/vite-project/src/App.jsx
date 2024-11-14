import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import Forum from "./Pages/Forum";
import ThemenAnsicht from "./Pages/ThemenAnsicht";
import PropTypes from "prop-types";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Stories from "./Pages/StoriesSeite/Stories";
import GameScreen from "./Pages/StoriesSeite/GameScreen";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NoHeaderFooterLayout from "./Components/NoHeaderFooterLayout";
import { ScenarioProvider } from "./Scenarios/ScenarioContext";
// import TestGameScreen from "./Pages/Test-GameScreen"; // Korrigierter Importpfad

function App() {
  const [originPage, setOriginPage] = useState("stories");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserName("BeispielName"); // Ersetzen mit echter Logik
    setUserEmail("beispiel@beispiel.com"); // Ersetzen echter Logik
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setUserEmail("");
  };

  return (
    <ScenarioProvider>
      <Router>
        <Routes>
          <Route
            path="/game/:scenarioId/:scenarioTitle"
            element={
              <NoHeaderFooterLayout>
                <GameScreenWrapper originPage={originPage} />
              </NoHeaderFooterLayout>
            }
          />
          <Route
            path="/register"
            element={!isLoggedIn && <Register onLogin={handleLogin} />}
          />
          {/* <Route
            path="/test-game"
            element={<TestGameScreen />} // Route für die Test-GameScreen-Komponente
          /> */}
          <Route
            path="/stories"
            element={<Stories setOriginPage={setOriginPage} />}
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/forum" element={<Forum />} />
                  <Route path="/thread/:topicId" element={<ThemenAnsicht />} />
                  <Route
                    path="/profile"
                    element={
                      <Profile
                        setOriginPage={setOriginPage}
                        isLoggedIn={isLoggedIn}
                        userName={userName}
                        userEmail={userEmail}
                        onLogout={handleLogout}
                      />
                    }
                  />
                  <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </ScenarioProvider>
  );
}

const GameScreenWrapper = ({ originPage }) => {
  const navigate = useNavigate();
  const { scenarioId, scenarioTitle } = useParams();

  const exitGame = () => {
    navigate(`/${originPage}`);
  };

  return (
    <GameScreen
      scenarioId={scenarioId}
      scenarioTitle={decodeURIComponent(scenarioTitle)}
      onExit={exitGame}
    />
  );
};

GameScreenWrapper.propTypes = {
  originPage: PropTypes.string.isRequired,
};

export default App;