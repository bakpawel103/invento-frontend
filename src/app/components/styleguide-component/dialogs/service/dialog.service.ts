import { Injectable } from "@angular/core";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { InfoDialogComponent } from "../info-dialog/info-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { environment } from "../../../../../environments/environment";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialogRef } from "@angular/material/dialog";
import { EWGlobal } from "../../../../../models";
import { AddItemDialogComponent } from "../add-item-dialog/add-item-dialog.component";

declare const EWGlobal: EWGlobal;

@Injectable()
export class DialogService {
  constructor(protected dialog: MatDialog, private sanitizer: DomSanitizer) {}

  openAddItemDialog(
    title: string = "Add item",
    confirmButton: string = "Yes",
    cancelButton: string = "No"
  ): Promise<boolean> {
    this.dialog.openDialogs.pop();

    const dialogRef: MatDialogRef<AddItemDialogComponent> = this.dialog.open(
      AddItemDialogComponent,
      {
        data: {},
        disableClose: true,
      }
    );

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.confirmButton = confirmButton;
    dialogRef.componentInstance.cancelButton = cancelButton;

    return dialogRef.afterClosed().toPromise();
  }

  openConfirmDialog(
    title: string = "Confirm",
    content: string = "Do you really want to delete this item? This action can not be undone.",
    confirmButton: string = "Yes",
    cancelButton: string = "No"
  ): Promise<boolean> {
    this.dialog.openDialogs.pop();

    const dialogRef: MatDialogRef<ConfirmDialogComponent> = this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {},
        disableClose: true,
      }
    );

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.content = content;
    dialogRef.componentInstance.confirmButton = confirmButton;
    dialogRef.componentInstance.cancelButton = cancelButton;

    return dialogRef.afterClosed().toPromise();
  }

  openInfoDialog(title: string, message: string): Promise<boolean> {
    this.dialog.openDialogs.pop();

    const dialogRef: MatDialogRef<InfoDialogComponent> = this.dialog.open(
      InfoDialogComponent,
      { height: "500px" }
    );

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed().toPromise();
  }

  openErrorDialog(title: string, message: string): Promise<boolean> {
    this.dialog.openDialogs.pop();

    const dialogRef: MatDialogRef<InfoDialogComponent> = this.dialog.open(
      InfoDialogComponent,
      {
        height: "300px",
        width: "200px",
      }
    );

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed().toPromise();
  }

  openAboutThisDialog(): Promise<boolean> {
    const aboutThisPath =
      environment.aboutThisPath +
      "?Account=" +
      encodeURI(EWGlobal.User.Account) +
      "&Roles=" +
      encodeURI(this.replaceAll(EWGlobal.User.Roles.toString(), ",", ", "));

    const longDesc = this.sanitizer.bypassSecurityTrustHtml(
      '<iframe width="800" height="300" src=' +
        aboutThisPath +
        ' frameborder="0"></iframe>'
    );

    // Important when a dialog is already open
    this.dialog.openDialogs.pop();

    const dialogRef: MatDialogRef<InfoDialogComponent> =
      this.dialog.open(InfoDialogComponent);

    dialogRef.componentInstance.title = "About This";
    dialogRef.componentInstance.message = longDesc;

    return dialogRef.afterClosed().toPromise();
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
}
