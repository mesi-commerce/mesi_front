import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AxiosService } from '../../service/axios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  login: string = "";  
  password: string = "";

  onLoginTab(): void {
    this.active = "login";
  }

  onRegisterTab(): void {
    this.active = "register";
  }
  
  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({
      "firstName": this.firstName, "lastName": this.lastName,
      "login": this.login, "password": this.password
    });
  }
}