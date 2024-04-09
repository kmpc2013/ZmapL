import { Component } from '@angular/core';
import { VeeamTableComponent } from '../../components/veeamTable/veeam-table.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-veeam',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,VeeamTableComponent],
  templateUrl: './veeam.component.html',
  styleUrl: './veeam.component.scss'
})
export class VeeamComponent {

}
