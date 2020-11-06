import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TasksMainComponent } from './components/tasks-main/tasks-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksCounterComponent } from './components/tasks-counter/tasks-counter.component';
import { NotificationsModule } from 'src/notifications/notifications.module';


@NgModule({
  declarations: [TasksListComponent, CreateTaskComponent, TasksMainComponent, TasksCounterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotificationsModule
  ],
  exports: [TasksMainComponent]
})
export class TasksModule { }
