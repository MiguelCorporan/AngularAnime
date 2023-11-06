import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavesService } from 'src/app/Services/saves.service';
import { SeachService } from 'src/app/Services/seach.service';

import {Product} from 'src/interface/product.models'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(
    private buscador: SeachService,
     private save: SavesService,
     private router: Router
     ){}

  AllAnimes: any
  public view: boolean = true

  ngOnInit(): void {

    this.save.FavRe().subscribe(res => {
      if (res.length > 0) {
        this.AllAnimes = res
        this.view = false
      } else if (res.length = 0) {
        this.view = true
      } 
      
    })
  }

  remove(item:any){
    this.save.removeItem(item)
  }

  allRemove(){
    console.log('holaaa');
    
    this.save.removeAll()
  }
  
  BuscaUno(id:number){
    // this.One.OneAmine(id)  
    
    this.router.navigate(['detalle/', id])
}

}
