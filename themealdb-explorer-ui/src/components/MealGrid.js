import React from 'react';
import './MealGrid.css';

function MealGrid({ meals, onSelectMeal, loading }) {
  if (loading) {
    return <div className="loading-state">Loading meals...</div>;
  }

  if (!meals || meals.length === 0) {
    return <div className="empty-state">No meals found. Try searching for something else!</div>;
  }

  return (
    <div className="meals-grid">
      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          meal={meal}
          onSelect={() => onSelectMeal(meal.idMeal)}
        />
      ))}
    </div>
  );
}

function MealCard({ meal, onSelect }) {
  return (
    <div className="meal-card" onClick={onSelect}>
      <div className="meal-image-wrapper">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="meal-image"
          loading="lazy"
        />
        <div className="meal-overlay">
          <button className="view-btn">View Recipe</button>
        </div>
      </div>
      <div className="meal-info">
        <h3>{meal.strMeal}</h3>
        {meal.strCategory && (
          <p className="meal-category">{meal.strCategory}</p>
        )}
        {meal.strArea && (
          <p className="meal-area">🌍 {meal.strArea}</p>
        )}
      </div>
    </div>
  );
}

export default MealGrid;

