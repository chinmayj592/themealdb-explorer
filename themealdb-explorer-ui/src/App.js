import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryBrowser from './components/CategoryBrowser';
import MealGrid from './components/MealGrid';
import MealDetail from './components/MealDetail';
import RandomMeal from './components/RandomMeal';
import { mealAPI } from './services/api';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await mealAPI.getCategories();
      // Filter to keep only Indian and Vegetarian categories
      const allCategories = response.data?.categories || [];
      const filteredCategories = allCategories.filter(category => {
        const categoryName = category.strCategory.toLowerCase();
        return categoryName === 'indian' || categoryName === 'vegetarian' || categoryName === 'vegan';
      });
      setCategories(filteredCategories);
    } catch (err) {
      setError('Failed to load categories. Please try again.');
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setError('Please enter a meal name');
      return;
    }
    try {
      setLoading(true);
      setError(null);
      setSearchQuery(query);
      const response = await mealAPI.searchMeals(query);
      setMeals(response.data?.meals || []);
      if (!response.data?.meals || response.data.meals.length === 0) {
        setError('No meals found. Try another search!');
      }
      setCurrentView('results');
    } catch (err) {
      setError('Failed to search meals. Please try again.');
      console.error('Error searching meals:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = async (category) => {
    try {
      setLoading(true);
      setError(null);
      setSearchQuery(`Category: ${category}`);
      const response = await mealAPI.getMealsByCategory(category);
      setMeals(response.data?.meals || []);
      setCurrentView('results');
    } catch (err) {
      setError('Failed to load meals. Please try again.');
      console.error('Error fetching category meals:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMealSelect = async (mealId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await mealAPI.getMealDetails(mealId);
      const mealDetails = response.data?.meals?.[0] || null;
      setSelectedMeal(mealDetails);
      setCurrentView('detail');
    } catch (err) {
      setError('Failed to load meal details. Please try again.');
      console.error('Error fetching meal details:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRandomMeal = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await mealAPI.getRandomMeal();
      const mealDetails = response.data?.meals?.[0] || null;
      setSelectedMeal(mealDetails);
      setCurrentView('detail');
    } catch (err) {
      setError('Failed to load random meal. Please try again.');
      console.error('Error fetching random meal:', err);
    } finally {
      setLoading(false);
    }
  };

  const goHome = () => {
    setCurrentView('home');
    setSelectedMeal(null);
    setMeals([]);
    setError(null);
  };

  return (
    <div className="App">
      <Header onHome={goHome} />

      <main className="main-content">
        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading-spinner">Loading...</div>}

        {currentView === 'home' && (
          <div className="home-container">
            <SearchBar onSearch={handleSearch} />
            <RandomMeal onRandomMeal={handleRandomMeal} />
            <CategoryBrowser
              categories={categories}
              onSelectCategory={handleCategorySelect}
              loading={loading}
            />
          </div>
        )}

        {currentView === 'results' && (
          <div className="results-container">
            <div className="results-header">
              <h2>Search Results: {searchQuery}</h2>
              <button className="btn-back" onClick={goHome}>← Back Home</button>
            </div>
            <MealGrid
              meals={meals}
              onSelectMeal={handleMealSelect}
              loading={loading}
            />
          </div>
        )}

        {currentView === 'detail' && selectedMeal && (
          <MealDetail
            meal={selectedMeal}
            onClose={goHome}
            onRandomMeal={handleRandomMeal}
          />
        )}
      </main>
    </div>
  );
}

export default App;
