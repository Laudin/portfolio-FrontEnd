import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  show: boolean = false;

  toggleShow = () => {
    this.show = false;
  }

  constructor() { }

  ngOnInit(): void {

  }

  @Input() edit!: boolean;

  @Output("toggleEdit") toggleEdit: EventEmitter<any> = new EventEmitter();

}
