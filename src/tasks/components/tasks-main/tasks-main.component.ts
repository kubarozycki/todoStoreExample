import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-main',
  template: `
    <div class="container">
      <app-tasks-list appComponentIdentifier></app-tasks-list>
      <app-create-task appComponentIdentifier></app-create-task>
    </div>
  `,
  styles: [
  ]
})
export class TasksMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
