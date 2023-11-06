import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OneService } from 'src/app/Services/one.service';
import { PruebaService } from 'src/app/Services/prueba.service';
import { SavesService } from 'src/app/Services/saves.service';
import {Product} from 'src/interface/product.models'

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  

  constructor(
    private pruebas: PruebaService,
     private save: SavesService,
     private One: OneService,
     private router: Router) {}

  view = true

  products = [
    {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
]

  responsiveOptions: any[] | undefined;
  
  ngOnInit() {
    

   this.pruebas.TopAnime().subscribe( data =>{

        this.products = data
      if (this.products.length > 1) {
          this.view = false
      }
    
  }
  )

  this.pruebas.EmitirValorLlego().subscribe(res => {
    console.log(res);
    
  })

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 0,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    
  }

  BuscaUno(id:number){
      // this.One.OneAmine(id)  
      console.log(id);
      
      this.router.navigate(['detalle/', id])
  }

  GuardaItem(item: Product){
    console.log('holaa');
    this.save.FavSave(item)
  }
}
