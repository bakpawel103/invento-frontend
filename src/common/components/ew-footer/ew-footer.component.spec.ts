import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwFooterComponent } from './ew-footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EwFooterComponent', () => {
  let component: EwFooterComponent;
  let fixture: ComponentFixture<EwFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwFooterComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
