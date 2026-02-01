import { TodoForm } from "../todo-form/todo-form";
import { TodoList } from "../todo-list/todo-list";
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [TodoForm, TodoList],
  template: `
    <div class="container mt-5" style="max-width: 500px;">
      <div class="card shadow">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">My Tasks</h2>
          
          <app-todo-form (todoAdded)="addTodo($event)"></app-todo-form>
          
          <app-todo-list 
            [todos]="todos" 
            (toggle)="toggleTodo($event)" 
            (remove)="deleteTodo($event)">
          </app-todo-list>
          
        </div>
      </div>
    </div>
  `
})
export class TodoWrapper {
  todos:any[]= [];

  addTodo(task: string) {
    const newTodo: any = {
      id: Date.now(),
      task,
      completed: false
    };
    this.todos.push(newTodo);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}