import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { AuthContentComponent } from './component/auth-content/auth-content.component';
import { ButtonsComponent } from './component/buttons/buttons.component';
import { ContentComponent } from './component/content/content.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    WelcomeComponent,
    ContentComponent,
    AuthContentComponent,
    ButtonsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
