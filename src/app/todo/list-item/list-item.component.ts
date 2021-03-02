import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService, Task } from '../list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  public task: Task | undefined;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.task = this.listService.getTaskById(id);
    })
  }

  public markTaskAsDone(id: number): void {
    this.listService.markTaskAsDone(id);
    this.router.navigate(['list']);
  }
}
