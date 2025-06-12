import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstprogram';
  email: string = '';
  subject: string = '';
  scoreOne: number = 0;
  scoreTwo: number = 0;

  statement: boolean= false;

  onclick(value: string, value2: string, value3: number,value4: number): void {
    this.email = value;
    this.subject = value2;
    this.scoreOne = value3;
    this.scoreTwo = value4; // Example calculation
    this.statement = !this.statement; // Toggle the boolean value
  }
}