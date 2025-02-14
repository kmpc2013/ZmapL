import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareEditComponent } from './vmware-edit.component';

describe('VmwareEditComponent', () => {
  let component: VmwareEditComponent;
  let fixture: ComponentFixture<VmwareEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmwareEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmwareEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
