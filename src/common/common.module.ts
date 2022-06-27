// Angular
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// EwComponents
import { EwHeaderComponent } from './components/ew-header/ew-header.component';
import { EwFooterComponent } from './components/ew-footer/ew-footer.component';
import { DialogsModule } from './dialogs/dialogs.module';

// EwServices
import { DialogService } from './dialogs/service/dialog.service';
import { LogService } from './services/log.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    EwHeaderComponent,
    EwFooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    DialogsModule
  ],
  providers: [
    DialogService,
    LogService
  ],
  entryComponents: [],
  exports: [
    EwHeaderComponent,
    EwFooterComponent,
    DialogsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EwCommonModule {
}
