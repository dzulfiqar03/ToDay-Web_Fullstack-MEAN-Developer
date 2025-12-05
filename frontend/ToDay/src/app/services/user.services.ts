import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {


private apiUrl = 'https://today-webfullstack-mean-developer-production.up.railway.app/api';


  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(`${this.apiUrl}/providers`);
  }


  // Untuk login (baru)
  postLogin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/userLogin`, { email, password });
  }

  postUsers(name: string, email: string, password: string, roles: string) {
    return this.http.post(`${this.apiUrl}/userRegister`, {
      name: name,
      email: email,
      password: password,
      roles: roles
    });
  }

  postCS(name: string, email: string, message: string) {
    return this.http.post(`${this.apiUrl}/csCreate`, {
      name: name,
      email: email,
      message: message
    });
  }

  postTodo(data: any) {
    return this.http.post(`${this.apiUrl}/todoCreate`, data);
  }


  getTodoByUserId(id: string) {
    return this.http.get(`${this.apiUrl}/todo/${id}`);
  }

  deleteTodo(id: string) {
    return this.http.delete(`${this.apiUrl}/todo/${id}`);
  }
}
