package ch.hackzurich.axacare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@EnableNeo4jRepositories("ch.hackzurich.axacare.repositories")
public class AxacareApplication {

	public static void main(String[] args) {
		SpringApplication.run(AxacareApplication.class, args);
	}
}
