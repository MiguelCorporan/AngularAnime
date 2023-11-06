import { Component, OnInit } from '@angular/core';
import { SavesService } from 'src/app/Services/saves.service';

@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.css']
})
export class BienComponent implements OnInit {

  constructor(private save: SavesService){}

  view:boolean = false
  view2:boolean = false
  view3:boolean = false

  ngOnInit(): void {
    this.save.chec().subscribe(res => {

      
      if (res) {
        this.view = true
        this.change()
      }
    })

    this.save.chec2().subscribe(res => {
   
      
      if (res) {
        this.view2 = true
        this.change2()
      }
    })
    
    this.save.chec3().subscribe(res => {
      
      if (res) {
        this.view3 = true
        this.change3()
      }
    })
  }


  change() {
    setInterval(() => {
      this.view = false
    }, 3000)
  }

  change2() {
    setInterval(() => {
      this.view2 = false
    }, 3000)
  }

  change3() {
    setInterval(() => {
      this.view3 = false
    }, 3000)
  }

}
