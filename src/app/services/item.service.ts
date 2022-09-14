import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IItem} from "../model/IItem";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  //read from local file
  //private url: string = '/assets/data/items.json'

  //read from local server response
  //private url: string = 'http://localhost:3000';

  //backend input - read from local server, local mongodb
  private url: string = 'http://localhost:3000/rethy';

  //backend input - read from remote server, remote mongodb (same as server)
  //private url: string = 'http://92.118.26.183:3000/zsolti';

  private obs: Observable<IItem[]>;
 // private list: Array<IItem>;

  constructor(private http: HttpClient) {
    this.obs = new Observable<IItem[]>();
  }

  listItems(): Observable<IItem[]> {
    this.obs = this.http.get<IItem[]>(this.url);

   // return this.obs;
    return this.http.get<IItem[]>(this.url);

  }

  addItem(item: IItem) :Observable<any> {

    console.log("addItem post kérés ezután: "+ item.name);
    console.log({item});
    return  this.http.post('http://localhost:3000/addItem', {item});

    //return this.http.post(this.rootURL + '/user', {user});
    //{id: 11, name: "angularból jön", description: "..ez ni"}
  }

  deleteItem(item: IItem):Observable<any> {

    console.log("deleteItem delete kérés ezután: " + item.name);
    return this.http.delete("http://localhost:3000/deleteItem", {observe: "body"});
  }
}
