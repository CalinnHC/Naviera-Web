import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HeaderComponent } from './components/header/header.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { NewPassComponent } from './components/new-pass/new-pass.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    LoginCardComponent,
    RegisterCardComponent,
    NotificationComponent,
    HeaderComponent,
    ShowUsersComponent,
    ShowUserComponent,
    NewPassComponent,
    DeleteAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
