import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" class="mb-4">
      <div class="input-group">
        <input type="text" [(ngModel)]="taskName" name="task" 
               class="form-control" placeholder="Enter a new task..." required>
        <button class="btn btn-primary" type="submit">
          <i class="bi bi-plus-lg"></i> Add Task
        </button>
      </div>
    </form>
  `
})
export class TodoForm {
  taskName = '';
  @Output() todoAdded = new EventEmitter<string>();

  onSubmit() {
    if (this.taskName.trim()) {
      this.todoAdded.emit(this.taskName);
      this.taskName = ''; // Reset input
    }
  }
}