import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PlazmaComponent} from './components/plazma/plazma.component';
import{HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import { AddDonarComponent} from './components/add-donar/add-donar.component'
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
const routes: Routes = [
  { path: 'plazma', component: PlazmaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'donor', component: AddDonarComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'list-users', component: ListUserComponent },
  { path: 'update-user/:id', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
