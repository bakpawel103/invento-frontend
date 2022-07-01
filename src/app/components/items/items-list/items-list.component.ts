import { Component, OnInit, ViewChild } from "@angular/core";
import { Item, ItemDTO } from "src/models/item";
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

  dataSource = new MatTableDataSource();

  @ViewChild("itemTbSort") itemTbSort = new MatSort();

  constructor(
    private itemsListService: ItemsListService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.itemsListService.getAll().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.itemTbSort.disableClear = true;
      this.dataSource.sort = this.itemTbSort;
    });
  }

  public addItem(): void {
    var item = new Item();

    this.dialogService
      .openAddItemDialog(item, "Add item", "Add", "Cancel")
      .then((result) => {
        // user wants to add new item
        if (result) {
          this.itemsListService
            .create(new ItemDTO(item))
            .subscribe((result) => {
              this.dataSource.data.push(result as Item);
              this.dataSource._updateChangeSubscription();
            });
        }
      });
  }

  public editItem(item: Item): void {
    this.dialogService
      .openAddItemDialog(item, "Edit item", "Confirm", "Cancel")
      .then((result) => {
        // user edited an item
        if (result) {
          this.itemsListService.update(item.id, new ItemDTO(item)).subscribe();
        }
      });
  }

  public deleteItem(item: Item): void {
    this.dialogService.openConfirmDialog().then((result) => {
      // user want to delete an item
      if (result) {
        this.itemsListService.delete(item.id).subscribe(
          () => {
            this.dataSource.data = this.dataSource.data.filter(
              (elem) => (elem as Item).id != item.id
            );
          },
          (error) => {
            console.error("There was a problem with deleting item: ", error);
          }
        );
      }
    });
  }
}
