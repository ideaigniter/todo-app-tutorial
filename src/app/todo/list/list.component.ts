import { Component, OnInit } from '@angular/core';
import { ListService, Task } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public tasks: Task[] = [];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.tasks = this.listService.getAllTasks();
  }

  markTaskAsDone(id: number): void {
    this.listService.markTaskAsDone(id);
  }
}
