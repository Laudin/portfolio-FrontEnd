import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  dummy_data = [
    {
      logo: "https://w7.pngwing.com/pngs/817/902/png-transparent-google-logo-google-doodle-google-search-google-company-text-logo-thumbnail.png",
      fecha: "04/2017-08/2020",
      actividad: "CEO",
      descripcion: "colocarás toda la informaciónde los lugares donde has trabajado, incluyendo títulodel puesto, periodo, logo dela empresa, si lo encontrás, ydescripción de lasactividades realizadas en esepuesto."
    },
    {
      logo: "https://w7.pngwing.com/pngs/817/902/png-transparent-google-logo-google-doodle-google-search-google-company-text-logo-thumbnail.png",
      fecha: "02/2021-actualidad",
      actividad: "CEO",
      descripcion: "colocarás toda la informaciónde los lugares donde has trabajado, incluyendo títulodel puesto, periodo, logo dela empresa, si lo encontrás, ydescripción de lasactividades realizadas en esepuesto."
    }
  ]

  @Input() edit!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
