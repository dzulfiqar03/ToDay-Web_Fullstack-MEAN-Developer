import { Routes } from '@angular/router';
import { userRoutes } from './Routes/app-routing.module';
import { Login } from './Pages/Auth/login';
import { Register } from './Pages/Auth/register';
import { TodoListComponent } from './Pages/ToDoList/todo-add';

export const routes: Routes = [
 { path: '', loadComponent: () => import('./Pages/home-pages').then(m => m.HomeComponent) },
  {
    path: 'users/:id',
    children: userRoutes   // ← tinggal masukkan
  },
    {path:'login', component: Login},
     {path:'register', component: Register},
     {path:'todoList/:id', component: TodoListComponent},
];
