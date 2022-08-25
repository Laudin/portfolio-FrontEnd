import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  dummy_data = {
    name: 'Gastón Laudin',
    title: 'Full Stack Developer Jr.',
    about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis minima facere, quae illum dicta ab ipsam tenetur accusantium doloribus? Sapiente quo porro modi laudantium ipsa pariatur aliquam quisquam quod qui?'
  }
  editing = false

  handleChange = () => {
    let input = document.getElementById("about-input") as HTMLTextAreaElement
    this.dummy_data = {
      ...this.dummy_data,
      about: input.value
    }
  }

  @Input() edit!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
