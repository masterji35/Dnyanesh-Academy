import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlazmaComponent } from './components/plazma/plazma.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDonarComponent } from './components/add-donar/add-donar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    PlazmaComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AddDonarComponent,
    PolicyListComponent,
    CreateUserComponent,
    ListUserComponent,
    EditUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
  ],
  
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
