import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }


  userSubject : Subject<User> = new Subject();
  userSubject$: Observable<User> = this.userSubject.asObservable();



  usersBeSubject = new BehaviorSubject<User>(null);
  usersob$ : Observable<User> = this.usersBeSubject.asObservable();




}
