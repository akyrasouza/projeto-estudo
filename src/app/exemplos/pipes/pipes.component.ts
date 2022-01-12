import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  data = new Date();
  nome = 'joão'
  percentual = 0.55
  salario = 1234;
  
  constructor() { }

  ngOnInit(): void {
  }

}
