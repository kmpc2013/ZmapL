import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BackService } from '../../services/back.service';
import { ActivatedRoute } from '@angular/router';
import { IVeeamMap } from '../../interface/IVeeamMap';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-veeam-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './veeam-create.component.html',
  styleUrl: './veeam-create.component.scss',
})
export class VeeamCreateComponent {
  formGroup!: FormGroup;
  veeamInterface!: IVeeamMap;

  constructor(
    private _diaLogRef: MatDialogRef<VeeamCreateComponent>,
    private formBuilder: FormBuilder,
    private veeamService: BackService,
    public matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {}
  public closeModal() {
    return this._diaLogRef.close();
  }
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      veeamRepoFilesystem: [''],
      veeamTenant: [''],
      veeamAcronym: [''],
      ligeroCustomerId: [''],
      ligeroEmail: [''],
      ligeroService: [''],
    });
  }

  salvar() {
    console.log(this.formGroup.value);
    this.veeamService.addVeeamMap(this.formGroup.value).subscribe({
      next: (addEntry) => {
        console.log(this.formGroup.value);
        window.location.reload();
        alert('Cadastrado com sucesso!');
      },
      error: (error) => {
        alert('Erro ao cadastrar');
      },
    });
  }
}
