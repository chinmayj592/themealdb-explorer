import React from 'react';
import './RandomMeal.css';
import { FaDice } from 'react-icons/fa';

function RandomMeal({ onRandomMeal }) {
  return (
    <div className="random-meal-section">
      <h3>Not sure what to eat?</h3>
      <button className="random-btn" onClick={onRandomMeal}>
        <FaDice className="dice-icon" />
        <span>I'm Feeling Hungry!</span>
      </button>
      <p className="random-description">Get a random meal suggestion</p>
    </div>
  );
}

export default RandomMeal;

