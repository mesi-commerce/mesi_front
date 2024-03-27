import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Credential } from 'src/app/model/Credential';
import { SignUp } from 'src/app/model/SignUp';
import { AxiosService } from 'src/app/service/axios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();


	constructor(
    private axiosService: AxiosService,
    private router: Router
  ) { }

  signUp: SignUp = new SignUp();
  credential: Credential = new Credential();

  active: string = "login";

  onLoginTab(): void {
    this.active = "login";
  }

  onLogin(): void {
    this.axiosService.request(
      "POST",
      "/login",
      this.credential
    ).then(response => {
      this.axiosService.setAuthData(response.data);
      this.router.navigate(['']);
    });
  }

  onRegisterTab(): void {
    this.active = "register";
  }

  onRegister(): void {  
    this.axiosService.request(
      "POST",
      "/register",
      this.signUp
    ).then(response => {
      this.axiosService.setAuthData(response.data);
      this.router.navigate(['']);
    }).catch(err => console.log(err));
  }
}