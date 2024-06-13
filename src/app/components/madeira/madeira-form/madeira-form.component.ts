import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MadeiraService } from '../../../services/madeira.service';
import { Madeira } from '../../../models/madeira.model';
import { MaterialService } from '../../../services/material.service';
import { Material } from '../../../models/material.model';
import { TipoCorte } from '../../../models/tipo-corte.model';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-madeira-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule,
    RouterModule, MatSelectModule],
  templateUrl: './madeira-form.component.html',
  styleUrl: './madeira-form.component.css'
})
export class MadeiraFormComponent implements OnInit {
  formGroup: FormGroup;
  materiais: Material[] = [];
  tiposDeCortes: TipoCorte[] = [];

  constructor(private formBuilder: FormBuilder,
    private madeiraService: MadeiraService,
    private materialService: MaterialService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    const madeira: Madeira = this.activatedRoute.snapshot.data['madeira'];

    this.formGroup = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      descricao: [null],
      largura: [null],
      comprimento: [null],
      espessura: [null],
      cor: [null],
      quantidade: [null],
      preco: [null],
      material: [null],
      tipoCorte: [null],
      fornecedor: [null],
      acabamento: [null]
    });
  }
  ngOnInit(): void {
    this.materialService.findAll().subscribe(data => {
      this.materiais = data;
      this.initializeForm
    })
  }
  initializeForm() {
    const madeira: Madeira = this.activatedRoute.snapshot.data['madeira'];

    const material = this.materiais
      .find(material => material.id === (madeira?.material?.id || null));

    this.formGroup = this.formBuilder.group({
      id: [(madeira && madeira.id) ? madeira.id : null],
      nome: [(madeira && madeira.nome) ? madeira.nome : '', Validators.required],
      descricao: [(madeira && madeira.descricao) ? madeira.descricao : '', Validators.required],
      largura: [(madeira && madeira.largura) ? madeira.largura : null],
      comprimento: [(madeira && madeira.comprimento) ? madeira.comprimento : null],
      espessura: [(madeira && madeira.espessura) ? madeira.espessura : null],
      cor: [(madeira && madeira.cor) ? madeira.cor : null],
      quantidade: [(madeira && madeira.quantidade) ? madeira.quantidade : null],
      preco: [(madeira && madeira.preco) ? madeira.preco : null],
      material: [material],
      tipoCorte: [null],
      fornecedor: [null],
      acabamento: [null]
    });
  }

  salvar() {
    if (this.formGroup.valid) {
      const madeira = this.formGroup.value;
      if (madeira.id == null) {
        this.madeiraService.insert(madeira).subscribe({
          next: (madeiraCadastrada) => {
            this.router.navigateByUrl('/madeira');
          },
          error: (errorResponse) => {
            console.log('Erro ao incluir' + JSON.stringify(errorResponse));
          }
        });
      } else {
        this.madeiraService.update(madeira).subscribe({
          next: (madeiraAlterada) => {
            this.router.navigateByUrl('/madeira');
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          }
        })
      }
    }
  }

  excluir() {
    if (this.formGroup.valid) {
      const madeira = this.formGroup.value;

      if (madeira.id != null) {
        this.madeiraService.delete(madeira).subscribe({
          next: () => {
            this.router.navigateByUrl('/madeira');
          },
          error: (err) => {
            console.log('Erro ao excluir' + JSON.stringify(err));
          }
        });
      }
    }
  }

  /* OnSubmit(){
    if(this.formGroup.valid){
      const novoEstado = this.formGroup.value;
      this.estadoService.insert(novoEstado).subscribe({
        next: (estadoCadastrado) => {
          this.router.navigateByUrl('/estados');
        },
        error: (err) => {
          console.log('Erro ao salvar' + JSON.stringify(err));
        }
      })
    }
  } */
}
