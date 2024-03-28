import { Component } from '@angular/core';
import { IVeeamMap } from '../../interface/IVeeamMap';
import { BackService } from '../../services/back.service';

@Component({
  selector: 'app-veeam',
  standalone: true,
  imports: [],
  templateUrl: './veeam.component.html',
  styleUrl: './veeam.component.scss',
})
export class VeeamComponent {
  constructor(private BackService: BackService) {}

  public arrayVeeamALL: IVeeamMap[] = [];
  public arrayVeeamFiltered: IVeeamMap[] = [];

  getDocs() {
    this.BackService.getVeeamMap().subscribe((data: IVeeamMap[]) => {
      this.arrayVeeamALL = data;
      this.arrayVeeamFiltered = this.arrayVeeamALL;
    });
  }

  ngOnInit() {
    this.getDocs();
  }
  
}
