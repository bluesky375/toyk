import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfollowersPage } from './myfollowers.page';

describe('MyfollowersPage', () => {
  let component: MyfollowersPage;
  let fixture: ComponentFixture<MyfollowersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfollowersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfollowersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
