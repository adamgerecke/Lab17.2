import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parent} from './interfaces/data2';

@Injectable({
  providedIn: 'root'
})
export class AwwService {

  constructor(private http:HttpClient) { }

  getAww(){
    return this.http.get<Parent>('https://www.reddit.com/r/aww/.json');
  }

}
