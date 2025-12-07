import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task: string = '';
  @Input() index: number = 0;
  @Input() isDone: boolean = false;
  
  @Output() onDone = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();

  markAsDone(): void {
    this.onDone.emit(this.index);
  }

  deleteTask(): void {
    this.onDelete.emit(this.index);
  }
}