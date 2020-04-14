import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  private token = 'BQBExi9ixUw2PXDTeDmJkTUEqSQJ0Yl8_opBrQHF0f1t5c_nJyYe3QpQwSgvyol5jj7jkyKy2SmLrd0bkiA'; 
  constructor( private http:HttpClient ) {
    console.log('Servicio Spotify')
  }

  
  public getQuery( query: string){

    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
    
    return this.http.get(url, { headers })

  }

  public getNewReleases() {

    return this.getQuery(`browse/new-releases`)
      .pipe( map( (data: any) =>{
        return data.albums.items;
      }));
  }

  public getArtistas(termino: string) {
    
    return this.getQuery(`search?q=${ termino }&type=artist`)
      .pipe( map( (data: any) =>{
        return data.artists.items
      }) )
      
  }

  public getArtista(id: string) {
    
    return this.getQuery(`artists/${ id }`);
    
  }
  
  public getTopTracks(id: string){
    
    return this.getQuery(`artists/${ id }/top-tracks?country=ar`)
      .pipe( map( (data: any) =>{
        return data.tracks
      }) )

  }
}
