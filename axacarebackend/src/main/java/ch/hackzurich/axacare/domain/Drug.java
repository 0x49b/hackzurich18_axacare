package ch.hackzurich.axacare.domain;

import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.List;

@NodeEntity
public class Drug {

    @Id
    @GeneratedValue
    Long id;

    private String apiID;
    private String apiLink;
    private String name;

    @Relationship(type = "HAS_DRUG", direction = Relationship.INCOMING)
    private List<HasDrug> hasDrugs;

}
