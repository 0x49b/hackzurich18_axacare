package ch.hackzurich.axacare.domain;

import org.neo4j.ogm.annotation.EndNode;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.RelationshipEntity;
import org.neo4j.ogm.annotation.StartNode;

@RelationshipEntity(type = "HAS_DRUG")
public class HasDrug {

    @Id @GeneratedValue private Long id;
    private int amount;

    @StartNode
    private Recipe recipe;

    @EndNode
    private Drug drug;
}
