import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';
import { query } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = environment.apiUrl + query;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.apikey}`
    });

    return this.http.get(url, {headers});
  }

  getNuevoLanzamientos() {

    return this.getQuery('browse/new-releases')
    .pipe(map(res => {
      return res['albums'].items;
    }));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(res => {
      return res['artists'].items;
    }));
  }

  buscarArtista (id: string) {

    return this.getQuery(`artists/${id}`);

  }

  getTopTrack (id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(res => {
      return res['tracks'];
    }));

  }

  getAlbums (id: string) {
    return this.getQuery(`artists/${id}/albums?limit=20`)
    .pipe(map(res => {
      return res['items'];
    }));
  }
}
