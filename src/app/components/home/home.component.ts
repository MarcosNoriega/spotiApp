import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevosLanzamientos: any[] = [];
  loading: boolean;
  error: boolean;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    spotify.getNuevoLanzamientos().subscribe(res => {
      console.log(res);
      this.nuevosLanzamientos = res;
      this.loading = false;
    }, error => {
      this.error = true;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

}
