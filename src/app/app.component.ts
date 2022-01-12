import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = 'Akyra Brasil';
  idade = 29;
  linkImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80';
  alturaImg = 30;
  larguraImg = 30;

  calculaAnoNascimento(): Number{
    const today = new Date();

    return today.getFullYear() - this.idade;
  }

  aumentar(){
    this.larguraImg += 20;
    this.alturaImg += 15;
  }

  diminuir(){
    this.larguraImg -= 20;
    this.alturaImg -= 15;
  }
}
