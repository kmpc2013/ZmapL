import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareCreateComponent } from './vmware-create.component';

describe('VmwareCreateComponent', () => {
  let component: VmwareCreateComponent;
  let fixture: ComponentFixture<VmwareCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmwareCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmwareCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
