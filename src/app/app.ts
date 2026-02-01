import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoWrapper } from "./todo-wrapper/todo-wrapper";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoWrapper],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-ng-task');
}
