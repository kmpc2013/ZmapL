import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortigateComponent } from './fortigate.component';

describe('FortigateComponent', () => {
  let component: FortigateComponent;
  let fixture: ComponentFixture<FortigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortigateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
