import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFortigateMap } from '../../interface/IFortigateMap';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BackService } from '../../services/back.service';

@Component({
  selector: 'app-fortigate-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fortigate-create.component.html',
  styleUrl: './fortigate-create.component.scss',
})
export class FortigateCreateComponent {
  formGroup!: FormGroup;
  veeamInterface!: IFortigateMap;

  constructor(
    private _diaLogRef: MatDialogRef<FortigateCreateComponent>,
    private formBuilder: FormBuilder,
    private backService: BackService,
    public matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {}

  public closeModal() {
    return this._diaLogRef.close();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      VDOM: [''],
      ligeroCustomerId: [''],
      ligeroEmail: [''],
      ligeroService: [''],
    });
  }

  salvar() {
    console.log(this.formGroup.value);
    this.backService.addFortigateMap(this.formGroup.value).subscribe({
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
