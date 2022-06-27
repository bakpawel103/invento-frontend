import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleguideModule } from './components/styleguide-component/styleguide.module';
import { LogService } from './services/log.service';
import { EwCommonModule } from '../common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EwCommonModule,
    StyleguideModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
