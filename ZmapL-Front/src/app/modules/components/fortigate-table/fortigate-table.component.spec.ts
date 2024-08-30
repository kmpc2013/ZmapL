import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortigateTableComponent } from './fortigate-table.component';

describe('FortigateTableComponent', () => {
  let component: FortigateTableComponent;
  let fixture: ComponentFixture<FortigateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortigateTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortigateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
