import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePagesComponent } from './private-pages.component';

describe('PrivatePagesComponent', () => {
  let component: PrivatePagesComponent;
  let fixture: ComponentFixture<PrivatePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
