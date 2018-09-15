package ch.hackzurich.axacare.domain;

        import org.neo4j.ogm.annotation.GeneratedValue;
        import org.neo4j.ogm.annotation.Id;
        import org.neo4j.ogm.annotation.NodeEntity;
        import org.neo4j.ogm.annotation.Relationship;

        import java.util.Date;
        import java.util.List;

@NodeEntity
public class Recipe {

    @Id
    @GeneratedValue
    Long id;

    private int recipeID;

    @Relationship(type = "BELONGS_TO")
    User user;

    @Relationship(type = "HAS_DRUG")
    private List<HasDrug> hasDrugs;
}
