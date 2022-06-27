import { TestBed, inject } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('DialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      providers: [
        DialogService,
        MatDialog
      ]
    });
  });

  it('should be created', inject([DialogService], (service: DialogService) => {
    expect(service).toBeTruthy();
  }));
});
