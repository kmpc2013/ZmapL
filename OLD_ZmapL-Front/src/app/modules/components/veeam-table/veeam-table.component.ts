import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { IVeeamMap } from '../../interface/IVeeamMap';
import { BackService } from '../../services/back.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { VeeamFormComponent } from '../veeam-form/veeam-form.component';
import { ActivatedRoute } from '@angular/router';
import { VeeamCreateComponent } from '../dialogs/veeam-create/veeam-create.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-veeam-table',
  standalone: true,
  imports: [VeeamFormComponent, MatButtonModule, MatDialogModule],
  templateUrl: './veeam-table.component.html',
  styleUrl: './veeam-table.component.scss',
  providers: [NgbModalConfig, NgbModal],
})
export class VeeamTableComponent implements OnInit {
  public arrayVeeamALL: IVeeamMap[] = [];
  public arrayVeeamFiltered: IVeeamMap[] = [];
  public entry!: IVeeamMap;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private BackService: BackService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  getVeeamMap() {
    this.BackService.getVeeamMap().subscribe((data: IVeeamMap[]) => {
      this.arrayVeeamALL = data;
      this.arrayVeeamFiltered = this.arrayVeeamALL;
    });
  }

  ngOnInit() {
    this.getVeeamMap();
  }

  open(content: any) {
    this.modalService.open(VeeamCreateComponent);
  }

  openDelete(content: any, item: IVeeamMap) {
    this.modalService.open(VeeamCreateComponent);
  }

  deleteEntry(): void {
    console.log()
  }

  public openDialogCreate(event: Event) {
    //event.preventDefault();
    this.dialog.open(VeeamCreateComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

}
