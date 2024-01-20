import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

import { SeachService } from 'src/app/Services/seach.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private buscador: SeachService){}

  items: MenuItem[] | undefined;

  searchTexto: string = '';


  ngOnInit(): void {
    
    this.items = [
      {
          label: 'Inicio',
          icon: 'pi pi-fw pi-home',
          command: (event) => {
            event.originalEvent?.preventDefault();  
            this.navigate('/');  
        }
      },
      {
          label: 'Favoritos',
          icon: 'pi pi-fw pi-star',
          // url: 'favoritos',
          command: (event) => {
            event.originalEvent?.preventDefault();  
            this.navigate('/favoritos');  
        }
      },
      // {
      //     label: 'Quit',
      //     icon: 'pi pi-fw pi-power-off'
      // }
  ];
  }

  handleEnter(): void {
    this.buscador.Buscador(this.searchTexto).subscribe(res => {
        this.router.navigate(['/busqueda'])
        this.searchTexto = '';
    })
  }


navigate(path: string) {
  this.router.navigate([path]);
}

}
