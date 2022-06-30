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
  createDate: Date;
  description: string;
  quantity: number;
  price: number;
}
