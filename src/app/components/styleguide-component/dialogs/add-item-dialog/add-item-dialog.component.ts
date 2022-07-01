import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Item } from "src/models/item";

@Component({
  selector: "ew-add-item-dialog",
  templateUrl: "./add-item-dialog.component.html",
  styleUrls: ["./add-item-dialog.component.css"],
})
export class AddItemDialogComponent {
  public title: string;
  public confirmButton: string;
  public cancelButton: string;

  public item: Item;

  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.item = { ...data };
  }

  save() {
    this.data.name = this.item.name;
    this.data.description = this.item.description;
    this.data.quantity = this.item.quantity;
    this.data.price = this.item.price;
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
