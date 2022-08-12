import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IItem} from "../model/IItem";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  //private url: string = '/assets/data/items.json'
  private url: string = 'http://localhost:3000/rethy';
  constructor(private http: HttpClient) {
  }

  getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>(this.url);
  }
}
