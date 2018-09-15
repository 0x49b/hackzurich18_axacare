package ch.hackzurich.axacare.model;

import java.util.ArrayList;
import java.util.List;

public class Recipe {

    private int id;
    private User user;
    private User doctor;
    private ArrayList<Drug> drugs;

    public Recipe() {
    }

    public Recipe(int id, User user, User doctor, ArrayList<Drug> drugs) {
        this.id = id;
        this.user = user;
        this.doctor = doctor;
        this.drugs = drugs;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public User getDoctor() {
        return doctor;
    }

    public void setDoctor(User doctor) {
        this.doctor = doctor;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ArrayList<Drug> getDrugs() {
        return drugs;
    }

    public void setDrugs(ArrayList drugs) {
        this.drugs = drugs;
    }
}
