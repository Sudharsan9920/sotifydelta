import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddsongspgComponent } from './mainpgs/addsongspg/addsongspg.component';
import { MainpgComponent } from './mainpgs/mainpg/mainpg.component';
import { RegistrationComponent } from './mainpgs/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AddsongspgComponent,
    MainpgComponent,
    RegistrationComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
