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
  students: { name: string; grade: string }[] = [];

  studentName: string = '';
  studentGrade: string = '';

  addStudent(nameInput: HTMLInputElement, gradeInput: HTMLInputElement) {
    if (this.studentName && this.studentGrade) {
      this.students.push({
        name: this.studentName,
        grade: this.studentGrade,
      });

      // Clear inputs using template reference variables
      nameInput.value = '';
      gradeInput.value = '';

      // Reset model values
      this.studentName = '';
      this.studentGrade = '';
    }
  }
}

