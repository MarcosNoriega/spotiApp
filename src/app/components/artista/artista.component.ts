import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any;
  loading: boolean;
  topTracks: any;
  albums: any;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {

    this.loading = true;

    activatedRoute.params.subscribe(params => {
      this.buscarArtista(params['id']);
      this.gettopTracks(params['id']);
      this.getAlbums(params['id']);
    });

  }

  ngOnInit() {
  }

  buscarArtista(id) {
    this.spotify.buscarArtista(id).subscribe(res => {
      console.log(res);
      this.artista = res;
      this.loading = false;
    });
  }

  gettopTracks(id) {
    this.spotify.getTopTrack(id).subscribe(res => {
      console.log(res);
      this.topTracks = res;
      this.loading = false;
    });
  }

  getAlbums(id) {
    this.spotify.getAlbums(id).subscribe(res => {
      console.log(res);
      this.albums = res;
      this.loading = false;
    });
  }


}
