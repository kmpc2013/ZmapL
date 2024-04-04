import { Component } from '@angular/core';
import { VeeamFormComponent } from '../../components/veeam-form/veeam-form.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [VeeamFormComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
