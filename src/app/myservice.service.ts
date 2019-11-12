import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public http:HttpClient) { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
    showColors(){
      return this.http.get('./assets/Data/demo.json');
    }
 
}
