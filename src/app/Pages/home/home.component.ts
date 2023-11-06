import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiEndService } from 'src/app/Services/api-end.service';
import { PruebaService } from 'src/app/Services/prueba.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  view:boolean = true
  nView:boolean =  true

  // private suscripcion: Subscription;
  private suscripcion2!: Subscription;
  
  constructor(private Api: PruebaService, private end: ApiEndService){  }


  ngOnInit() {
    this.suscripcion2 = this.Api.EmitirValorLlego().subscribe(
      res => {
        this.view = res
      }
    )
  }


  ngOnDestroy(): void {
    this.suscripcion2.unsubscribe();
  }
  


}
