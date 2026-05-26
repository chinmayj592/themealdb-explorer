package com.chinmay.themealdbexplorerapi.dto;

import java.util.List;

public class CategoryResponse {

    private List<CategoryDto> categories;

    public CategoryResponse() {
    }

    public List<CategoryDto> getCategories() {
        return categories;
    }

    public void setCategories(List<CategoryDto> categories) {
        this.categories = categories;
    }
}