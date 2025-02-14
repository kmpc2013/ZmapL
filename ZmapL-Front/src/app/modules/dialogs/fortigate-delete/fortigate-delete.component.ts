import { Component, Inject, signal } from '@angular/core';
import { IFortigateMap } from '../../interface/IFortigateMap';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FortigateCreateComponent } from '../fortigate-create/fortigate-create.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BackService } from '../../services/back.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fortigate-delete',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fortigate-delete.component.html',
  styleUrl: './fortigate-delete.component.scss',
})
export class FortigateDeleteComponent {
  public formGroup!: FormGroup;
  public veeamInterface!: IFortigateMap;
  public getData = signal<IFortigateMap | null>(null);

  constructor(
    private _diaLogRef: MatDialogRef<FortigateCreateComponent>,
    private formBuilder: FormBuilder,
    private backService: BackService,
    public matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) private _data: IFortigateMap
  ) {}

  public closeModal() {
    return this._diaLogRef.close();
  }

  ngOnInit() {
    this.getData.set(this._data);
    this.formGroup = this.formBuilder.group({
      id: this.getData()!.id,
      VDOM: this.getData()!.VDOM,
      ligeroCustomerId: this.getData()!.LigeroCustomerId,
      ligeroEmail: this.getData()!.LigeroEmail,
      ligeroService: this.getData()!.LigeroService,
    });
  }

  salvar() {
    this.backService.deleteFortigateMap(this.formGroup.value).subscribe({
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
