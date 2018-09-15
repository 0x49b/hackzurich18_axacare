package ch.hackzurich.axacare.model;

import java.util.Date;

public class User {
    private int id;
    private String username;
    private String name;
    private String role;
    private Date dateOfBirth;

    public User() {
    }

    public User(int id, String username, String name, String role, Date dateOfBirth) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}
