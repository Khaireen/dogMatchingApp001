import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/User';
import { UserInformations } from '../../assets/tables/userTable';
import { userSignupInfo } from '../../assets/tables/userLoginTable';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  title: 'Sign Up Form'
  public user:User;

  ngOnInit() {

    this.user = new User({
      login: "",
      email: "", 
      password: { pwd: "", confirm_pwd: "" },
      terms: false
    });
  }

  addUserToTable(userData) {
    userSignupInfo.push(userData)
  }

}
