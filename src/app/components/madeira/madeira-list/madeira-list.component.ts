import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Madeira } from '../../../models/madeira.model';
import { MadeiraService } from '../../../services/madeira.service';
import { MatMenuModule } from '@angular/material/menu'; 

@Component({
  selector: 'app-madeira-list',
  standalone: true,
  imports: [NgFor, MatButtonModule, RouterModule, MatIconModule, MatTableModule, MatToolbarModule, MatMenuModule, CommonModule],
  templateUrl: './madeira-list.component.html',
  styleUrl: './madeira-list.component.css'
})

export class MadeiraListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'produto', 'preco', 'tipoCorte', 'material', 'acao'];
  madeiras: Madeira[] = [];

  constructor(private madeiraService: MadeiraService){}

  ngOnInit(): void {
    this.madeiraService.findAll().subscribe(data => {
      this.madeiras = data;
    });
  }



}
