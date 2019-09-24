import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipes';
  onSelectedMenuEl: string;
  selectedMenu($event) {
   this.onSelectedMenuEl = $event;
  }
}
