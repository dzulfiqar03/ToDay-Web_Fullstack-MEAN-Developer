import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {


  private apiUrl = 'http://127.0.0.1:3000/api'; // sesuaikan dengan backend kamu

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(`${this.apiUrl}/providers`);
  }


    // Untuk login (baru)
  postLogin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/userLogin`, { email, password });
  }

  postUsers(name:string,email:string, password:string, roles:string){
    return this.http.post(`${this.apiUrl}/userRegister`, {
      name : name,
      email:email,
      password:password,
      roles:roles
    });
  }

    postTodo(data: any){
    return this.http.post(`${this.apiUrl}/todoCreate`,data);
  }


getTodoByUserId(id: string) {
  return this.http.get(`${this.apiUrl}/todo/${id}`);
}

deleteTodo(id: string) {
  return this.http.delete(`${this.apiUrl}/todo/${id}`);
}
}
    