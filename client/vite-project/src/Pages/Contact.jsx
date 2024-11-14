import { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Contact.css';

const Contact = ({ onSubmit }) => {
  const [contactMessage, setContactMessage] = useState({ email: '', message: '' });
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    onSubmit(contactMessage);
    setSuccessMessageVisible(true);

    // Clear the form
    setContactMessage({ email: '', message: '' });

    // Hide the success message after 5 seconds
    setTimeout(() => setSuccessMessageVisible(false), 5000);
  };

  return (
    <div className='contact-form'>
      <h4>Wir freuen uns, weitere Ideen und Vorschläge zu bekommen!</h4>
      <form onSubmit={handleContactSubmit} >
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactMessage.email}
            onChange={(e) => setContactMessage({ ...contactMessage, email: e.target.value })}
            autoComplete="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Nachricht:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={contactMessage.message}
            onChange={(e) => setContactMessage({ ...contactMessage, message: e.target.value })}
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" className="submit-button">Absenden</button>
      </form>
      {successMessageVisible && <p>Nachricht erfolgreich gesendet!</p>}
    </div>
  );
};

Contact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Contact;