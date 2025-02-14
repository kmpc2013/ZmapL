import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IVmwareMap } from '../../interface/IVmwareMap';
import { MatDialog } from '@angular/material/dialog';
import { BackService } from '../../services/back.service';
import { VmwareCreateComponent } from '../../dialogs/vmware-create/vmware-create.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { VmwareEditComponent } from '../../dialogs/vmware-edit/vmware-edit.component';
import { VmwareDeleteComponent } from '../../dialogs/vmware-delete/vmware-delete.component';

@Component({
  selector: 'app-vmware-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vmware-table.component.html',
  styleUrl: './vmware-table.component.scss'
})
export class VmwareTableComponent {
  public key: String = '';
  public reverse: boolean = true;
  public arrayVmwareFiltered: IVmwareMap[] = [];
  private arrayVmwareALL: IVmwareMap[] = [];
  private dataSort: IVmwareMap[] = [];

  constructor(public dialog: MatDialog, private backService: BackService) { }

  getVmwareMap() {
    this.backService.getVmwareMap().subscribe((data: IVmwareMap[]) => {
      for (var i in data) {
        data[i].ChangedAt = new Date(data[i].ChangedAt);
      }
      this.arrayVmwareALL = data;
      this.arrayVmwareFiltered = this.arrayVmwareALL;
      this.sortTable('id');
    });
  }

  ngOnInit() {
    this.getVmwareMap();
  }

  search(e: Event) {
    console.log('searching...')
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.arrayVmwareFiltered = this.arrayVmwareALL.filter((item) => {
      return Object.values(item).some(
        (val) => typeof val === 'string' && val.toLowerCase().includes(value)
      );
    });
  }

  sortTable(key: String) {
    if (key == 'id') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayVmwareFiltered.sort(function (a, b) {
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVmwareFiltered
          .sort(function (a, b) {
            return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
          })
          .reverse();
      }
    } else if (key == 'ClientVmwareFolder') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayVmwareFiltered.sort(function (a, b) {
          return a.ClientVmwareFolder < b.ClientVmwareFolder
            ? -1
            : a.ClientVmwareFolder > b.ClientVmwareFolder
              ? 1
              : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVmwareFiltered
          .sort(function (a, b) {
            return a.ClientVmwareFolder < b.ClientVmwareFolder
              ? -1
              : a.ClientVmwareFolder > b.ClientVmwareFolder
                ? 1
                : 0;
          })
          .reverse();
      }
    } else if (key == 'LigeroCustomerId') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayVmwareFiltered.sort(function (a, b) {
          return a.LigeroCustomerId < b.LigeroCustomerId
            ? -1
            : a.LigeroCustomerId > b.LigeroCustomerId
              ? 1
              : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVmwareFiltered
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
        this.arrayVmwareFiltered.sort(function (a, b) {
          return a.LigeroEmail < b.LigeroEmail
            ? -1
            : a.LigeroEmail > b.LigeroEmail
              ? 1
              : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVmwareFiltered
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
        this.arrayVmwareFiltered.sort(function (a, b) {
          return a.LigeroService < b.LigeroService
            ? -1
            : a.LigeroService > b.LigeroService
              ? 1
              : 0;
        });
      } else if (this.reverse == false) {
        this.arrayVmwareFiltered
          .sort(function (a, b) {
            return a.LigeroService < b.LigeroService
              ? -1
              : a.LigeroService > b.LigeroService
                ? 1
                : 0;
          })
          .reverse();
      }
    } else {
      this.arrayVmwareFiltered.sort(function (a, b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      });
    }
  }


  public openDialogVmwareCreate(event: Event) {
    event.preventDefault();
    this.dialog.open(VmwareCreateComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
      width: '700px',
    });
  }

  public openDialogVmwareEdit(data: IVmwareMap) {
    this.dialog.open(VmwareEditComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
      width: '700px',
    });
  }

  public openDialogVmwareDelete(data: IVmwareMap) {
    this.dialog.open(VmwareDeleteComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
