import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';


const api = "http://127.0.0.1:4000";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<News>> {
    return this.http.get<Array<News>>(api + '/api/news/');
  }

  getById(id: number): Observable<News>{ 
     return this.http.get<News>(api + '/api/news/id/' + id); 
  }

  getByTopic(id: number): Observable<Array<News>>{  return this.http.get<Array<News>>(api + '/api/news/topic/' + id); }

  search(name: string){  return this.http.get(api + '/api/news/search/' + name); }

}
