import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animale } from '../../models/Animale';


@Injectable({
  providedIn: 'root'
})
export class AnimaliService {
animale: Animale[] = [];
  private apiUrl = "http://localhost:3000/animale";

  constructor(private http: HttpClient) { }
  getAnimali(): Observable<Animale[]>{
    return this.http.get<Animale[]>(this.apiUrl);
  }


  createAnimale(animale: Animale): Observable<Animale>{
    return this.http.post<Animale>(this.apiUrl, animale);
  }

  //updateAnimale ovvero aggiornamento dei animali
  updateAnimali(id:number, animale:Animale): Observable<Animale>{
    return this.http.put<Animale>(`${this.apiUrl}/${id}`, animale);
  }

  // animali's deleted ovvero cancellazione dei animali.

deleteAnimale(id:number): Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/${id}`)

}


}
