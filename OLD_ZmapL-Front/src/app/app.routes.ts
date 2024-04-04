import { Routes } from '@angular/router';
import { VeeamComponent } from './modules/pages/veeam/veeam.component';
import { TestComponent } from './modules/pages/test/test.component';

export const routes: Routes = [
  {
    path: '',
    //component: TestComponent,
    component: VeeamComponent,
  },
];
