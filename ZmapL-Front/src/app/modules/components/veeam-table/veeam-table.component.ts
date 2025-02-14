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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-veeam-table',
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
    CommonModule,
  ],
  templateUrl: './veeam-table.component.html',
  styleUrl: './veeam-table.component.scss',
})
export class VeeamTableComponent {
  private dataSort: IVeeamMap[] = [];
  private arrayVeeamALL: IVeeamMap[] = [];
  public arrayVeeamFiltered: IVeeamMap[] = [];

  constructor(public dialog: MatDialog, private backService: BackService) { }

  key: String = '';
  reverse: boolean = true;

  sortTable(key: String) {
    if (key == 'id') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayVeeamFiltered.sort(function (a, b) {
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVeeamFiltered
          .sort(function (a, b) {
            return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
          })
          .reverse();
      }
    } else if (key == 'VeeamRepoFilesystem') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayVeeamFiltered.sort(function (a, b) {
          return a.VeeamRepoFilesystem < b.VeeamRepoFilesystem
            ? -1
            : a.VeeamRepoFilesystem > b.VeeamRepoFilesystem
              ? 1
              : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVeeamFiltered
          .sort(function (a, b) {
            return a.VeeamRepoFilesystem < b.VeeamRepoFilesystem
              ? -1
              : a.VeeamRepoFilesystem > b.VeeamRepoFilesystem
                ? 1
                : 0;
          })
          .reverse();
      }
    } else if (key == 'VeeamTenant') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayVeeamFiltered.sort(function (a, b) {
          return a.VeeamTenant < b.VeeamTenant
            ? -1
            : a.VeeamTenant > b.VeeamTenant
              ? 1
              : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVeeamFiltered
          .sort(function (a, b) {
            return a.VeeamTenant < b.VeeamTenant
              ? -1
              : a.VeeamTenant > b.VeeamTenant
                ? 1
                : 0;
          })
          .reverse();
      }
    } else if (key == 'VeeamAcronym') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayVeeamFiltered.sort(function (a, b) {
          return a.VeeamAcronym < b.VeeamAcronym
            ? -1
            : a.VeeamAcronym > b.VeeamAcronym
              ? 1
              : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVeeamFiltered
          .sort(function (a, b) {
            return a.VeeamAcronym < b.VeeamAcronym
              ? -1
              : a.VeeamAcronym > b.VeeamAcronym
                ? 1
                : 0;
          })
          .reverse();
      }
    } else if (key == 'LigeroCustomerId') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayVeeamFiltered.sort(function (a, b) {
          return a.LigeroCustomerId < b.LigeroCustomerId
            ? -1
            : a.LigeroCustomerId > b.LigeroCustomerId
              ? 1
              : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVeeamFiltered
          .sort(function (a, b) {
            return a.LigeroCustomerId < b.LigeroCustomerId
              ? -1
              : a.LigeroCustomerId > b.LigeroCustomerId
                ? 1
                : 0;
          })
          .reverse();
      }
    } else if (key == 'LigeroEmail') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayVeeamFiltered.sort(function (a, b) {
          return a.LigeroEmail < b.LigeroEmail
            ? -1
            : a.LigeroEmail > b.LigeroEmail
              ? 1
              : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVeeamFiltered
          .sort(function (a, b) {
            return a.LigeroEmail < b.LigeroEmail
              ? -1
              : a.LigeroEmail > b.LigeroEmail
                ? 1
                : 0;
          })
          .reverse();
      }
    } else if (key == 'LigeroService') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayVeeamFiltered.sort(function (a, b) {
          return a.LigeroService < b.LigeroService
            ? -1
            : a.LigeroService > b.LigeroService
              ? 1
              : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVeeamFiltered
          .sort(function (a, b) {
            return a.LigeroService < b.LigeroService
              ? -1
              : a.VeeamRepoFilesystem > b.VeeamRepoFilesystem
                ? 1
                : 0;
          })
          .reverse();
      }
    } else {
      this.arrayVeeamFiltered.sort(function (a, b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      });
    }
  }

  getVeeamMap() {
    this.backService.getVeeamMap().subscribe((data: IVeeamMap[]) => {
      for (var i in data) {
        data[i].ChangedAt = new Date(data[i].ChangedAt);
      }
      this.arrayVeeamALL = data;
      this.arrayVeeamFiltered = this.arrayVeeamALL;
      this.sortTable('id');
    });
  }

  ngOnInit() {
    this.getVeeamMap();
  }

  search(e: Event) {
    console.log('searching...')
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.arrayVeeamFiltered = this.arrayVeeamALL.filter((item) => {
      return Object.values(item).some(
        (val) => typeof val === 'string' && val.toLowerCase().includes(value)
      );
    });
  }

  public openDialogVeeamCreate(event: Event) {
    event.preventDefault();
    this.dialog.open(VeeamCreateComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
      width: '700px',
    });
  }

  public openDialogVeeamEdit(data: IVeeamMap) {
    this.dialog.open(VeeamEditComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
      width: '700px',
    });
  }

  public openDialogVeeamDelete(data: IVeeamMap) {
    this.dialog.open(VeeamDeleteComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
  
}
