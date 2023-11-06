import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import {ApiResponse} from 'src/interface/apicinco.data'
import {AnimeData} from 'src/interface/apicinco.data'
import {Product} from 'src/interface/product.models'


@Injectable({
  providedIn: 'root'
})
export class ApiEndService {

  private llego = new BehaviorSubject<boolean>(true);
  llego$ = this.llego.asObservable();

  apiUrl: string = 'https://api.jikan.moe/v4/top/anime'

  constructor(private http: HttpClient) { }

    TopAnime():Observable<Product[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => this.mapResponseToProductData(response.data)),
      map(data => data.slice(5, 15)),
      catchError(this.handleError)
    );
  }

  private mapResponseToProductData(data: AnimeData[]): Product[] {
    return data.map(item => ({
      id: item.mal_id.toString(),
      code: 'custom-code', 
      name: item.title,
      description: item.synopsis,
      image: item.images.jpg.image_url,
      price: 0,
      category: 'Anime',
      quantity: item.episodes,
      inventoryStatus: item.airing ? 'OUTOFSTOCK' : 'INSTOCK',
      rating: Math.round(item.score)
    }));
  }

  private handleError(error: any): Observable<never> {
    console.error('Ocurrió un error:', error);
    return throwError('Algo malo ocurrió; por favor intenta de nuevo más tarde.');
  }

  cambiarValor(valor: boolean): void {
    this.llego.next(valor);
  }
}
