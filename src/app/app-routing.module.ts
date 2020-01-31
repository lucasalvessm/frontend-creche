import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrecheInsertComponent } from './creche-insert/creche-insert.component';
import { CrecheListComponent } from './creche-list/creche-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './commons/auth.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'creche',
    canActivate: [AuthGuard],
    children: [
      { path: 'insert', component: CrecheInsertComponent },
      { path: 'list', component: CrecheListComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: CrecheListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
