import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  oculto: boolean = false;
  lista : string[] = ['Angular', 'Java', 'C#', 'PHP'];
  ocultar(){
    this.oculto = true
  }
  status : string = ''
  alimento : string = ''

  alimentos: string[] = ['Feijão', 'Arroz', 'Macarrão', 'Batata', 'Pizza', 'Sorvete', 'Coxinha', 'Pudim', 'Bolo', 'Torta', 'Pão'];

  constructor() { }

  ngOnInit(): void {
  }

}
