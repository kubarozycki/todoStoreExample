import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NotificationsService } from './notifications.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [NotificationsService],
})
export class NotificationsModule { }
