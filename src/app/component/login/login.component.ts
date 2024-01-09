import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../service/axios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  data:string[] = [];

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      {}
    ).then((response) => this.data = response.data);
  }

}