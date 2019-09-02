import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {

    this.loading = true;

    this.spotify.getArtistas(termino).subscribe(res => {
      console.log(res);
      this.artistas = res;
      this.loading = false;
    });

  }

}
