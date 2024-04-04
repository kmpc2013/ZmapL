import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeeamCreateComponent } from './veeam-create.component';

describe('VeeamCreateComponent', () => {
  let component: VeeamCreateComponent;
  let fixture: ComponentFixture<VeeamCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeeamCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeeamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
