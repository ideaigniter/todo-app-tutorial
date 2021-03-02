import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public tasks: Task[] = [
    { id: 1, title: 'Task 1', isDone: false },
    { id: 2, title: 'Task 2', isDone: false },
    { id: 3, title: 'Task 3', isDone: false }
  ];

  public markTaskAsDone(id: number) {
    let task = this.tasks.find((task) => task.id === id);

    if (task) {
      task.isDone = true;
    }
  }
}

export interface Task {
  id: number;
  title: string;
  isDone: boolean;
}
