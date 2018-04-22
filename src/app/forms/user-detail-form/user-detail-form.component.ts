import { Component, OnInit } from '@angular/core';
import { DetailedUser } from '../../classes/DetailedUser';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.css']
})
export class UserDetailFormComponent implements OnInit {

  public userDetails: DetailedUser;

  ngOnInit() {

    this.userDetails = new DetailedUser({
      name: "",
      surname: "",
      phoneNumber: "",
      streetName: "",
      houseNumber: "",
      flatNumber: "",
      city: "",
      zipCode: "",
      country: "",
    })

  }



}
