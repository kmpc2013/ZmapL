import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareDeleteComponent } from './vmware-delete.component';

describe('VmwareDeleteComponent', () => {
  let component: VmwareDeleteComponent;
  let fixture: ComponentFixture<VmwareDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmwareDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmwareDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
