package ch.hackzurich.axacare.model;

public class Drug {
    private int apiID;
    private String name;
    private String link;
    private int amount;

    public Drug() {
    }

    public Drug(int apiID, String name, String link, int amount) {
        this.apiID = apiID;
        this.name = name;
        this.link = link;
        this.amount = amount;
    }

    public int getApiID() {
        return apiID;
    }

    public void setApiID(int apiID) {
        this.apiID = apiID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
