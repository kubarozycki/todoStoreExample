import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TasksStoreService } from 'src/tasks/tasks-store.service';
import { Validators } from '@angular/forms';
import { NotificationsService } from 'src/notifications/notifications.service';

const TITLE_INPUT_KEY = 'titleInput';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styles: [
  ]
})
export class CreateTaskComponent implements OnInit {

  private readonly titleInputKey = TITLE_INPUT_KEY;

  taskForm = new FormGroup({
    [this.titleInputKey]: new FormControl('', Validators.required),
  });

  constructor(private tasksStoreService: TasksStoreService, private notificationsService: NotificationsService) {
  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    if (this.taskForm.valid) {
      this.tasksStoreService.addTask(this.taskForm.value[this.titleInputKey]);
      this.taskForm.reset();
    }
    else{
      this.notificationsService.error('Nie udało się dodać zadania', 'Błąd')
    }
  }

  get titleInput(){
    return this.taskForm.get(this.titleInputKey);
  }

}
