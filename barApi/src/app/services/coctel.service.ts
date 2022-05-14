import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consulta } from '../models/coctel/consulta.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})

export class CoctelService {
  private url = environment["DRIKNAPI"];

  constructor(private http: HttpClient) {
  }

  getByName(Name: string): Observable<Consulta> {
    return this.http.get<Consulta>(this.url + "search.php?s=" + Name);
  }
}
