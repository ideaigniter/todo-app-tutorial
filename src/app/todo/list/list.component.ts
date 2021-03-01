import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public tasks = [
    { id: 1, title: 'Task 1', isDone: false },
    { id: 2, title: 'Task 2', isDone: false },
    { id: 3, title: 'Task 3', isDone: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
