import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "Task Tracker";
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor (private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(val => this.showAddTask = val)
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }
}
