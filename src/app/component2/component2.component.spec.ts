import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COmponent2Component } from './component2.component';

describe('COmponent2Component', () => {
  let component: COmponent2Component;
  let fixture: ComponentFixture<COmponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COmponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COmponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
