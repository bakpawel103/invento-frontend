import { Component, OnInit, ViewChild } from "@angular/core";
import { Item, ItemDTO } from "src/models/item";
import { ItemsListService } from "../service/items-list.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { DialogService } from "../../styleguide-component/dialogs/service/dialog.service";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

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
    "actions",
  ];

  dataSource = new MatTableDataSource();

  @ViewChild("itemTbSort") itemTbSort = new MatSort();

  snackbarConfig: MatSnackBarConfig = {
    duration: 3000,
    verticalPosition: "top",
    horizontalPosition: "end",
    panelClass: ["green-snackbar"],
  };

  errorSnackbarConfig: MatSnackBarConfig = {
    duration: 5000,
    verticalPosition: "top",
    horizontalPosition: "end",
    panelClass: ["red-snackbar"],
  };

  constructor(
    private itemsListService: ItemsListService,
    private dialogService: DialogService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.itemsListService.getAll().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.itemTbSort.disableClear = true;
      this.dataSource.sort = this.itemTbSort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public addItem(): void {
    var item = new Item();

    this.dialogService
      .openAddItemDialog(item, "Add item", "Save", "Discard")
      .then((result) => {
        // user wants to add new item
        if (result) {
          this.itemsListService.create(new ItemDTO(item)).subscribe(
            (result) => {
              this.dataSource.data.push(result as Item);
              this.dataSource._updateChangeSubscription();

              this.snackBar.open(
                `Successfully added item '${item.name}'.`,
                undefined,
                this.snackbarConfig
              );
            },
            (err) => {
              this.snackBar.open(
                Object.entries(err.error.errors).reduce((str, [p, val]) => {
                  return `${str}${p}: ${val}\n`;
                }, ""),
                undefined,
                this.errorSnackbarConfig
              );
            }
          );
        }
      });
  }

  public editItem(item: Item): void {
    var tempItem = Object.assign({}, item);

    this.dialogService
      .openAddItemDialog(tempItem, "Edit item", "Save", "Discard")
      .then((result) => {
        // user wants to edit an item
        if (result) {
          this.itemsListService
            .update(tempItem.id, new ItemDTO(tempItem))
            .subscribe(
              () => {
                item = Object.assign(item, tempItem);

                this.snackBar.open(
                  `Item updated.`,
                  undefined,
                  this.snackbarConfig
                );
              },
              (err) => {
                this.snackBar.open(
                  Object.entries(err.error.errors).reduce((str, [p, val]) => {
                    return `${str}${p}: ${val}\n`;
                  }, ""),
                  undefined,
                  this.errorSnackbarConfig
                );
              }
            );
        }
      });
  }

  public deleteItem(item: Item): void {
    this.dialogService
      .openConfirmDialog(
        "Delete item",
        `Do you really want to delete '${item.name}' permanently?`
      )
      .then((result) => {
        // user wants to delete an item
        if (result) {
          this.itemsListService.delete(item.id).subscribe(
            () => {
              this.dataSource.data = this.dataSource.data.filter(
                (elem) => (elem as Item).id != item.id
              );

              this.snackBar.open(
                `Deleted item '${item.name}'.`,
                undefined,
                this.snackbarConfig
              );
            },
            (err) => {
              this.snackBar.open(
                Object.entries(err.error.errors).reduce((str, [p, val]) => {
                  return `${str}${p}: ${val}\n`;
                }, ""),
                undefined,
                this.errorSnackbarConfig
              );
            }
          );
        }
      });
  }
}
