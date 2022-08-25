import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  dummy_data = [
    {
      titulo: "Proyecto 1",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nesciunt dicta reprehenderit est architecto rem illo amet quia. Voluptas, eligendi quis! Voluptas et cumque hic tempora rem laborum eveniet. Eaque!",
      github: "https://github.com/Laudin/Pets",
      view: "https://straypaws.netlify.app"
    },
    {
      titulo: "Proyecto 2",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nesciunt dicta reprehenderit est architecto rem illo amet quia. Voluptas, eligendi quis! Voluptas et cumque hic tempora rem laborum eveniet. Eaque!",
      github: "https://github.com/Laudin/Pets",
      view: ""
    }
  ]

  @Input() edit!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
