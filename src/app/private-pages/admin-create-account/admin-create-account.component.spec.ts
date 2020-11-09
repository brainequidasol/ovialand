import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateAccountComponent } from './admin-create-account.component';

describe('AdminCreateAccountComponent', () => {
  let component: AdminCreateAccountComponent;
  let fixture: ComponentFixture<AdminCreateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
