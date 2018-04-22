import { Component, OnInit } from '@angular/core';
import { dogInfo } from '../../assets/tables/dogTable';


@Component({
  selector: 'app-dog-info-view',
  templateUrl: './dog-info-view.component.html',
  styleUrls: ['./dog-info-view.component.css']
})
export class DogInfoViewComponent implements OnInit {

  constructor() { }
  dogs = dogInfo;
  
  ngOnInit() {
  }

}
