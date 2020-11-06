import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-tasks-main></app-tasks-main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'todoStoreExample';
}
