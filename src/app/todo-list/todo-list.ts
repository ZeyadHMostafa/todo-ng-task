import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="list-group">
      <!-- TODO: ask if tracking fails if task changes name -->
      @for (todo of todos; track todo.id) {
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span [class.text-decoration-line-through]="todo.completed">
            {{ todo.task }}
          </span>
          <div>
            <button (click)="toggle.emit(todo.id)" class="btn btn-sm btn-outline-success me-2">
              <i class="bi" [ngClass]="todo.completed ? 'bi-check-circle-fill' : 'bi-check-circle'"></i>
            </button>
            <button (click)="remove.emit(todo.id)" class="btn btn-sm btn-outline-danger">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </li>
      } @empty {
        <p class="text-center text-muted">No tasks yet!</p>
      }
    </ul>
  `
})
export class TodoList {
  @Input() todos: any[] = [];
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
}