import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';

  inputItem = '';
  selected = '';
  todos = [];
  todo = {};

  addTodo(){
    this.todo = {
      inputValue: this.inputItem,
      selected: false
    }
    this.todos.push(this.todo);
    this.inputItem = '';
  }

  removeTodo(idx){
    this.todos.splice(idx, 1);
  }

  checkValue(event: any, index: number){
    let element = document.getElementsByName("todoItem")[index];
    if(event.target.checked){
      element.classList.add("deleted");
      this.todos[index].selected = true;
    } else{
      element.classList.remove("deleted");
      this.todos[index].selected = false;
    }
  }

  cleanSeleted(){
    this.todos = this.todos.filter(todo => (todo.selected == false));
  }
}
