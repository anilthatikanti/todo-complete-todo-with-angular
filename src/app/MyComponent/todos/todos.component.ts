
import { Component, OnInit } from '@angular/core';
import { stringify, v4 as uuidv4 } from 'uuid';
import { Todo } from 'src/app/Todo';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  title!: string;
  description!:string;
  todosArray!:Todo[];
  items: any;
  

  constructor() {
    this.todosArray = []
    const localItem =localStorage.getItem("todos");
    if (localItem===null){
      this.todosArray=[];
    }else{
      this.todosArray = JSON.parse(localItem)
      console.log(localItem)
    }
   }


  ngOnInit(): void {
    
  }
  
  onSubmit(todo:any,todoName:any,todoDis:any){
    if ((todoName.touched && todoName.errors===null)&&(todoDis.touched && todoDis.errors===null)){
    const todos={
      sno: uuidv4(),
      title: this.title,
      description: this.description,
      isActive:false
      }
    this.todosArray.push(todos);
    localStorage.setItem("todos",JSON.stringify(this.todosArray))
    this.title = "";
    this.description = "";
    }
    console.log(todoName)
  }
todoDelete(todo:Todo){
  const filterTodo = this.todosArray.filter(item=>item.sno!==todo.sno)
  this.todosArray = filterTodo
  localStorage.setItem("todos",JSON.stringify(this.todosArray))
}
changeStatusTodo(todo:Todo){
  const newTodos = this.todosArray.map(item=>{
    if (item.sno===todo.sno){
      return {...item,isActive:!item.isActive}
    }
    return item
  })
  this.todosArray = newTodos
  localStorage.setItem("todos",JSON.stringify(this.todosArray))
  console.log(todo)
}
}
