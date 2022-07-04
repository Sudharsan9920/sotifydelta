import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsongspgComponent } from './mainpgs/addsongspg/addsongspg.component';
import { HomepgComponent } from './mainpgs/homepg/homepg.component';
import { MainpgComponent } from './mainpgs/mainpg/mainpg.component';
import { RegistrationComponent } from './mainpgs/registration/registration.component';

const routes: Routes = [
  {path:'home',component:HomepgComponent},
  {path:'addsong',component:AddsongspgComponent},
  {path:'',component:MainpgComponent},
  {path:'reg',component:RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
