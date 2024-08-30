import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortigateCreateComponent } from './fortigate-create.component';

describe('FortigateCreateComponent', () => {
  let component: FortigateCreateComponent;
  let fixture: ComponentFixture<FortigateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortigateCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortigateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
