import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { NewPassComponent } from './components/new-pass/new-pass.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: ShowUserComponent },
  { path: 'users', component: ShowUsersComponent },
  { path: 'newPassword', component: NewPassComponent},
  { path: 'deleteUser', component: DeleteAccountComponent},
  { path: 'home/about-us', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
