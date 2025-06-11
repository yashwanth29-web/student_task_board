import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstprogram';
  userName: string = 'Yashwant devara';
  userAge: number = 17;
  isOnLine: boolean = true;
  profilePic: string = 'https://avatars.githubusercontent.com/u/123456789?v=4';
  toggleOnlineStatus() {
    this.isOnLine = !this.isOnLine; 
}
}