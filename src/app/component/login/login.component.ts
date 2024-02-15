import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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


  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  login: string = "";  
  password: string = "";

  onLoginTab(): void {
    this.active = "login";
  }

  onLogin(): void {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: this.login,
        password: this.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
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
      {
        firstName: this.firstName,
        lastName: this.lastName,
        login: this.login,
        password: this.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.router.navigate(['']);
    }).catch(err => console.log(err));
  }
}