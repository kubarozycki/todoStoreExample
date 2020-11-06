import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksStoreService } from 'src/tasks/tasks-store.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit, OnDestroy {

  private readonly tasksSubscription: Subscription;
  constructor(private tasksStoreService: TasksStoreService) {
    this.tasksSubscription = tasksStoreService.tasks$.subscribe(x => this.tasksList = x);
  }

  tasksList = new Array<string>();

  ngOnInit(): void {
    this.tasksList = this.tasksStoreService.tasks;
  }

  ngOnDestroy(): void {
    this.tasksSubscription && this.tasksSubscription.unsubscribe();
  }


}
