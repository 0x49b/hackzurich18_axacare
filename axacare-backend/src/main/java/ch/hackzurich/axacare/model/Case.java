package ch.hackzurich.axacare.model;

public class Case {
    private int id;
    private String caseName;
    private String date;
    private String comment;
    private User user;

    public Case() {
    }

    public Case(int id, String caseName, String date, String comment, User user) {
        this.id = id;
        this.caseName = caseName;
        this.date = date;
        this.comment = comment;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCaseName() {
        return caseName;
    }

    public void setCaseName(String caseName) {
        this.caseName = caseName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
