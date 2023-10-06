import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGitComponent } from './delete-git.component';

describe('DeleteGitComponent', () => {
  let component: DeleteGitComponent;
  let fixture: ComponentFixture<DeleteGitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteGitComponent]
    });
    fixture = TestBed.createComponent(DeleteGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
