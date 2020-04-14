import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() items:any[] = [];

  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  public buscarArtista( item:any ){
    
    let artistaId;
    if ( item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id
    }

    this.route.navigate(['artist', artistaId]);
  }

}
