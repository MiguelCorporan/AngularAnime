import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OneService } from 'src/app/Services/one.service';
import { SavesService } from 'src/app/Services/saves.service';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private One: OneService,
    private save: SavesService){}

  num: any
  anime:any

  ngOnInit(): void {
    this.route.params.subscribe(params => this.num = params['id'])

    this.One.OneAmine(this.num).subscribe((res:any) => {
      console.log(res);
      let {data} = res
      this.anime = data
      console.log(this.anime);
      
    })
  }

  GuardaItem(item:any){

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
  
    
  }

}
