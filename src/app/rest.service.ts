import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, of, Observable, BehaviorSubject, combineLatest, throwError} from 'rxjs';
import {environment} from '../environments/environment';
import {tap, catchError, concatMap, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }
}

