package ch.hackzurich.axacare.controller;

import ch.hackzurich.axacare.model.Case;
import ch.hackzurich.axacare.model.Drug;
import ch.hackzurich.axacare.model.Recipe;
import ch.hackzurich.axacare.model.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApiController {

    private ArrayList<Recipe> recipes;
    private ArrayList<User> users;
    private ArrayList<Case> cases;

    public ApiController() {
        recipes = new ArrayList<>();
        users = new ArrayList<>();
        cases = new ArrayList<>();

        Drug drug1 = new Drug(51795, "Aspirin Cardio® 100/300", "https://health.axa.ch/hack/api/drugs/51795", 5);
        Drug drug2 = new Drug(54909, "Aspirin® 500 Instant-Tabletten", "https://health.axa.ch/hack/api/drugs/54909", 1);

        User user = new User(1,"patient", "Marvin Headnocker", "Patient", new Date(2096634060));
        User doctor = new User(2,"doctor", "Marvin Headnocker", "Doctor", new Date(2097635060));
        User pharmacist = new User(3,"pharmacist", "Marvin Headnocker", "Pharmacist", new Date(2098636060));

        Case patientCase = new Case(1, "headache", "2018-09-15", "really bad headache", user);

        cases.add(patientCase);

        users.add(user);
        users.add(doctor);
        users.add(pharmacist);

        ArrayList<Drug> list = new ArrayList<>();
        list.add(drug1);
        list.add(drug2);

        Recipe recipe = new Recipe(1, user, doctor, list);

        recipes.add(recipe);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/user")
    public ArrayList<User> users() {
        return this.users;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/user")
    public User newUsers(@RequestBody User user) {

        int id = this.users.stream().max(Comparator.comparing(User::getId)).get().getId();
        id++;
        user.setId(id);

        this.users.add(user);
        return user;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/user/{id}")
    public User user(@PathVariable int id) {
        return this.users.stream().filter(user -> user.getId() == id).findFirst().get();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/recipe")
    public ArrayList<Recipe> recipes() {
        return this.recipes;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/recipe")
    public Recipe newUsers(@RequestBody Recipe recipe) {

        int id = this.recipes.stream().max(Comparator.comparing(Recipe::getId)).get().getId();
        id++;
        recipe.setId(id);

        this.recipes.add(recipe);
        return recipe;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/recipe/{id}")
    public Recipe recipe(@PathVariable int id) {
        return this.recipes.stream().filter(recipe -> recipe.getId() == id).findFirst().get();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/case")
    public ArrayList<Case> cases(@RequestParam("user") int id) {
        return (ArrayList<Case>) cases.stream().filter(patientCase -> patientCase.getUser().getId() == id).collect(Collectors.toList());
    }

    @RequestMapping(method = RequestMethod.POST, path = "/case")
    public Case newUsers(@RequestBody Case patientCase) {

        int id = this.cases.stream().max(Comparator.comparing(Case::getId)).get().getId();
        id++;
        patientCase.setId(id);

        this.cases.add(patientCase);
        return patientCase;
    }
}
