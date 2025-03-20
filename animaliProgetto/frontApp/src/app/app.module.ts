import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimaliComponent } from './components/animali/animali.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnimaliService } from './services/animali.service';
import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient

@NgModule({
  declarations: [
    AppComponent,
    AnimaliComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    AnimaliService,
    provideHttpClient() // Aggiungi provideHttpClient() qui
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }