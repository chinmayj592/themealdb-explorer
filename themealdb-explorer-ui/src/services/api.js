import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/meals';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const mealAPI = {
  searchMeals: (name) =>
    axiosInstance.get('/search', { params: { name } }),

  getRandomMeal: () =>
    axiosInstance.get('/random'),

  getCategories: () =>
    axiosInstance.get('/categories'),

  getMealsByCategory: (category) =>
    axiosInstance.get(`/category/${category}`),

  getMealDetails: (id) =>
    axiosInstance.get(`/${id}`),
};

export default axiosInstance;

