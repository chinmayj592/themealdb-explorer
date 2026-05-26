package com.chinmay.themealdbexplorerapi.service;

import com.chinmay.themealdbexplorerapi.client.MealDbClient;
import com.chinmay.themealdbexplorerapi.dto.CategoryResponse;
import com.chinmay.themealdbexplorerapi.dto.MealResponse;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class MealServiceImpl implements MealService {

    private final MealDbClient mealDbClient;

    public MealServiceImpl(MealDbClient mealDbClient) {
        this.mealDbClient = mealDbClient;
    }

    @Override
    @Cacheable(value = "mealSearchCache", key = "#name")
    public MealResponse searchMeals(String name) {

        return mealDbClient.searchMeals(name);
    }

    @Override
    public MealResponse randomMeal() {

        return mealDbClient.randomMeal();
    }

    @Override
    @Cacheable("categoriesCache")
    public CategoryResponse getCategories() {

        return mealDbClient.getCategories();
    }

    @Override
    @Cacheable(value = "categoryMealsCache", key = "#category")
    public MealResponse mealsByCategory(String category) {

        return mealDbClient.mealsByCategory(category);
    }

    @Override
    @Cacheable(value = "mealDetailsCache", key = "#id")
    public MealResponse mealDetails(String id) {

        return mealDbClient.mealDetails(id);
    }
}