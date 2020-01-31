import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrecheCardComponent } from './creche-card.component';

describe('CrecheCardComponent', () => {
  let component: CrecheCardComponent;
  let fixture: ComponentFixture<CrecheCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrecheCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrecheCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
