import { Component, EventEmitter, Output } from '@angular/core';

// All the components need a prefix, in this project we are using "app". Check Angular.json
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  //@Output -> Property to send data to outside.
  //Any is a typescript resource that says that this type can be any one. For now, we set any, but int the future we should specify it.
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitado nova transferência!');

    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
