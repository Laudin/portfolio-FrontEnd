import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data = {
    id: 0,
    nombre: '',
    apellido: '',
    titulo: '',
    acerca_de: '',
    profile: '',
  }


  @Input() edit!: boolean;
  editing_info = false
  editing_about = false

  constructor(private api: ApiService) {
    this.api.getAbout().subscribe(response => {
      this.data = { ...response[0] }
      this.data.profile = 'https://laudin-portfolio-backend.herokuapp.com/static/' + this.data.profile
    })
  }

  ngOnInit(): void { }

  handleChange = () => {
    this.editing_info = false
    this.editing_about = false

    let nameInput = document.getElementById("name-input") as HTMLTextAreaElement
    let titleInput = document.getElementById("title-input") as HTMLTextAreaElement
    let aboutInput = document.getElementById("about-input") as HTMLTextAreaElement
    this.data = {
      ...this.data,
      nombre: nameInput?.value || this.data.nombre,
      titulo: titleInput?.value || this.data.titulo,
      acerca_de: aboutInput?.value || this.data.acerca_de
    }
    console.log(this.data)
    // this.api.updateAbout(1, this.data).subscribe(res => console.log(res))
  }

  handleClick = (e: any) => {
    let input = document.getElementById("up-profile")
    input?.click()
  }
  handleFileChange = (e: any) => {
    this.api.uploadFile(e.target.files[0]).subscribe(response => {

      this.data.profile = e.target.files[0].name
      this.api.updateAbout(this.data.id, this.data).subscribe(res => {
        this.data.profile = 'https://laudin-portfolio-backend.herokuapp.com/static/' + this.data.profile
      })
    })
  }

}
