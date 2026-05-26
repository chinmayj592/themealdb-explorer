package com.chinmay.themealdbexplorerapi.service;

import com.chinmay.themealdbexplorerapi.dto.CategoryResponse;
import com.chinmay.themealdbexplorerapi.dto.MealResponse;

public interface MealService {

    MealResponse searchMeals(String name);

    MealResponse randomMeal();

    CategoryResponse getCategories();

    MealResponse mealsByCategory(String category);

    MealResponse mealDetails(String id);
}