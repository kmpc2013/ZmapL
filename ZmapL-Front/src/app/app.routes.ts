import { Routes } from '@angular/router';
import { VeeamComponent } from './modules/pages/veeam/veeam.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { FooterComponent } from './modules/components/footer/footer.component';

export const routes: Routes = [
  {
    path: '',
    component: VeeamComponent,
  },
  {
    path: 'veeam',
    component: HeaderComponent,
  },
  {
    path: 'fortigate',
    component: HeaderComponent,
  },
];
