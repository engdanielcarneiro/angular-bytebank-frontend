import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Everything inside Angular is a component. So we have to declare them.
@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],
  //Angular concatenate funcionalities and components inside a module. I need to import here the modules I need.
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
