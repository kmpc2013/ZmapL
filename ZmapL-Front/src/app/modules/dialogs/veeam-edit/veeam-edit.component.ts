import { Component, Inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BackService } from '../../services/back.service';
import { ActivatedRoute } from '@angular/router';
import { IVeeamMap } from '../../interface/IVeeamMap';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-veeam-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './veeam-edit.component.html',
  styleUrl: './veeam-edit.component.scss'
})
export class VeeamEditComponent {
  formGroup!: FormGroup;
  veeamInterface!: IVeeamMap;

  constructor(
    private _diaLogRef: MatDialogRef<VeeamEditComponent>,
    private formBuilder: FormBuilder,
    private veeamService: BackService,
    public matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) private _data: IVeeamMap
  ) {}
  public closeModal() {
    return this._diaLogRef.close();
  }
  public getData = signal<IVeeamMap | null>(null);

  ngOnInit() {
    this.getData.set(this._data);
    this.formGroup = this.formBuilder.group({
      id: this.getData()!.id,
      veeamRepoFilesystem: this.getData()!.VeeamRepoFilesystem,
      veeamTenant: this.getData()!.VeeamTenant,
      veeamAcronym: this.getData()!.VeeamAcronym,
      ligeroCustomerId: this.getData()!.LigeroCustomerId,
      ligeroEmail: this.getData()!.LigeroEmail,
      ligeroService: this.getData()!.LigeroService,
    });
  }

  salvar() {
    this.veeamService.editVeeamMap(this.formGroup.value).subscribe({
      next: (addEntry) => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Editado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          window.location.reload();
        });
      },
      error: (error) => {
        Swal.fire({
          title: 'Erro!',
          text: 'Erro ao editar',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      },
    });
  }
}
