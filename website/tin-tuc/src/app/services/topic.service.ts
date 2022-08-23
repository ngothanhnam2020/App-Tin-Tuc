import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';

const api = "http://127.0.0.1:4000";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  //lấy tất cả các topic được hiện từ topics trong json
  getAll(): Observable<Array<Topic>> {
    return this.http.get<Array<Topic>>(api + '/api/topics/');
  }

  //lấy topic được hiện từ topics với id trong json
  getById(id: number): Observable<Topic>{  return this.http.get<Topic>(api + '/api/topics/id/' + id); }

}
