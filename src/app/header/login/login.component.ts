import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  error = {
    email: false,
    password: false,
    credentials: false
  }

  email: any
  password: any
  credentials: any

  constructor() { }

  ngOnInit(): void {
    this.email = document.getElementById("email")
    this.password = document.getElementById("password")
  }

  focus = (e: any) => {
    if (e.target.id === "email") {
      this.email.style.background = "white";
      this.error.email = false
    } else if (e.target.id === "password") {
      this.password.style.background = "white";
      this.error.password = false
    }
  }

  handleChange = (e: any) => {
    if (e.target.id === "email") {
      this.user.email = e.target.value
    } else if (e.target.id === "password") {
      this.user.password = e.target.value
    }
  }

  login = (e: any) => {
    e.preventDefault()
    if (!(/\S+@\S+\.\S+/.test(this.user.email))) {
      this.email.style.background = "#cd000021";
      this.error.email = true
    }
    if (this.user.password === '') {
      this.password.style.background = "#cd000021";
      this.error.password = true
    }
  }

  @Output("toggleShow") toggleShow: EventEmitter<any> = new EventEmitter();
}
