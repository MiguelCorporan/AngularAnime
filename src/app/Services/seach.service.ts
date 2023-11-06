import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Anime {
  images: string;
  title: string;
  episodes: number;
  year: string;
  mal_id:string;
}

interface RespuestaAPI {
  data: Anime[];
  pagination: any;
}

@Injectable({
  providedIn: 'root'
})
export class SeachService {

  private _resultadosAnimeSubject = new BehaviorSubject<Anime[]>([]);
  public resultadosAnime$ = this._resultadosAnimeSubject.asObservable();


  constructor(private http: HttpClient) { }

  Buscador(Palabra: any): Observable<Anime[]> {
    return this.http.get<RespuestaAPI>(`https://api.jikan.moe/v4/anime?q=${Palabra}&sfw`).pipe(
      map(res => {
        const resultados: Anime[] = res.data.map(anime => ({
          images: anime.images,
          title: anime.title,
          episodes: anime.episodes,
          year: anime.year,
          mal_id:anime.mal_id
        })) || [];
  
        this._resultadosAnimeSubject.next(resultados);
  
        return resultados;
      })
    );
  }
  

}
