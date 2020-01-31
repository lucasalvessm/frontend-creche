import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrecheDetailComponent } from './creche-detail.component';

describe('CrecheDetailComponent', () => {
  let component: CrecheDetailComponent;
  let fixture: ComponentFixture<CrecheDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrecheDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrecheDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
