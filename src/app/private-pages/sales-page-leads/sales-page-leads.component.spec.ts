import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPageLeadsComponent } from './sales-page-leads.component';

describe('SalesPageLeadsComponent', () => {
  let component: SalesPageLeadsComponent;
  let fixture: ComponentFixture<SalesPageLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPageLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPageLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
