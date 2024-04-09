import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeeamTableComponent } from './veeam-table.component';

describe('VeeamTableComponent', () => {
  let component: VeeamTableComponent;
  let fixture: ComponentFixture<VeeamTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeeamTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeeamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
