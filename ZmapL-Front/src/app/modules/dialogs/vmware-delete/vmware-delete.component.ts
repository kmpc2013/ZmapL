import { Component, Inject, signal } from '@angular/core';
import { IVmwareMap } from '../../interface/IVmwareMap';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VmwareCreateComponent } from '../vmware-create/vmware-create.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BackService } from '../../services/back.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vmware-delete',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vmware-delete.component.html',
  styleUrl: './vmware-delete.component.scss'
})
export class VmwareDeleteComponent {
  public formGroup!: FormGroup;
  public veeamInterface!: IVmwareMap;
  public getData = signal<IVmwareMap | null>(null);

  constructor(
    private _diaLogRef: MatDialogRef<VmwareCreateComponent>,
    private formBuilder: FormBuilder,
    private backService: BackService,
    public matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) private _data: IVmwareMap
  ) {}

  public closeModal() {
    return this._diaLogRef.close();
  }

  ngOnInit() {
    this.getData.set(this._data);
    this.formGroup = this.formBuilder.group({
      id: this.getData()!.id,
      clientVmwareFolder: this.getData()!.ClientVmwareFolder,
      ligeroCustomerId: this.getData()!.LigeroCustomerId,
      ligeroEmail: this.getData()!.LigeroEmail,
      ligeroService: this.getData()!.LigeroService,
    });
  }

  salvar() {
    this.backService.deleteVmwareMap(this.formGroup.value).subscribe({
      next: (addEntry) => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Removido com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6'
        }).then(() => {
          window.location.reload();
        });
      },
      error: (error) => {
        Swal.fire({
          title: 'Erro!',
          text: 'Erro ao remover',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6'
        });
      },
    });
  }
}
