import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formAdd',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1 class="mb-4 text-center">Add New Item</h1>

<form id="addProviderForm" action="/providers/add" method="POST" class="card p-4 shadow-sm rounded">
  
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" name="name" placeholder="Enter name" required>
  </div>

  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" required>
  </div>

  <div class="mb-3">
    <label for="phone" class="form-label">Phone</label>
    <input type="text" class="form-control" id="phone" name="phone" placeholder="Enter phone">
  </div>

  <div class="mb-3">
    <label for="address" class="form-label">Address</label>
    <textarea class="form-control" id="address" name="address" rows="3"></textarea>
  </div>

  <!-- Tombol trigger modal -->
  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#confirmAddModal">
    Save Changes
  </button>
</form>
`,
})
export class FormAdd {}
