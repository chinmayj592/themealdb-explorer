import React from 'react';
import './MealDetail.css';
import { FaArrowLeft, FaYoutube, FaClock, FaUsers } from 'react-icons/fa';

function MealDetail({ meal, onClose, onRandomMeal }) {
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          name: ingredient,
          measure: measure || '',
        });
      }
    }
    return ingredients;
  };

  const ingredients = getIngredients();

  const getYoutubeEmbedUrl = () => {
    if (!meal.strYoutube) return null;
    const videoId = meal.strYoutube.split('v=')[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const youtubeUrl = getYoutubeEmbedUrl();

  return (
    <div className="meal-detail-container">
      <button className="close-btn" onClick={onClose}>
        <FaArrowLeft /> Back
      </button>

      <div className="meal-detail-content">
        <div className="detail-header">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="detail-image"
          />
          <div className="detail-title">
            <h1>{meal.strMeal}</h1>
            <div className="meal-meta">
              {meal.strCategory && (
                <span className="meta-badge category">{meal.strCategory}</span>
              )}
              {meal.strArea && (
                <span className="meta-badge area">🌍 {meal.strArea}</span>
              )}
            </div>
          </div>
        </div>

        <div className="detail-body">
          <div className="ingredients-section">
            <h2>Ingredients</h2>
            <div className="ingredients-list">
              {ingredients.map((ing, idx) => (
                <div key={idx} className="ingredient-item">
                  <input type="checkbox" id={`ing-${idx}`} />
                  <label htmlFor={`ing-${idx}`}>
                    <span className="ingredient-name">{ing.name}</span>
                    <span className="ingredient-measure">{ing.measure}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="instructions-section">
            <h2>Instructions</h2>
            <div className="instructions-text">
              {meal.strInstructions}
            </div>
          </div>

          {youtubeUrl && (
            <div className="video-section">
              <h2>
                <FaYoutube className="youtube-icon" />
                Video Tutorial
              </h2>
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="400"
                  src={youtubeUrl}
                  title={meal.strMeal}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>

        <div className="detail-actions">
          <button className="btn-secondary" onClick={onClose}>
            <FaArrowLeft /> Back to Results
          </button>
          <button className="btn-primary" onClick={onRandomMeal}>
            Try Random Meal
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealDetail;

