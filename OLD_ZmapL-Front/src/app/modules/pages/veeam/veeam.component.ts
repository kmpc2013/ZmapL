import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { VeeamTableComponent } from '../../components/veeam-table/veeam-table.component';

@Component({
  selector: 'app-veeam',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,VeeamTableComponent],
  templateUrl: './veeam.component.html',
  styleUrl: './veeam.component.scss',
})
export class VeeamComponent {

  
}
