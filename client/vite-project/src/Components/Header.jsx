import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img src="/Logo/tia-logo.svg" alt="Logo"/>
      </Link>

      <nav>
        <Link to="/stories">Stories</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/forum">Forum</Link>
        {/* Link zur Test-GameScreen-Komponente */}
        <Link to="/test-game">Test GameScreen</Link>
        
      </nav>
    </header>
  );
};

export default Header;
