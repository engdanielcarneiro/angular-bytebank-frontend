import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  // Decorator that allows creating a property bind for this component with the name transferencia.
  @Input() transferencias: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
