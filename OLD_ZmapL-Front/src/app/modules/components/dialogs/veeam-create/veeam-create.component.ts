import { CommonModule } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { IVeeamMap } from '../../../interface/IVeeamMap';
import { BackService } from '../../../services/back.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-veeam-create',
  standalone: true,
  imports: [
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './veeam-create.component.html',
  styleUrl: './veeam-create.component.scss',
})
export class VeeamCreateComponent {
  formGroup!: FormGroup;
  veeamInterface!: IVeeamMap;

  constructor(
    private _diaLogRef: MatDialogRef<VeeamCreateComponent>,
    private formBuilder: FormBuilder,
    private backService: BackService,
    @Inject(MAT_DIALOG_DATA) private _data: IVeeamMap
  ) {}
  
  public getData = signal<IVeeamMap | null>(null);
  
  ngOnInit(): void {
    this.getData.set(this._data);
    this.formGroup = this.formBuilder.group({
      VeeamRepoFilesystem: [''],
      VeeamAcronym: [''],
      LigeroCustomerId: [''],
      LigeroEmail: [''],
      LigeroService: [''],
      changedAt: [''],
    });
  }
  public closeModal() {
    return this._diaLogRef.close();
  }

  salvar() {
    console.log(this.formGroup.value);
    this.backService.addVeeamMap(this.formGroup.value).subscribe({
      next: (addEntry) => {
        window.location.reload();
        alert('Criado com sucesso!');
      },
      error: (error) => {
        alert('Erro ao criar');
      },
    });
  }

}
