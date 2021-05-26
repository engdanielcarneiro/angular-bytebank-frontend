import { Component } from '@angular/core';


// Decorator -> Defines class properties
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = []; //It's necessary to initialize the array!

  transferir($event:any){
    console.log($event);
    const transferencia = {...$event, data: new Date()}; //...spreadOperator = getting only the internal props and passing. Not the object itself.
    this.transferencias.push(transferencia);
  }
}
