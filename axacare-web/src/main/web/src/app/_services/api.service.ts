import{ Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs";
import {error} from "util";

const API_URL = 'http://localhost:8090/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) {
  }



  private doGet(ressource: string) {
    let apiURL = `${API_URL}${ressource}`;

    return this.http.get(apiURL)
      .subscribe(data => {
          console.log(data);
          return data;
        },
          error => console.log('error')
      );
  }

  private doPost(parameters: { resource: any, httpParams: any }) {
    let {resource, httpParams} = parameters;
    let apiURL = `${API_URL}${resource}`;

    return this.http.post(apiURL, httpParams)
      .subscribe(data => data,
                      error => console.log(error));
  }

  private doPut(parameters: { resource: any, httpParams: any }) {
    let {resource, httpParams} = parameters;
    let apiURL = `${API_URL}${resource}`;

    return this.http.put(apiURL, httpParams)
      .subscribe(data => data,
        error => console.log(error));
  }

  private doDelete(parameters: { resource: any }) {
    let {resource} = parameters;
    let apiURL = `${API_URL}${resource}`;

    return this.http.delete(apiURL)
      .subscribe(data => data,
        error => console.log(error));
  }

  public getOwnCases() {
    return this.doGet('/case?user=1');
  }
}
