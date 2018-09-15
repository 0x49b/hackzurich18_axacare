import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientprescriptions',
  templateUrl: './patientprescriptions.component.html',
  styleUrls: ['./patientprescriptions.component.css']
})
export class PatientprescriptionsComponent implements OnInit {

  prescriptions: any = [
    {
      "prescriptionId": 21,
      "prescriptionDate": "2018-10-14",
      "prescriptionDoctor": "Angelique Alston",
      "prescriptionItems": [
        {
          "prescriptionItemId": 35,
          "prescriptionItemName": "Maureen",
          "prescriptionItemDosage": "50mg",
          "prescriptionItemDays": 20
        },
        {
          "prescriptionItemId": 26,
          "prescriptionItemName": "Barron",
          "prescriptionItemDosage": "50mg",
          "prescriptionItemDays": 20
        }
      ]
    },
    {
      "prescriptionId": 30,
      "prescriptionDate": "2018-10-15",
      "prescriptionDoctor": "Heidi West",
      "prescriptionItems": [
        {
          "prescriptionItemId": 31,
          "prescriptionItemName": "Martina",
          "prescriptionItemDosage": "500mg",
          "prescriptionItemDays": 4
        },
        {
          "prescriptionItemId": 21,
          "prescriptionItemName": "Francesca",
          "prescriptionItemDosage": "50mg",
          "prescriptionItemDays": 4
        }
      ]
    },
    {
      "prescriptionId": 24,
      "prescriptionDate": "2018-10-15",
      "prescriptionDoctor": "Larsen Benjamin",
      "prescriptionItems": [
        {
          "prescriptionItemId": 40,
          "prescriptionItemName": "Dodson",
          "prescriptionItemDosage": "500mg",
          "prescriptionItemDays": 20
        }
      ]
    },
    {
      "prescriptionId": 32,
      "prescriptionDate": "2018-10-15",
      "prescriptionDoctor": "Josephine Bruce",
      "prescriptionItems": [
        {
          "prescriptionItemId": 25,
          "prescriptionItemName": "Livingston",
          "prescriptionItemDosage": "50mg",
          "prescriptionItemDays": 20
        },
        {
          "prescriptionItemId": 33,
          "prescriptionItemName": "Blanche",
          "prescriptionItemDosage": "50mg",
          "prescriptionItemDays": 20
        },
        {
          "prescriptionItemId": 23,
          "prescriptionItemName": "Lopez",
          "prescriptionItemDosage": "50mg",
          "prescriptionItemDays": 20
        }
      ]
    },
    {
      "prescriptionId": 25,
      "prescriptionDate": "2018-10-14",
      "prescriptionDoctor": "Shawna Glenn",
      "prescriptionItems": [
        {
          "prescriptionItemId": 38,
          "prescriptionItemName": "Robles",
          "prescriptionItemDosage": "50mg",
          "prescriptionItemDays": 20
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
