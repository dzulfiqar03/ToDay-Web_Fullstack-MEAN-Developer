import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

import { UserService } from '../../services/user.services';

@Component({
  selector: 'app-user-list',

  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ],
  template: `
    <div style="padding: 24px; max-width: 1200px; margin: auto;">

      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h1 style="margin: 0; font-weight: 600;">Daftar Providers</h1>

        <button
          mat-raised-button
          color="primary"
          [routerLink]="['/providers/create']">
          + Tambah Provider
        </button>
      </div>

      <!-- Card Container -->
<mat-card class="table-card mat-elevation-z4">
        
        <!-- Table Wrapper -->
        <div style="overflow: auto;">
<table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z1 modern-table">

            <!-- Name -->
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Nama</th>
              <td mat-cell *matCellDef="let item">{{ item.name }}</td>
            </ng-container>

            <!-- Email -->
            <ng-container matColumnDef="email">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>
              <td mat-cell *matCellDef="let item">{{ item.email }}</td>
            </ng-container>

            <!-- Company -->
            <ng-container matColumnDef="company">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Perusahaan</th>
              <td mat-cell *matCellDef="let item">{{ item.company?.name || '-' }}</td>
            </ng-container>

            <!-- Action -->
            <ng-container matColumnDef="aksi">
              <th mat-header-cell *matHeaderCellDef>Aksi</th>
              <td mat-cell *matCellDef="let item">
              <button
  mat-button
  class="btn-detail"
  color="primary"
  [routerLink]="['/providers', item._id]">
  Detail
</button>
              </td>
            </ng-container>

            <!-- Rows -->
<tr mat-header-row *matHeaderRowDef="displayedColumns" class="modern-header bg-red-500"></tr>
<tr
  mat-row
  *matRowDef="let row; columns: displayedColumns;"
  class="odd:bg-gray-100 even:bg-white"
></tr>

          </table>
        </div>

        <!-- Paginator -->
        <mat-paginator
          style="padding: 16px;"
          [pageSize]="10"
          [pageSizeOptions]="[5, 10, 20]"
          showFirstLastButtons>
        </mat-paginator>

      </mat-card>

    </div>




  `
})

export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'company', 'aksi'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res.data);

        // Hubungkan paginator & sort
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      },
      error: err => console.error(err)
    });
  }
}
