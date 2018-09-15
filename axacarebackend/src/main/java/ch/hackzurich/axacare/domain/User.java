package ch.hackzurich.axacare.domain;

import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.List;

@NodeEntity
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;

    @Relationship(type = "BELONGS_TO", direction = Relationship.INCOMING)
    private List<Recipe> recipes;

}
