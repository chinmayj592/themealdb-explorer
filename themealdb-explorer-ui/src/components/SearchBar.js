import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-section">
      <h2>What are you craving?</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search meals by name (e.g., Pasta, Pizza, Biryani)..."
            className="search-input"
            autocomplete="off"
          />
        </div>
        <button type="submit" className="search-btn">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;

