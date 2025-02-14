import { Routes } from '@angular/router';
import { VeeamComponent } from './modules/pages/veeam/veeam.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { FortigateComponent } from './modules/pages/fortigate/fortigate.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { VmwareComponent } from './modules/pages/vmware/vmware.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'veeam',
    component: VeeamComponent,
  },
  {
    path: 'fortigate',
    component: FortigateComponent,
  },
  {
    path: 'vmware',
    component: VmwareComponent,
  },
];
