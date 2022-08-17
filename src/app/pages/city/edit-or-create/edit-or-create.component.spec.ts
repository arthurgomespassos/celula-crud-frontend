import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrCreateComponent } from './edit-or-create.component';

describe('EditOrCreateComponent', () => {
  let component: EditOrCreateComponent;
  let fixture: ComponentFixture<EditOrCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditOrCreateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditOrCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
