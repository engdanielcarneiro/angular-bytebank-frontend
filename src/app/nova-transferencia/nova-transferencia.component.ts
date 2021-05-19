import { Component } from '@angular/core';

// All the components need a prefix, in this project we are using "app". Check Angular.json
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  // valor: number;
  // destino: number;
  valor: number = 0;
  destino: number = 123;

  transferir() {
    console.log('Solicitado nova transferência!');
    console.log('Valor: ' + this.valor);
    console.log('Destino: ' + this.destino);
  }
}
