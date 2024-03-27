import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/article/list/list.component';
import { AddArticleComponent } from './component/article/add-article/add-article.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-article', component: AddArticleComponent },
  { path: '', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
