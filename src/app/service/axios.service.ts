import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = environment.apiURL;
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }

  setAuthData(data: User) {
    this.setAuthToken(data.token);
    this.setConnectedUser(data);
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  getConnectedUser(): string | null {
    return window.localStorage.getItem("connected_user");
  }

  setAuthToken(token: string | null) {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }

  setConnectedUser(user:User) {
    window.localStorage.setItem("connected_user", user.login);
  }

  removeAuthToken() {
    window.localStorage.clear();
  }

  request(method: string, url: string, data:any): Promise<any> {
    let headers = {};

    if (this.getAuthToken() !== null) {
      headers = {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + this.getAuthToken()
      }
    }

    return axios({
      method:method,
      url:url,
      data:data,
      headers:headers
    });
  }

  public isTokenActive():boolean {
    switch (window.localStorage.getItem("auth_token")){
      case null:
        return false;
        break;
      default:
        return true;
        break; 
    }
  }
}