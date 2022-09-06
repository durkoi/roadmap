import { Component, OnInit } from '@angular/core';
import {ItemService} from "../services/item.service";
import {IItem} from "../model/IItem";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {

  public items: Array<IItem>;
  public errorMsg: string;

  constructor(private itemService: ItemService) {
    this.items = [];
    this.errorMsg = '';
  }

  ngOnInit(): void {
    this.itemService.listItems().subscribe(data => this.items = data);
  }

}
