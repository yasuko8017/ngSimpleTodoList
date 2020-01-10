import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';

  inputItem = '';
  todos = ['123', '3453'];

  addTodo(){
    this.todos.push(this.inputItem);
    this.inputItem = '';
  }

  removeTodo(idx){
    this.todos.splice(idx, 1);
  }
}
