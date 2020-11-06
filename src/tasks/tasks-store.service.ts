import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class TasksStoreService {
  constructor(private notificationsService: NotificationsService) {
    this.tasksCount$.subscribe(count => {
      if (count % 5 === 0) {
        this.notificationsService.success(`Posiadasz ${count} zadań`, 'Brawo');
      }
    })
  }

  private readonly _tasks = new BehaviorSubject<string[]>(['Ugotować zupę',]);

  readonly tasks$ = this._tasks.asObservable();
  readonly tasksCount$ = this._tasks.asObservable().pipe(map(x => x.length));

  get tasksCount(): number {
    return this.tasks.length;
  }

  get tasks(): string[] {
    return this._tasks.getValue();
  }

  set tasks(value: string[]) {
    this._tasks.next(value);
  }

  addTask(taskName: string) {
    this.tasks = [...this.tasks, taskName];
  }
}
