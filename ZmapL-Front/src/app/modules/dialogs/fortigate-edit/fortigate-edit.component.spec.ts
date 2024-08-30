import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortigateEditComponent } from './fortigate-edit.component';

describe('FortigateEditComponent', () => {
  let component: FortigateEditComponent;
  let fixture: ComponentFixture<FortigateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortigateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortigateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
