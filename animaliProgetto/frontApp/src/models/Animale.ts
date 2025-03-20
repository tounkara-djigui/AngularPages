export interface Animale {
    id: number; // Aggiungi l'ID perché è necessario per le operazioni di aggiornamento e eliminazione
    nome: string;
    razza: string;
    eta: number | null;
}