import { Component, OnInit, ViewChild } from "@angular/core";
import { Item } from "src/models/item";
import { ItemsListService } from "../service/items-list.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { DialogService } from "../../styleguide-component/dialogs/service/dialog.service";

@Component({
  selector: "ew-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.scss"],
})
export class ItemsListComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "createDate",
    "description",
    "quantity",
    "price",
    "edit",
    "delete",
  ];

  items: Item[] = [];

  dataSource = new MatTableDataSource(this.items);

  @ViewChild("itemTbSort") itemTbSort = new MatSort();

  constructor(
    private itemsListService: ItemsListService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.itemsListService.getAll().subscribe((response) => {
      this.items = response;
      this.dataSource = new MatTableDataSource(this.items);
      this.itemTbSort.disableClear = true;
      this.dataSource.sort = this.itemTbSort;
    });
  }

  public showInfoDialog(): void {
    this.dialogService.openAddItemDialog().then((result) => {
      console.log(result);
    });
  }

  public editItem(item: Item): void {
    console.log(item);
  }

  public deleteItem(item: Item): void {
    console.log(item);
  }
}
