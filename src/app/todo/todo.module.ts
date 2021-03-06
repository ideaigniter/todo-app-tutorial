import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListFormComponent } from './list-form/list-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, ListItemComponent, ListFormComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
