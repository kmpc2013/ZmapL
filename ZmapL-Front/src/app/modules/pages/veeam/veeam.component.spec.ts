import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeeamComponent } from './veeam.component';

describe('VeeamComponent', () => {
  let component: VeeamComponent;
  let fixture: ComponentFixture<VeeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
