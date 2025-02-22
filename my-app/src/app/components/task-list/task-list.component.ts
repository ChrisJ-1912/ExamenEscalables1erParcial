import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<number>();

  toggleComplete(task: Task) {
    task.completed = !task.completed;
    this.taskUpdated.emit(task);
  }

  deleteTask(id: number) {
    this.taskDeleted.emit(id);
  }
}