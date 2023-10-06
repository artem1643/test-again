import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDachboardComponent } from './admin-dachboard.component';

describe('AdminDachboardComponent', () => {
  let component: AdminDachboardComponent;
  let fixture: ComponentFixture<AdminDachboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDachboardComponent]
    });
    fixture = TestBed.createComponent(AdminDachboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
