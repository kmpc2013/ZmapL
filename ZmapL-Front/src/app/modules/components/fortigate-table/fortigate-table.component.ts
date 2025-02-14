import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFortigateMap } from '../../interface/IFortigateMap';
import { MatDialog } from '@angular/material/dialog';
import { BackService } from '../../services/back.service';
import { FortigateCreateComponent } from '../../dialogs/fortigate-create/fortigate-create.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { FortigateEditComponent } from '../../dialogs/fortigate-edit/fortigate-edit.component';
import { FortigateDeleteComponent } from '../../dialogs/fortigate-delete/fortigate-delete.component';

@Component({
  selector: 'app-fortigate-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fortigate-table.component.html',
  styleUrl: './fortigate-table.component.scss',
})
export class FortigateTableComponent {
  public key: String = '';
  public reverse: boolean = true;
  public arrayFortigateFiltered: IFortigateMap[] = [];
  private arrayFortigateALL: IFortigateMap[] = [];
  private dataSort: IFortigateMap[] = [];

  constructor(public dialog: MatDialog, private backService: BackService) {}
  
  getFortigateMap() {
    this.backService.getFortigateMap().subscribe((data: IFortigateMap[]) => {
      for (var i in data) {
        data[i].ChangedAt = new Date(data[i].ChangedAt);
      }
      this.arrayFortigateALL = data;
      this.arrayFortigateFiltered = this.arrayFortigateALL;
      this.sortTable('id');
    });
  }

  ngOnInit() {
    this.getFortigateMap();
  }

  search(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.arrayFortigateFiltered = this.arrayFortigateALL.filter((item) => {
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
        this.arrayFortigateFiltered.sort(function (a, b) {
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        });
      } else if (this.reverse == false) {
        this.arrayFortigateFiltered
          .sort(function (a, b) {
            return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
          })
          .reverse();
      }
    } else if (key == 'VDOM') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayFortigateFiltered.sort(function (a, b) {
          return a.VDOM < b.VDOM
            ? -1
            : a.VDOM > b.VDOM
            ? 1
            : 0;
        });
      } else if (this.reverse == false) {
        this.arrayFortigateFiltered
          .sort(function (a, b) {
            return a.VDOM < b.VDOM
              ? -1
              : a.VDOM > b.VDOM
              ? 1
              : 0;
          })
          .reverse();
      }
    } else if (key == 'LigeroCustomerId') {
      this.key = key;
      this.reverse = !this.reverse;
      if (this.reverse == true) {
        this.arrayFortigateFiltered.sort(function (a, b) {
          return a.LigeroCustomerId < b.LigeroCustomerId
            ? -1
            : a.LigeroCustomerId > b.LigeroCustomerId
            ? 1
            : 0;
        });
      } else if (this.reverse == false) {
        this.arrayFortigateFiltered
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
        this.arrayFortigateFiltered.sort(function (a, b) {
          return a.LigeroEmail < b.LigeroEmail
            ? -1
            : a.LigeroEmail > b.LigeroEmail
            ? 1
            : 0;
        });
      } else if (this.reverse == false) {
        this.arrayFortigateFiltered
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
        this.arrayFortigateFiltered.sort(function (a, b) {
          return a.LigeroService < b.LigeroService
            ? -1
            : a.LigeroService > b.LigeroService
            ? 1
            : 0;
        });
      } else if (this.reverse == false) {
        this.arrayFortigateFiltered
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
      this.arrayFortigateFiltered.sort(function (a, b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      });
    }
  }


  public openDialogFortigateCreate(event: Event) {
    event.preventDefault();
    this.dialog.open(FortigateCreateComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
      width: '700px',
    });
  }

  public openDialogFortigateEdit(data: IFortigateMap) {
    this.dialog.open(FortigateEditComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
      width: '700px',
    });
  }

  public openDialogFortigateDelete(data: IFortigateMap) {
    this.dialog.open(FortigateDeleteComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

}
