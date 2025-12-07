import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

interface Task {
  text: string;
  isDone: boolean;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule, TaskCardComponent, NewTaskComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angry Todo - Kanban Board';

    /* An array that holds all tasks */
    public tasks: Task[] = [];

    /* Add a new task to the list */
    public addTask(taskText: string): void {
        this.tasks.push({
            text: taskText,
            isDone: false
        });
    }

    /* Mark task as done */
    public doneTask(index: number): void {
        this.tasks[index].isDone = true;
    }

    /* Delete a task */
    public deleteTask(index: number): void {
        this.tasks.splice(index, 1);
    }

    /* Get pending tasks */
    get pendingTasks(): Task[] {
        return this.tasks.filter(task => !task.isDone);
    }

    /* Get completed tasks */
    get completedTasks(): Task[] {
        return this.tasks.filter(task => task.isDone);
    }
}