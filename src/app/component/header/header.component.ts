import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected isDiscountClosed:boolean;
  constructor() {
    this.isDiscountClosed = false;
  }

  public closeDiscount(){
    this.isDiscountClosed=true
  }
}
