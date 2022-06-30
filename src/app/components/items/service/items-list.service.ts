import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Guid } from "guid-typescript";
import { Item, ItemDTO } from "src/models/item";

import { environment } from "../../../../environments/environment";

const baseUrl = `${environment.apiUrl}/Item`;

@Injectable({
  providedIn: "root",
})
export class ItemsListService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Item[]>(baseUrl);
  }

  getById(id: Guid) {
    return this.http.get<Item>(`${baseUrl}/${id}`);
  }

  create(body: ItemDTO) {
    return this.http.post(baseUrl, body);
  }

  update(id: Guid, body: ItemDTO) {
    return this.http.put(`${baseUrl}/${id}`, body);
  }

  delete(id: Guid) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
