import { Component } from '@angular/core';
import { AxiosService } from './service/axios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mesi_front';

	constructor(
    private axiosService:AxiosService, 
    private router: Router
  ) {
	}


  showComponent(componentToShow:string): void {
    this.router.navigate([componentToShow]);
  }

  onLogout() {
    this.axiosService.removeAuthToken();
    this.showComponent("welcome");
  }
}
