import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  editing = false

  constructor() { }

  ngOnInit(): void {
  }

  @Input() edit!: boolean;
  @Input() data!: any;

}