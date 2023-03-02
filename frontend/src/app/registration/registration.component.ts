import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  user: User = new User("", "", 0, "");
  message: any;

  constructor(private service: UserRegistrationService) { }

  ngOnInit() {
  }


  public registerNow() {
    let resp = this.service.doRegistration(this.user);
    /*
    data c'est la reponse retourné par l'api
     */
    resp.subscribe((data) => this.message = data);
  }
}
