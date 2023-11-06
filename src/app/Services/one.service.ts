import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneService {

  constructor(private http: HttpClient) { }

  // url = https://api.jikan.moe/v4/anime/{id}/full

  OneAmine(id:number){
      return this.http.get(`https://api.jikan.moe/v4/anime/${id}/full`)
  }
}
