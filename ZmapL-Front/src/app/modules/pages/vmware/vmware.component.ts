import { Component } from '@angular/core';
import { VmwareTableComponent } from '../../components/vmware-table/vmware-table.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-vmware',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, VmwareTableComponent],
  templateUrl: './vmware.component.html',
  styleUrl: './vmware.component.scss',
})
export class VmwareComponent {}
