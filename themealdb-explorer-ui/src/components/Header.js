import React from 'react';
import './Header.css';
import { FaUtensils } from 'react-icons/fa';

function Header({ onHome }) {
  return (
    <header className="header">
      <div className="header-content">
        <button className="logo-btn" onClick={onHome}>
          <FaUtensils className="logo-icon" />
          <h1>TheMealDB Explorer</h1>
        </button>
        <p className="tagline">Discover Delicious Recipes from Around the World</p>
      </div>
    </header>
  );
}

export default Header;

