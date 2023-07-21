import { Consultar } from './../model/indicacao';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {

  // PEGANDO A URL DA API PARA FAZER A COMUNICAÇÃO
  consultaUrl = "http://localhost:8080/animes";


  constructor(private http: HttpClient) {}

  indicaAnimes(i:string): Observable<Consultar>{
    return this.http.get<Consultar>(this.consultaUrl  + '/id/' + i );
  }

  consultarAnimes(t:string): Observable<Consultar>{
    return this.http.get<Consultar>(this.consultaUrl  + '/name/' + t + '.jpg');
  }
}
