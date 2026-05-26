package com.chinmay.themealdbexplorerapi.dto;

import java.util.List;

public class MealResponse {

    private List<MealDto> meals;

    public MealResponse() {
    }

    public List<MealDto> getMeals() {
        return meals;
    }

    public void setMeals(List<MealDto> meals) {
        this.meals = meals;
    }
}