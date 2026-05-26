package com.chinmay.themealdbexplorerapi.client;

import com.chinmay.themealdbexplorerapi.dto.CategoryResponse;
import com.chinmay.themealdbexplorerapi.dto.MealResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

@Component
public class MealDbClient {

    private final WebClient webClient;
    private static final Logger logger = LoggerFactory.getLogger(MealDbClient.class);

    public MealDbClient(WebClient webClient) {
        this.webClient = webClient;
    }

    public MealResponse searchMeals(String name) {

        logger.debug("Calling TheMealDB API to search for meals with name: {}", name);

        try {
            MealResponse response = webClient.get()
                    .uri("/search.php?s={name}", name)
                    .retrieve()
                    .bodyToMono(MealResponse.class)
                    .block();

            logger.debug("Successfully retrieved meal search results");
            return response;
        } catch (WebClientResponseException e) {
            logger.error("Error from TheMealDB API while searching for meals: {} - {}",
                e.getStatusCode(), e.getMessage());
            throw new RuntimeException("Error fetching meals from external API", e);
        } catch (Exception e) {
            logger.error("Unexpected error while searching for meals", e);
            throw new RuntimeException("Error searching for meals", e);
        }
    }

    public MealResponse randomMeal() {

        logger.debug("Calling TheMealDB API to get random meal");

        try {
            MealResponse response = webClient.get()
                    .uri("/random.php")
                    .retrieve()
                    .bodyToMono(MealResponse.class)
                    .block();

            logger.debug("Successfully retrieved random meal");
            return response;
        } catch (WebClientResponseException e) {
            logger.error("Error from TheMealDB API while fetching random meal: {} - {}",
                e.getStatusCode(), e.getMessage());
            throw new RuntimeException("Error fetching random meal from external API", e);
        } catch (Exception e) {
            logger.error("Unexpected error while fetching random meal", e);
            throw new RuntimeException("Error fetching random meal", e);
        }
    }

    public CategoryResponse getCategories() {

        logger.debug("Calling TheMealDB API to get all categories");

        try {
            CategoryResponse response = webClient.get()
                    .uri("/categories.php")
                    .retrieve()
                    .bodyToMono(CategoryResponse.class)
                    .block();

            logger.debug("Successfully retrieved categories");
            return response;
        } catch (WebClientResponseException e) {
            logger.error("Error from TheMealDB API while fetching categories: {} - {}",
                e.getStatusCode(), e.getMessage());
            throw new RuntimeException("Error fetching categories from external API", e);
        } catch (Exception e) {
            logger.error("Unexpected error while fetching categories", e);
            throw new RuntimeException("Error fetching categories", e);
        }
    }

    public MealResponse mealsByCategory(String category) {

        logger.debug("Calling TheMealDB API to get meals for category: {}", category);

        try {
            MealResponse response = webClient.get()
                    .uri("/filter.php?c={category}", category)
                    .retrieve()
                    .bodyToMono(MealResponse.class)
                    .block();

            logger.debug("Successfully retrieved meals for category: {}", category);
            return response;
        } catch (WebClientResponseException e) {
            logger.error("Error from TheMealDB API while fetching meals for category {}: {} - {}",
                category, e.getStatusCode(), e.getMessage());
            throw new RuntimeException("Error fetching meals for category from external API", e);
        } catch (Exception e) {
            logger.error("Unexpected error while fetching meals for category: {}", category, e);
            throw new RuntimeException("Error fetching meals for category", e);
        }
    }

    public MealResponse mealDetails(String id) {

        logger.debug("Calling TheMealDB API to get meal details for ID: {}", id);

        try {
            MealResponse response = webClient.get()
                    .uri("/lookup.php?i={id}", id)
                    .retrieve()
                    .bodyToMono(MealResponse.class)
                    .block();

            logger.debug("Successfully retrieved meal details for ID: {}", id);
            return response;
        } catch (WebClientResponseException e) {
            logger.error("Error from TheMealDB API while fetching meal details for ID {}: {} - {}",
                id, e.getStatusCode(), e.getMessage());
            throw new RuntimeException("Error fetching meal details from external API", e);
        } catch (Exception e) {
            logger.error("Unexpected error while fetching meal details for ID: {}", id, e);
            throw new RuntimeException("Error fetching meal details", e);
        }
    }
}