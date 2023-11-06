import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

interface CarrouselImages {
  imageSrc: string;
  imageAlt: string;
  Title: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  @Input() image: CarrouselImages[] = []

  @Input() Indicador = true
  @Input() Controls = true
  @Input() autoSlider = false
  @Input() interval = 3000

  images = [
    {
      imageSrc:"/assets/Dbs.jpg",
      imageAlt: 'Dbs',
      Title: 'Dragon Ball Super'
    },
    {
      imageSrc:'/assets/NarutoShi.jpg',
      imageAlt: 'Naruto',
      Title: 'Naruto Shippuden'
    },
    {
      imageSrc:'/assets/Dead note.jpg',
      imageAlt: 'Dead Note',
      Title: 'Dead Note'
    },
    {
      imageSrc:'/assets/no game no life.jpg',
      imageAlt: 'No game No life',
      Title: 'No game no life'
    },
    {
      imageSrc:'/assets/one pice.jpg',
      imageAlt: 'One Piece',
      Title: 'One Piece'
    },
    {
      imageSrc:'/assets/cyber.jpg',
      imageAlt: 'cyber',
      Title: 'Cyber Punk'
    },
    {
      imageSrc:'/assets/chaisa.jpg',
      imageAlt: 'chaisa',
      Title: 'Chaisawaman'
    },
    {
      imageSrc:'/assets/Overlord.jpg',
      imageAlt: 'Overlord',
      Title: 'Overlord'
    },
    {
      imageSrc:'/assets/Dbz.jpg',
      imageAlt: 'Dbz',
      Title:'Dragon Ball Z'
    },
  ]

  // images: any

  selectIndex: number = 0

  change = true

  constructor() { }

  private imas!: Subscription

  ngOnInit(): void {

    if (this.autoSlider) {
      this.autoSliderImg()
    }

  }

  ngOnDestroy(): void {
    if (this.imas) {
      this.imas.unsubscribe()
    }
  }


  autoSliderImg(): void {
    setInterval(() => {
      this.Netx()
    }, this.interval)
  }

  selectImge(index: number): void {
    this.selectIndex = index
  }

  Netx() {
    if (this.selectIndex === this.images.length - 1) {
      this.selectIndex = 0
    } else {
      this.selectIndex++;
    }
  }

}
