import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { VeeamCreateComponent } from '../../dialogs/veeam-create/veeam-create.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IVeeamMap } from '../../interface/IVeeamMap';
import { BackService } from '../../services/back.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { VeeamEditComponent } from '../../dialogs/veeam-edit/veeam-edit.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { VeeamDeleteComponent } from '../../dialogs/veeam-delete/veeam-delete.component';

@Component({
  selector: 'app-veeam',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './veeam.component.html',
  styleUrl: './veeam.component.scss',
})
export class VeeamComponent {
  public arrayVeeamALL: IVeeamMap[] = [];
  public arrayVeeamFiltered: IVeeamMap[] = [];

  constructor(public dialog: MatDialog, private backService: BackService) {}

  getVeeamMap() {
    this.backService.getVeeamMap().subscribe((data: IVeeamMap[]) => {
      this.arrayVeeamALL = data;
      this.arrayVeeamFiltered = this.arrayVeeamALL;
    });
  }

  ngOnInit() {
    this.getVeeamMap();
  }

  public openDialogVeeamCreate() {
    this.dialog.open(VeeamCreateComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

  public openDialogVeeamEdit(data: IVeeamMap) {
    this.dialog.open(VeeamEditComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

  public openDialogVeeamDelete(data: IVeeamMap) {
    this.dialog.open(VeeamDeleteComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
