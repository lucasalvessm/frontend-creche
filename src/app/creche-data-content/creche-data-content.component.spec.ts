import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrecheDataContentComponent } from './creche-data-content.component';

describe('CrecheDataContentComponent', () => {
  let component: CrecheDataContentComponent;
  let fixture: ComponentFixture<CrecheDataContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrecheDataContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrecheDataContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
