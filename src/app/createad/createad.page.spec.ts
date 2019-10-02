import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadPage } from './createad.page';

describe('CreateadPage', () => {
  let component: CreateadPage;
  let fixture: ComponentFixture<CreateadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
