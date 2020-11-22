import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  constructor(private http:HttpClient) { }

  getState():Observable<any>{
    return this.http.get<any>(this.url)
  }
}
