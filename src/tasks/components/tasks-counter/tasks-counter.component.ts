import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, pipe, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksStoreService } from 'src/tasks/tasks-store.service';

@Component({
  selector: 'app-tasks-counter',
  template: `
    <p>
      Ilość zadań: {{tasksCount}}
    </p>
  `,
  styles: [
  ]
})
export class TasksCounterComponent implements OnInit, OnDestroy {

  private readonly tasksCounterSubscription: Subscription;

  constructor(private tasksStoreService: TasksStoreService) {
    this.tasksCounterSubscription = this.tasksStoreService.tasksCount$
      .subscribe(count => this.tasksCount = count);
  }

  tasksCount = this.tasksStoreService.tasksCount;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tasksCounterSubscription && this.tasksCounterSubscription.unsubscribe()
  }
}
