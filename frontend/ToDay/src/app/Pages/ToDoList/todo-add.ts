import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.services';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo',

  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatIconModule
  ],

  template: `
  <div class="p-6 max-w-4xl mx-auto">

    <h2 class="text-2xl font-semibold mb-4 text-center">Tambah Todo Baru</h2>

    <!-- Form -->
    <form (ngSubmit)="onTodo()" class="bg-white shadow p-5 rounded-lg space-y-4">

      <div>
        <label class="block font-medium mb-1">Todo</label>
        <input type="text"
          placeholder="Masukkan todo"
          [(ngModel)]="todoData.todo"
          name="todo"
          required
          class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
      </div>

      <button type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition font-medium">
        Simpan Todo
      </button>
    </form>

    <!-- List Todo -->
    <h3 class="text-xl font-semibold mt-8 mb-4">Todo Kamu</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

      <mat-card *ngFor="let item of todoList" class="p-4 shadow-md">

        <h2 class="text-lg font-bold text-gray-800">
          {{ item.todo }}
        </h2>

        <p class="text-xs text-gray-500 mt-2">
          {{ item.createdAt | date:'medium' }}
        </p>

        <div class="flex justify-end space-x-3 mt-4">

          <!-- Update -->
          <button class="text-blue-600 hover:text-blue-800"
            (click)="editTodo(item)">
            <mat-icon>edit</mat-icon>
          </button>

          <!-- Delete -->
          <button class="text-red-600 hover:text-red-800"
            (click)="deleteTodo(item._id)">
            <mat-icon>delete</mat-icon>
          </button>

        </div>

      </mat-card>

    </div>

  </div>
  `
})
export class TodoListComponent implements OnInit {

  todoData = {
    userId: '',
    todo: ''
  };

  todoList: any[] = [];

  editingId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.todoData.userId = this.route.snapshot.params['id'];
    this.loadTodo();
  }

  // Ambil todo berdasarkan userId
  loadTodo() {
    this.service.getTodoByUserId(this.todoData.userId).subscribe({
      next: (res: any) => {
        this.todoList = res.data;
      },
      error: err => console.error(err)
    });
  }

  // Tambah Todo
  onTodo() {
    if (!this.todoData.todo.trim()) return;

    this.service.postTodo(this.todoData).subscribe({
      next: (resp: any) => {
        this.todoData.todo = '';
        this.loadTodo();
      },
      error: err => console.error(err)
    });
  }

  // Edit Todo
  editTodo(item: any) {
    this.editingId = item._id;
    this.todoData.todo = item.todo;
  }

  // Delete Todo
  deleteTodo(id: string) {
    this.service.deleteTodo(id).subscribe({
      next: () => this.loadTodo(),
      error: err => console.error(err)
    });
  }
}
