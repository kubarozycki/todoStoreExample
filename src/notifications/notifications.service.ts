import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationsService {

  constructor(private toastr: ToastrService) { }

  success(text, title){
    this.toastr.success(text,title);
  }

  error(text, title){
    this.toastr.error(text,title);
  }
}
