import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypurchasePage } from './mypurchase.page';

describe('MypurchasePage', () => {
  let component: MypurchasePage;
  let fixture: ComponentFixture<MypurchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypurchasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
