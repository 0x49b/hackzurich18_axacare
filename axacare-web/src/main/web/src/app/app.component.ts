import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{

  public ngOnInit(){

    localStorage.setItem("users", "[  \n" +
      "   {  \n" +
      "      \"firstName\":\"Albus\",\n" +
      "      \"lastName\":\"Dumbledore\",\n" +
      "      \"username\":\"doctor\",\n" +
      "      \"password\":\"doctor\",\n" +
      "      \"id\":13,\n" +
      "      \"type\":\"doctor\",\n" +
      "      \"image\":\"albus.jpg\"\n" +
      "   },\n" +
      "      {  \n" +
      "      \"firstName\":\"Harry\",\n" +
      "      \"lastName\":\"Potter\",\n" +
      "      \"username\":\"patient\",\n" +
      "      \"password\":\"patient\",\n" +
      "      \"id\":42,\n" +
      "      \"type\":\"patient\",\n" +
      "      \"image\":\"potter.jpg\"\n" +
      "   },\n" +
      "      {  \n" +
      "      \"firstName\":\"Severus\",\n" +
      "      \"lastName\":\"Snape\",\n" +
      "      \"username\":\"pharmacy\",\n" +
      "      \"password\":\"pharmacy\",\n" +
      "      \"id\":20,\n" +
      "      \"type\":\"pharmacy\",\n" +
      "      \"image\":\"severus.jpg\"\n" +
      "   }\n" +
      "]")
  }

}
