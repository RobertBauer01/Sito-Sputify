import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDwm6-bt-bC0E5CVER78ps8vn0sRT4NoYPjjuOTpsRSsezHnu1PZzEJAbUqmtP_dFG9k3ZQBCTYMlmir1whMT_iNU2VUUgh8_JUlkIdvap0jwoN-SuoU6Q6NO6cr3If1d9HLHhbFF8qYNayFWngxW0wCpgNKMiHFavcQTesYasSmtbwlLA_75amIVutCpi8ru7p-f844Ma1ef4'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  //Ritorno un observable ai componenti che richiedono il servizio
  }
}