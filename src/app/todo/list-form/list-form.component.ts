import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl()
  });

  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    const { title } = this.form.getRawValue();

    if (title) {
      this.listService.addTask(title);
    }
  }

}
