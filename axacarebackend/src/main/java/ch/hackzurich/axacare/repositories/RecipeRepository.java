package ch.hackzurich.axacare.repositories;

import ch.hackzurich.axacare.domain.Recipe;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface RecipeRepository extends Neo4jRepository<Recipe, Long> {

    @Query("MATCH (r:Recipe)-[b:BELONGS_TO]->(u:User) WHERE Id = {id} RETURN r,b,u") Collection<Recipe> graph(@Param("recipeID") int id);

}
