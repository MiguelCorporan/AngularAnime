import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEndService } from 'src/app/Services/api-end.service';
import { PruebaService } from 'src/app/Services/prueba.service';
import { SavesService } from 'src/app/Services/saves.service';
import { Product as Productos } from 'src/interface/product.models'

@Component({
  selector: 'app-carrouselhorizontal',
  templateUrl: './carrouselhorizontal.component.html',
  styleUrls: ['./carrouselhorizontal.component.css']
})

export class CarrouselhorizontalComponent implements OnInit {

  responsiveOptions: any[] | undefined;

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

  constructor(
    private Api: ApiEndService,
     private probando: PruebaService,
     private save: SavesService,
     private router: Router
     ){}

  ngOnInit() {
     this.Api.TopAnime().subscribe((data: Productos[]) =>{     
      this.products = data
         if (data) {
            this.view = false      
         }
       }
     )
    
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 5,
          numScroll: 2
      },
      {
          breakpoint: '1220px',
          numVisible: 3,
          numScroll: 2
      },
      {
          breakpoint: '1100px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }


  GuardaItem(item: Productos){
    console.log(item);
    console.log('holaa');
    this.save.FavSave(item)
  }


  BuscaUno(id:any){
    // this.One.OneAmine(id)  
    
    this.router.navigate(['detalle/', id])
}

}


