import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  sbj = new Subject<string>();
  beSbj = new BehaviorSubject('start'); //valore di partenza
  ReSbj = new ReplaySubject<string>(10);

  constructor() { }
}
