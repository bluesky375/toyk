import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersyoufollowPage } from './sellersyoufollow.page';

describe('SellersyoufollowPage', () => {
  let component: SellersyoufollowPage;
  let fixture: ComponentFixture<SellersyoufollowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersyoufollowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersyoufollowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
