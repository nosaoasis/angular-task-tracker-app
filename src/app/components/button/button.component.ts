import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  constructor() {}

  @Input() color!: string;
  @Input() text!: string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    console.log("hello...you clicked the button....happy coding....", this.color)
    this.btnClick.emit()
  }
}