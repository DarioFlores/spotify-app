import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  public artista:any;
  public loading:boolean;
  public tracks:any[] = [];

  constructor( 
    private route: ActivatedRoute,
    private spotify: SpotifyService
  ) {

    this.route.params.subscribe( param => {
      this.loading = true;
      this.getArtista( param.id )
      this.topTracks( param.id );
    })

  }

  ngOnInit(): void {
  }

  topTracks( id: string ){

    this.spotify.getTopTracks(id).subscribe( tracks => {
      this.tracks = tracks;
    })

  }

  getArtista( id: string ){

    this.spotify.getArtista(id).subscribe( artista => {
      this.artista = artista
        this.loading = false;
    })

  }

}
