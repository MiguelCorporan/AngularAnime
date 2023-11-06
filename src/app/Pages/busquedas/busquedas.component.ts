import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SavesService } from 'src/app/Services/saves.service';
import { SeachService } from 'src/app/Services/seach.service';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.css']
})
export class BusquedasComponent implements OnInit, OnDestroy {

  private resultadosAnimeSubscription!: Subscription;

  AllAnimes:any
  view = true 

  constructor(
    private buscador: SeachService,
     private save: SavesService,
     private router: Router
     ){}

  ngOnInit(): void {
    
    this.resultadosAnimeSubscription = this.buscador.resultadosAnime$.subscribe(res => {

      if (res.length > 0) {
        this.AllAnimes = res
        this.view = false
      }else{
        console.log('No tenemos este anime');
      }
    })
  }


  ngOnDestroy(): void {
    if (this.resultadosAnimeSubscription) {
      this.resultadosAnimeSubscription.unsubscribe();
    }
  }


  GuardaItem(item: any) {
    let Modificado;
  
    if (item.images && item.images.jpg) {
      Modificado = {
        ...item,
        id: item.mal_id,
        image: item.images.jpg.image_url,
        name: item.title
      };
    } else {
      Modificado = item;
    }
    
    this.save.FavSave(Modificado);
    console.log(Modificado, 'este');
    
  }

  BuscaUno(id:any){
    // this.One.OneAmine(id)   
    this.router.navigate(['detalle/', id])
}

}
