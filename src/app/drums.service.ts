import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drum } from './drums';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrumsService {
  drums: Drum[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getDrums() {
    return this.http.get<{id: number, name: string}[]>(environment.apiUrl + '/drum');
  }
}
