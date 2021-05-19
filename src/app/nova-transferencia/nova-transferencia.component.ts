import { Component } from '@angular/core';

// All the components need a prefix, in this project we are using "app". Check Angular.json
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  transferir() {
    console.log('Solicitado nova transferência!');
    alert('Solicitado nova transferência!');
  }
}
