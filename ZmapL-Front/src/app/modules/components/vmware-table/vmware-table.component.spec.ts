import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareTableComponent } from './vmware-table.component';

describe('VmwareTableComponent', () => {
  let component: VmwareTableComponent;
  let fixture: ComponentFixture<VmwareTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmwareTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmwareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
