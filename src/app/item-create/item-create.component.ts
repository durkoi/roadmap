import { Component, OnInit } from '@angular/core';
import {ItemService} from "../services/item.service";
import {IItem} from "../model/IItem";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  constructor(private itemService: ItemService) {
    this.itemService = itemService;
  }

  ngOnInit(): void {
  }

  createItem(): void {
    //console.log("add button clicked!");
    const itemToAdd: IItem = {id: 9, name: "z", description: "zz"};

    this.itemService.addItem(itemToAdd).subscribe();
    //console.log(itemToAdd);
  }
}
