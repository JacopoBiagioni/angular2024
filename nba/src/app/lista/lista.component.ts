import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Giocatori} from '../models/players.model';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  obs!: Observable<Giocatori>;
  data!: Giocatori;

  // Richiesta al server e assegnazione dei dati
  constructor (public http : HttpClient) {
    this.obs = this.http.get<Giocatori>('https://www.balldontlie.io/api/v1/players')
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : Giocatori) => {
    this.data = data
    console.log(this.data)
  }

  getLastPart (data : string) {
    let url = data.split("/")
    console.log(url[0])
    return url[0]
  }
}
