import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrecheInsertComponent } from './creche-insert.component';

describe('CrecheInsertComponent', () => {
  let component: CrecheInsertComponent;
  let fixture: ComponentFixture<CrecheInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrecheInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrecheInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
