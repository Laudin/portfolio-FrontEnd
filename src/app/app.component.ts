import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  edit = true;

  toggleEdit = () => {
    this.edit = !this.edit;
  }

}
