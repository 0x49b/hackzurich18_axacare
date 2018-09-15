import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{

  public ngOnInit(){

    localStorage.setItem("users", "[  \n" +
      "   {  \n" +
      "      \"firstName\":\"Doctor\",\n" +
      "      \"lastName\":\"Who\",\n" +
      "      \"username\":\"doctor\",\n" +
      "      \"password\":\"doctor\",\n" +
      "      \"id\":13,\n" +
      "      \"type\":\"doctor\"\n" +
      "   },\n" +
      "      {  \n" +
      "      \"firstName\":\"Marvin\",\n" +
      "      \"lastName\":\"Headknocker\",\n" +
      "      \"username\":\"patient\",\n" +
      "      \"password\":\"patient\",\n" +
      "      \"id\":42,\n" +
      "      \"type\":\"patient\"\n" +
      "   },\n" +
      "      {  \n" +
      "      \"firstName\":\"Severus\",\n" +
      "      \"lastName\":\"Snape\",\n" +
      "      \"username\":\"pharmacist\",\n" +
      "      \"password\":\"pharmacist\",\n" +
      "      \"id\":20,\n" +
      "      \"type\":\"pharmacy\"\n" +
      "   }\n" +
      "]")
  }

}
