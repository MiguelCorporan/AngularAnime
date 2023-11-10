import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Product} from 'src/interface/product.models'

@Injectable({
  providedIn: 'root'
})
export class SavesService {

  constructor() {
    const storeFav = localStorage.getItem('fav');
    if (storeFav) {
      this.FavItem = JSON.parse(storeFav);
      this.FavItemList.next(this.FavItem);
    }
   }


  public FavItem: Product[] = []
  FavItemList = new BehaviorSubject<Product[]>([])
  
  check = new BehaviorSubject<boolean>(false)
  check2 = new BehaviorSubject<boolean>(false)
  check3 = new BehaviorSubject<boolean>(false)



  FavSave(item: Product){
    const Encontrar = this.FavItem.find((items:Product) => items.id === item.id )

    if (Encontrar) {
      console.log('este item ya esta');
      this.check2.next(true)
      
    } else {
        this.FavItem = [...this.FavItem, {...item}]
        console.log(this.FavItem, 'se agrego');
        
        this.FavItemList.next(this.FavItem)

        localStorage.setItem('fav', JSON.stringify(this.FavItem))

        this.check.next(true)
    }
  }

  removeItem(item: Product) {
    this.FavItem.map((a: Product, index: number) => {
      if (item.id === a.id) {
        this.FavItem.splice(index, 1)
      }
    })

    localStorage.setItem('fav', JSON.stringify(this.FavItem));
    this.check3.next(true)
  }

  removeAll(){
    console.log('pa');
    
    this.FavItem = []
    this.FavItemList.next(this.FavItem)
    localStorage.setItem('fav', JSON.stringify(this.FavItem));
  }

  FavRe(){
    return this.FavItemList.asObservable()
  }

  


  
  chec() {
    return this.check.asObservable()
  }
  chec2() {
    return this.check2.asObservable()
  }
  chec3() {
    return this.check3.asObservable()
  }
}
