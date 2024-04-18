import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Math Learning Fun</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="header-content">
        <p>Welcome to Math Learning Fun, where learning math is an adventure!</p>
        <p>Explore interactive games, solve puzzles, and earn rewards as you learn.</p>
      </div>
    </header>
  );
}

export default Header;
