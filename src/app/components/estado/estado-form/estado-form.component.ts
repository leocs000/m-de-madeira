import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EstadoService } from '../../../services/estado.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-estado-form',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './estado-form.component.html',
  styleUrl: './estado-form.component.css'
})
export class EstadoFormComponent {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private estadoService: EstadoService,
    private router: Router ) {
      this.formGroup = this.formBuilder.group({
        nome:['', Validators.required],
        sigla: ['', Validators.required]
      })
    }

    OnSubmit(){
      if(this.formGroup.valid){
        const novoEstado = this.formGroup.value;
        this.estadoService.salvar(novoEstado).subscribe({
          next: (estadoCadastrado) => {
            this.router.navigateByUrl('/estados');
          },
          error: (err) => {
            console.log('Erro ao salvar' + JSON.stringify(err));
          }
        })
      }
    }
}
