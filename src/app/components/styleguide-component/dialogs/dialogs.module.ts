import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { InfoDialogComponent } from "./info-dialog/info-dialog.component";
import { DialogService } from "./service/dialog.service";
import { AddItemDialogComponent } from "./add-item-dialog/add-item-dialog.component";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [CommonModule, FormsModule, MatButtonModule],
  declarations: [
    ConfirmDialogComponent,
    InfoDialogComponent,
    AddItemDialogComponent,
  ],
  exports: [
    ConfirmDialogComponent,
    InfoDialogComponent,
    AddItemDialogComponent,
  ],
  entryComponents: [
    ConfirmDialogComponent,
    InfoDialogComponent,
    AddItemDialogComponent,
  ],
  providers: [DialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DialogsModule {}
