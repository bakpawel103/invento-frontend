import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ew-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent {

  public title: string;
  public message: string | SafeHtml;
  public action: string = 'Close';

  constructor(public dialogRef: MatDialogRef<InfoDialogComponent>) { }

  public close() {
    this.dialogRef.close();
  }
}
