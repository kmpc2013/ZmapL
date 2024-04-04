import { Component, Inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BackService } from '../../services/back.service';
import { ActivatedRoute } from '@angular/router';
import { IVeeamMap } from '../../interface/IVeeamMap';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    console.log(this.formGroup.value);
    this.veeamService.editVeeamMap(this.formGroup.value).subscribe({
      next: (addEntry) => {
        console.log(this.formGroup.value);
        window.location.reload();
        alert('Editado com sucesso!');
      },
      error: (error) => {
        alert('Erro ao editar');
      },
    });
  }
}
