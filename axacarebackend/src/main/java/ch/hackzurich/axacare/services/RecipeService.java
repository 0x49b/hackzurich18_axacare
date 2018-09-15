package ch.hackzurich.axacare.services;

import ch.hackzurich.axacare.domain.Recipe;
import ch.hackzurich.axacare.repositories.RecipeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @Transactional(readOnly = true)
    public Collection<Recipe> graph(int id) {
        Collection<Recipe> result = recipeRepository.graph(id);
        return result;
    }
}
