import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StyleguideModule } from "./components/styleguide-component/styleguide.module";
import { LogService } from "./services/log.service";
import { EwCommonModule } from "../common/common.module";
import { ItemsListComponent } from "./components/items/items-list/items-list.component";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, ItemsListComponent],
  imports: [
    BrowserModule,
    EwCommonModule,
    StyleguideModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [LogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
