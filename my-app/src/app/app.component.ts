import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [
    { id: 1, title: 'Aprender Angular', completed: false },
    { id: 2, title: 'Hacer la tarea', completed: false },
  ];

  updateTask(updatedTask: Task) {
    this.tasks = this.tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
  }
  
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}