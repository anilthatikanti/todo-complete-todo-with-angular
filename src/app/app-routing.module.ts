import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './MyComponent/about/about.component';
import { TodosComponent } from './MyComponent/todos/todos.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"",component:TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
