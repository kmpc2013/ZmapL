import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeeamEditComponent } from './veeam-edit.component';

describe('VeeamEditComponent', () => {
  let component: VeeamEditComponent;
  let fixture: ComponentFixture<VeeamEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeeamEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeeamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
