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
      this.data.profile = 'static/' + this.data.profile
    })
  }

  ngOnInit(): void { }

  handleChange = () => {
    let input = document.getElementById("about-input") as HTMLTextAreaElement
    this.data = {
      ...this.data,
      acerca_de: input.value
    }
  }

  handleClick = (e: any) => {
    let input = document.getElementById("up-profile")
    input?.click()
  }
  handleFileChange = (e: any) => {
    this.api.uploadFile(e.target.files[0]).subscribe(response => {

      this.data.profile = e.target.files[0].name
      this.api.updateAbout(this.data.id, this.data).subscribe(res => {
        this.data.profile = 'static/' + this.data.profile
      })
    })
  }

}
