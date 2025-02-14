import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IVmwareMap } from '../../interface/IVmwareMap';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BackService } from '../../services/back.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vmware-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vmware-create.component.html',
  styleUrl: './vmware-create.component.scss'
})
export class VmwareCreateComponent {
  formGroup!: FormGroup;
  veeamInterface!: IVmwareMap;

  constructor(
    private _diaLogRef: MatDialogRef<VmwareCreateComponent>,
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
      clientVmwareFolder: [''],
      ligeroCustomerId: [''],
      ligeroEmail: [''],
      ligeroService: [''],
    });
  }

  salvar() {
    this.backService.addVmwareMap(this.formGroup.value).subscribe({
      next: (addEntry) => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Criado com sucesso!',
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
          text: 'Erro ao criar',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6'
        });
      },
    });
  }
}
