import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-patientrecipedetail',
  templateUrl: './patientrecipedetail.component.html',
  styleUrls: ['./patientrecipedetail.component.css']
})
export class PatientrecipedetailComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;

  recipes: any = [
    {
      "recipeId": 21,
      "recipeDate": "2018-10-14",
      "recipeDoctor": "Angelique Alston",
      "recipeItems": [
        {
          "recipeItemId": 35,
          "recipeItemName": "Maureen",
          "recipeItemDosage": "50mg",
          "recipeItemDays": 20
        },
        {
          "recipeItemId": 26,
          "recipeItemName": "Barron",
          "recipeItemDosage": "50mg",
          "recipeItemDays": 20
        }
      ]
    },
    {
      "recipeId": 30,
      "recipeDate": "2018-10-15",
      "recipeDoctor": "Heidi West",
      "recipeItems": [
        {
          "recipeItemId": 31,
          "recipeItemName": "Martina",
          "recipeItemDosage": "500mg",
          "recipeItemDays": 4
        },
        {
          "recipeItemId": 21,
          "recipeItemName": "Francesca",
          "recipeItemDosage": "50mg",
          "recipeItemDays": 4
        }
      ]
    },
    {
      "recipeId": 24,
      "recipeDate": "2018-10-15",
      "recipeDoctor": "Larsen Benjamin",
      "recipeItems": [
        {
          "recipeItemId": 40,
          "recipeItemName": "Dodson",
          "recipeItemDosage": "500mg",
          "recipeItemDays": 20
        }
      ]
    },
    {
      "recipeId": 32,
      "recipeDate": "2018-10-15",
      "recipeDoctor": "Josephine Bruce",
      "recipeItems": [
        {
          "recipeItemId": 25,
          "recipeItemName": "Livingston",
          "recipeItemDosage": "50mg",
          "recipeItemDays": 20
        },
        {
          "recipeItemId": 33,
          "recipeItemName": "Blanche",
          "recipeItemDosage": "50mg",
          "recipeItemDays": 20
        },
        {
          "recipeItemId": 23,
          "recipeItemName": "Lopez",
          "recipeItemDosage": "50mg",
          "recipeItemDays": 20
        }
      ]
    },
    {
      "recipeId": 25,
      "recipeDate": "2018-10-14",
      "recipeDoctor": "Shawna Glenn",
      "recipeItems": [
        {
          "recipeItemId": 38,
          "recipeItemName": "Robles",
          "recipeItemDosage": "50mg",
          "recipeItemDays": 20
        }
      ]
    }
  ];

  recipe:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      let result = this.recipes.find((recipe: any) => recipe.recipeId === this.id);
      this.recipe = result;
      console.log(result)

    });
  }



  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
