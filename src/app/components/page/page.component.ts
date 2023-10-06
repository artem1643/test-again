import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  @Input() userName: string = '';
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string) {
    this.userName = model;
    this.userNameChange.emit(model);
  }
}
