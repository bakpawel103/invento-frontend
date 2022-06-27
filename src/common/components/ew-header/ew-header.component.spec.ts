import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwHeaderComponent } from './ew-header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogService } from '../styleguide-component/dialogs/service/dialog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LogService } from '../../services/log.service';

describe('EwHeaderComponent', () => {
  let component: EwHeaderComponent;
  let fixture: ComponentFixture<EwHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwHeaderComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        DialogService,
        MatDialog,
        LogService
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
