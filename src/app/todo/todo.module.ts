import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [ListComponent, ListItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
