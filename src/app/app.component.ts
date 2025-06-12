import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentformComponent } from './studentform/studentform.component';
 
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterModule,StudentformComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstprogram';
  
}