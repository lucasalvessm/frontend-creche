import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrecheListComponent } from './creche-list.component';

describe('CrecheListComponent', () => {
  let component: CrecheListComponent;
  let fixture: ComponentFixture<CrecheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrecheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrecheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
