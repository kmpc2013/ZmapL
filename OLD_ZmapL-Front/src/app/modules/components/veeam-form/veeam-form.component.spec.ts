import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeeamFormComponent } from './veeam-form.component';

describe('VeeamFormComponent', () => {
  let component: VeeamFormComponent;
  let fixture: ComponentFixture<VeeamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeeamFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
