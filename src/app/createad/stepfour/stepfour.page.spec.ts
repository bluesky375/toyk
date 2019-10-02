import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepfourPage } from './stepfour.page';

describe('StepfourPage', () => {
  let component: StepfourPage;
  let fixture: ComponentFixture<StepfourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepfourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepfourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
