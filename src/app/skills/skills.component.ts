import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  dummy_data = [
    {
      skill: "HTML",
      porcentaje: 100
    },
    {
      skill: "CSS",
      porcentaje: 100
    },
    {
      skill: "JavaScript",
      porcentaje: 100
    },
    {
      skill: "Angular",
      porcentaje: 25
    },
  ]

  @Input() edit!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
