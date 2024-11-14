import { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Icon from "../Components/Icons";
import "../Styles/Register.css";

const Register = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isRegistrationMode, setRegistrationMode] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistrationMode) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwörter stimmen nicht überein!");
        return;
      }
      console.log("Mock Registrierung abgeschlossen:", formData);
    } else {
      console.log("Mock Login abgeschlossen:", formData);
    }

    // Simulate successful login
    onLogin();
    alert(`Erfolgreich ${isRegistrationMode ? "registriert" : "angemeldet"}.`);
    navigate('/');
  };

  const handleSocialLogin = (platform) => {
    console.log(`${platform} login gestartet`);
    // Simulate successful login
    onLogin();
    alert(`Erfolgreich mit ${platform} angemeldet.`);
    navigate('/profile');
  };

  return (
    <main className="main-register">
      <div className="register-content">
        <h1>{isRegistrationMode ? "Registrieren" : "Anmelden"}</h1>
        <div className="social-login">
          <div onClick={() => handleSocialLogin("Google")}>
            <Icon type="google" />
          </div>
          <div onClick={() => handleSocialLogin("Facebook")}>
            <Icon type="facebook" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {isRegistrationMode && (
            <div>
              <label htmlFor="usernameReg">Benutzername:</label>
              <input
                type="text"
                id="usernameReg"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                autoComplete="username"
              />
            </div>
          )}
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password">Passwort:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete={isRegistrationMode ? "new-password" : "current-password"}
            />
          </div>
          {isRegistrationMode && (
            <div>
              <label htmlFor="confirmPassword">Passwort bestätigen:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </div>
          )}
          <button type="submit">
            {isRegistrationMode ? "Erstellen" : "Einloggen"}
          </button>
        </form>

        {!isRegistrationMode && (
          <button
            onClick={() =>
              alert(
                "Bitte überprüfen Sie Ihre E-Mails, um Ihr Passwort zurückzusetzen."
              )
            }
          >
            Passwort vergessen?
          </button>
        )}

        <button onClick={() => setRegistrationMode(!isRegistrationMode)}>
          {isRegistrationMode
            ? "Bereits registriert? Hier anmelden"
            : "Noch kein Konto? Hier registrieren"}
        </button>
      </div>
    </main>
  );
};

Register.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Register;