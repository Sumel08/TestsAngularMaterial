import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  list(queryParams: any): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}

export interface Todo {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
}
