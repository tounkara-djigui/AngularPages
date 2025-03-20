import { Component } from '@angular/core';
import { AnimaliService } from '../../services/animali.service';
import { Animale } from '../../../models/Animale';

@Component({
  selector: 'app-animali',
  standalone: false,
  templateUrl: './animali.component.html',
  styleUrl: './animali.component.css'
})
export class AnimaliComponent {
  animali: Animale[] = [];
  animaleSelezionato: Animale | null = null;

  constructor(private animaleService: AnimaliService) {}

  ngOnInit(): void {
      this.caricaAnimali();
  }

  // Carica tutti gli animali
  caricaAnimali(): void {
      this.animaleService.getAnimali().subscribe(
          (data) => this.animali = data,
          (error) => console.error('Errore nel caricamento degli animali:', error)
      );
  }

  // Seleziona un animale per la modifica
  selezionaAnimale(animale: Animale): void {
      this.animaleSelezionato = { ...animale };
  }

  // Aggiorna un animale
  updateAnimali(): void {
      if (this.animaleSelezionato) {
          this.animaleService. updateAnimali(this.animaleSelezionato.id, this.animaleSelezionato).subscribe(
              () => {
                  this.caricaAnimali();
                  this.animaleSelezionato = null;
              },
              (error) => console.error('Errore nell\'aggiornamento dell\'animale:', error)
          );
      }
  }

  // Elimina un animale
  deleteAnimale(id: number): void {
      this.animaleService.deleteAnimale(id).subscribe(
          () => this.caricaAnimali(),
          (error) => console.error('Errore nell\'eliminazione dell\'animale:', error)
      );
  }
}


