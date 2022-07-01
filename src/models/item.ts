import { Guid } from "guid-typescript";

export class Item {
  id: Guid;
  name: string;
  createDate: Date;
  description: string;
  quantity: number;
  price: number;
}

export class ItemDTO {
  name: string;
  description: string;
  quantity: number;
  price: number;

  constructor(item: Item) {
    this.name = item.name;
    this.description = item.description;
    this.quantity = item.quantity;
    this.price = item.price;
  }
}
