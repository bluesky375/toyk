import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybuyersPage } from './mybuyers.page';

describe('MybuyersPage', () => {
  let component: MybuyersPage;
  let fixture: ComponentFixture<MybuyersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybuyersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybuyersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
