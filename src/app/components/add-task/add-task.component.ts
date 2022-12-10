import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from "rxjs"

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(val => this.showAddTask = val)
  }

  ngOnInit(): void {
      
  }

  onSubmit() {
    if(!this.text) {
      alert("Please add a task")
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // emit event here
    this.onAddTask.emit(newTask);

    // clear input field
    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
