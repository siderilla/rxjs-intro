import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { type Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Post[]> {
    // return fetch('https://www.reddit.com/r/ProgrammerHumor.json').then(resp => resp.json());
    return this.http.get<any>('https://www.reddit.com/r/ProgrammerHumor.json').pipe( //questo è un observable che usa pipe e map
      map(data => data.data.children),
      map(children => children.map((child:any) => child.data)) 
    );
  }
}
