import { Component } from '@angular/core';
import { FortigateTableComponent } from '../../components/fortigate-table/fortigate-table.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-fortigate',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FortigateTableComponent],
  templateUrl: './fortigate.component.html',
  styleUrl: './fortigate.component.scss'
})
export class FortigateComponent {

}
