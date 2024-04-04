import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IVeeamMap } from '../../interface/IVeeamMap';
import { BackService } from '../../services/back.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-veeam-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './veeam-form.component.html',
  styleUrl: './veeam-form.component.scss',
})
export class VeeamFormComponent implements OnInit{
  formGroup!: FormGroup;
  veeamInterface!: IVeeamMap;

  constructor(
    private formBuilder: FormBuilder,
    private veeamService: BackService,
    public matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      veeamRepoFilesystem: [''],
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
        alert("Cadastrado com sucesso!");
      },
      error: (error) => {
        alert("Erro ao cadastrar");
      },
    });
  }
}
