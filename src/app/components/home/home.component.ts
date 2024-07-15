import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showRegisterCard = false;
  toggleRegisterCard(){
    this.showRegisterCard = !this.showRegisterCard;
  }
  closeRegisterCard() {
    this.showRegisterCard = false;
  }
}
