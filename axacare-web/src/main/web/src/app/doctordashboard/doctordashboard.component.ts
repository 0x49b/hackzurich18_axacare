import {Component, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../_services/api.service";

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent implements OnInit {


  @Output() box: string;

  constructor(private api: ApiService) {
  }

  ngOnInit() {

  }


  searchChange(){
    console.log(   );
  }




  addTodo(title:string) {
    console.log(title);
    console.log(this.api.searchForDrug(title));
  }

}


