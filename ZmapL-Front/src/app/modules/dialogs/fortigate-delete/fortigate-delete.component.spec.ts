import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortigateDeleteComponent } from './fortigate-delete.component';

describe('FortigateDeleteComponent', () => {
  let component: FortigateDeleteComponent;
  let fixture: ComponentFixture<FortigateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortigateDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortigateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
