package ch.hackzurich.axacare.controller;

import ch.hackzurich.axacare.domain.Recipe;
import ch.hackzurich.axacare.services.RecipeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api")
public class ApiController {

    private final RecipeService recipeService;

    public ApiController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/recipe")
    public Collection<Recipe> graph(@RequestParam(value = "id", required = false) int id) {
        return recipeService.graph(id);
    }
}
