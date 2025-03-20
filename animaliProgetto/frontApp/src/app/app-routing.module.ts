import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaliComponent } from './components/animali/animali.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [

  {path:'', component:AnimaliComponent},
  {path:'registration', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
