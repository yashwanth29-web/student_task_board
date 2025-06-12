import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  imports: [CommonModule,FormsModule],
  templateUrl: './studentform.component.html',
  styleUrl: './studentform.component.css'
})
export class StudentformComponent {
list: {name: string , grade: string}[] = [];
 name: string = '';
  grade: string = '';
  showError: boolean = false;
  addUser(value1: string, value2: string) {
    if (!value1 || !value2) {
      this.showError = true;
      return;


    } 
    this.list.push({name:value1, grade:value2});
    this.name="";
    this.grade="";
    this.showError=false;

  }
  
  }


