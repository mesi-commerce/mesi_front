import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AxiosService } from 'src/app/service/axios.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() loginEvent = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  
  protected isDiscountClosed:boolean;
  constructor(public axiosService:AxiosService) {
    this.isDiscountClosed = false;
  }

  public closeDiscount(){
    this.isDiscountClosed=true
  }
}
