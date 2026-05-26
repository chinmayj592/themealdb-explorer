package com.chinmay.themealdbexplorerapi.controller;

import com.chinmay.themealdbexplorerapi.dto.CategoryResponse;
import com.chinmay.themealdbexplorerapi.dto.MealResponse;
import com.chinmay.themealdbexplorerapi.service.MealService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/meals")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {
    RequestMethod.GET, RequestMethod.OPTIONS
})
public class MealController {

    private final MealService mealService;
    private static final Logger logger = LoggerFactory.getLogger(MealController.class);

    public MealController(MealService mealService) {
        this.mealService = mealService;
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchMeals(
            @RequestParam(required = true) String name) {

        logger.info("Received search request for meal: {}", name);

        if (name == null || name.trim().isEmpty()) {
            logger.warn("Empty search query received");
            return ResponseEntity.badRequest().body("Meal name cannot be empty");
        }

        try {
            MealResponse response = mealService.searchMeals(name.trim());
            logger.info("Successfully retrieved {} meals for query: {}",
                response.getMeals() != null ? response.getMeals().size() : 0, name);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error searching for meals with name: {}", name, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to search meals");
        }
    }

    @GetMapping("/random")
    public ResponseEntity<?> randomMeal() {

        logger.info("Received random meal request");

        try {
            MealResponse response = mealService.randomMeal();
            logger.info("Successfully retrieved random meal");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error retrieving random meal", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to retrieve random meal");
        }
    }

    @GetMapping("/categories")
    public ResponseEntity<?> getCategories() {

        logger.info("Received categories request");

        try {
            CategoryResponse response = mealService.getCategories();
            logger.info("Successfully retrieved {} categories",
                response.getCategories() != null ? response.getCategories().size() : 0);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error retrieving categories", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to retrieve categories");
        }
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<?> mealsByCategory(
            @PathVariable(required = true) String category) {

        logger.info("Received category filter request for: {}", category);

        if (category == null || category.trim().isEmpty()) {
            logger.warn("Empty category received");
            return ResponseEntity.badRequest().body("Category cannot be empty");
        }

        try {
            MealResponse response = mealService.mealsByCategory(category.trim());
            logger.info("Successfully retrieved {} meals for category: {}",
                response.getMeals() != null ? response.getMeals().size() : 0, category);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error retrieving meals for category: {}", category, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to retrieve meals for category");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> mealDetails(
            @PathVariable(required = true) String id) {

        logger.info("Received meal details request for ID: {}", id);

        if (id == null || id.trim().isEmpty()) {
            logger.warn("Empty meal ID received");
            return ResponseEntity.badRequest().body("Meal ID cannot be empty");
        }

        try {
            MealResponse response = mealService.mealDetails(id.trim());
            logger.info("Successfully retrieved meal details for ID: {}", id);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error retrieving meal details for ID: {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to retrieve meal details");
        }
    }
}