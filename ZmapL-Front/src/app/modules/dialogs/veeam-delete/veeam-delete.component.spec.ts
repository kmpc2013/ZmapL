import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeeamDeleteComponent } from './veeam-delete.component';

describe('VeeamDeleteComponent', () => {
  let component: VeeamDeleteComponent;
  let fixture: ComponentFixture<VeeamDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeeamDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeeamDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
