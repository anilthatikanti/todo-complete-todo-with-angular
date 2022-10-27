import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() item!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() selectingTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  removeItem(todo:Todo){  
    this.deleteTodo.emit(todo);
  }

  doneTodo(todo: Todo){
    this.selectingTodo.emit(todo);
    console.log(todo)
 
  }

}
