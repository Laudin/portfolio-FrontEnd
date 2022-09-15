import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  show: boolean = false;

  data = {
    id: 0,
    banner: '',
  }

  constructor(private api: ApiService) {
    this.api.getAbout().subscribe(res => {
      this.data = { ...res[0] }
      this.data.banner = 'static/' + this.data.banner
    })
  }

  toggleShow = () => {
    this.show = false;
  }
  handleClick = (e: any) => {
    let input = document.getElementById("up-banner")
    input?.click()
  }
  handleFileChange = (e: any) => {
    this.api.uploadFile(e.target.files[0]).subscribe(response => {

      this.data.banner = e.target.files[0].name
      this.api.updateAbout(this.data.id, this.data).subscribe(res => {
        console.log(res)
        this.data.banner = 'static/' + this.data.banner
      })
    })
  }



  ngOnInit(): void {

  }

  @Input() edit!: boolean;

  @Output("toggleEdit") toggleEdit: EventEmitter<any> = new EventEmitter();

}
