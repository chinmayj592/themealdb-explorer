import React from 'react';
import './CategoryBrowser.css';
import { FaUtensils } from 'react-icons/fa';

function CategoryBrowser({ categories, onSelectCategory, loading }) {
  return (
    <div className="category-browser">
      <div className="category-header">
        <FaUtensils className="category-icon" />
        <h2>Browse by Category</h2>
      </div>

      {loading ? (
        <div className="category-loading">Loading categories...</div>
      ) : (
        <div className="categories-grid">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <CategoryCard
                key={category.idCategory}
                category={category}
                onSelect={() => onSelectCategory(category.strCategory)}
              />
            ))
          ) : (
            <p className="no-categories">No categories available</p>
          )}
        </div>
      )}
    </div>
  );
}

function CategoryCard({ category, onSelect }) {
  return (
    <div className="category-card" onClick={onSelect}>
      <div className="category-image-wrapper">
        <img
          src={category.strCategoryThumb}
          alt={category.strCategory}
          className="category-image"
        />
        <div className="category-overlay"></div>
      </div>
      <div className="category-info">
        <h3>{category.strCategory}</h3>
        {category.strCategoryDescription && (
          <p className="category-description">
            {category.strCategoryDescription.substring(0, 80)}...
          </p>
        )}
      </div>
    </div>
  );
}

export default CategoryBrowser;

