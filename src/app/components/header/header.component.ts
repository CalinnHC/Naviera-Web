import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showLoginCard = false;
  showRegisterCard = false;
  toggleLoginCard(){
    this.showLoginCard = !this.showLoginCard;
  }
  toggleRegisterCard(){
    this.showRegisterCard = !this.showRegisterCard;
  }
  closeLoginCard() {
    this.showLoginCard = false;
  }
  closeRegisterCard() {
    this.showRegisterCard = false;
  } 
}
