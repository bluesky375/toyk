import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytransactionPage } from './mytransaction.page';

describe('MytransactionPage', () => {
  let component: MytransactionPage;
  let fixture: ComponentFixture<MytransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytransactionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
