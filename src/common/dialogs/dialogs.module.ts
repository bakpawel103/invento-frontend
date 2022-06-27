import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { DialogService } from './service/dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    ConfirmDialogComponent,
    InfoDialogComponent
  ],
  exports: [
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent,
    InfoDialogComponent
  ],
  providers: [DialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogsModule {
}
