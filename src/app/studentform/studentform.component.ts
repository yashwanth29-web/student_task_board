import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent {
  // Input values
  taskName: string = "";
  priority: string = "";
  dateTime: string = "";

  // Filter value: 'all', 'completed', or 'pending'
  filter: string = 'all';

  // List of all tasks
  list: {
    taskName: string,
    priority: string,
    dateTime: string,
    label: string,
    completed: boolean
  }[] = [];

  // Add new task
  addTask(nameInput: any, priorityInput: any, dateInput: any) {
    // Check if all fields are filled
    if (!this.taskName || !this.priority || !this.dateTime) {
      alert("Please enter all fields.");
      return;
    }

    // Compare date to check overdue
    const inputDate = new Date(this.dateTime);
    inputDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let label = "";
    if (inputDate.getTime() === today.getTime()) {
      label = "Today";
    } else if (inputDate.getTime() < today.getTime()) {
      label = "Overdue";
    } else {
      label = "Upcoming";
    }

    // Add task to the list
    this.list.push({
      taskName: this.taskName,
      priority: this.priority,
      dateTime: this.dateTime,
      label: label,
      completed: false
    });

    // Clear form inputs
    this.taskName = "";
    this.priority = "";
    this.dateTime = "";
    nameInput.value = "";
    priorityInput.value = "";
    dateInput.value = "";
  }

  // Clear all tasks
  clearAllTasks() {
    const confirmClear = confirm("Are you sure you want to clear all tasks?");
    if (confirmClear) {
      this.list = [];
    }
  }

  // Filtered task list based on filter
  filteredTasks() {
    if (this.filter === 'completed') {
      return this.list.filter(task => task.completed);
    } else if (this.filter === 'pending') {
      return this.list.filter(task => !task.completed);
    } else {
      return this.list;
    }
  }

  // Get count of completed tasks
  completedCount(): number {
    return this.list.filter(task => task.completed).length;
  }

  // Get count of pending tasks
  pendingCount(): number {
    return this.list.filter(task => !task.completed).length;
  }
}
