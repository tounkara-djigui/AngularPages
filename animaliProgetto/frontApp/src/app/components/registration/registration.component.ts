import { Component } from '@angular/core';
import { AnimaliService } from '../../services/animali.service';
import { Animale } from '../../../models/Animale';
@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  animale: Animale = { id: 0, nome: '', razza: '', eta: 0 };
  isInput: boolean = true; 
    constructor(private animaleService: AnimaliService) {}

    // Registra un nuovo animale
    registraAnimale(): void {
        this.animaleService.createAnimale(this.animale).subscribe(
            () => {
                this.animale = { id: 0, nome: '', razza: '', eta: 0 }; // Resetta il form
                alert('Animale registrato con successo!');
            },
            (error) => console.error('Errore nella registrazione dell\'animale:', error)
        );
    }
}


