import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() menuData = new EventEmitter<string>();

  onClicked($event) {
    const elValue = $event.target.textContent;
    this.menuData.emit(elValue);
  }
}
