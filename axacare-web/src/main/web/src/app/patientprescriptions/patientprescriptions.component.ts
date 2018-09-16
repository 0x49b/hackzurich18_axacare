import {Component, OnInit} from '@angular/core';

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
          "prescriptionItemName": "Voltaren Dolo forte 25 mg Dragées",
          "prescriptionItemDosage": "25mg",
          "prescriptionItemDays": 20
        },
        {
          "prescriptionItemId": 26,
          "prescriptionItemName": "Aspirin® Complex",
          "prescriptionItemDosage": "-",
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
          "prescriptionItemName": "Panadol® Extra",
          "prescriptionItemDosage": "-",
          "prescriptionItemDays": 4
        },
        {
          "prescriptionItemId": 21,
          "prescriptionItemName": " OMIDA® Stimmungsschwankungsglobuli",
          "prescriptionItemDosage": "-",
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
          "prescriptionItemName": "DAFALGAN® Pulver für Kinder",
          "prescriptionItemDosage": "-",
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
          "prescriptionItemName": "Furadantin® retard",
          "prescriptionItemDosage": "-",
          "prescriptionItemDays": 20
        },
        {
          "prescriptionItemId": 33,
          "prescriptionItemName": "Antidry® wash",
          "prescriptionItemDosage": "-",
          "prescriptionItemDays": 20
        },
        {
          "prescriptionItemId": 23,
          "prescriptionItemName": "Ceteco® Sandoz Filmtabletten",
          "prescriptionItemDosage": "-",
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
          "prescriptionItemName": "Aspirin Cardio® 100/300",
          "prescriptionItemDosage": "300mg",
          "prescriptionItemDays": 20
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
