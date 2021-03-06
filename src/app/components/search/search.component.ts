import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  public loading:boolean;

  constructor( private spotifyService:SpotifyService ) {
    
  }

  ngOnInit(): void {
  }

  public buscar(termino){
    this.loading = false;
    this.spotifyService.getArtistas(termino).subscribe( (data:any) => {
      this.artistas = data;
      this.loading = false;
    });
  }

}
