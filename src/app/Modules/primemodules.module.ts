import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';



import { CarouselModule } from 'primeng/carousel';

import { ButtonModule } from 'primeng/button';

import { TagModule } from 'primeng/tag';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    BrowserAnimationsModule,
    InputTextModule,
    
  ],
  exports: [  
  MenubarModule,
  CarouselModule,
  ButtonModule,
  TagModule,
  BrowserAnimationsModule,
  InputTextModule
]
})
export class PrimemodulesModule { }
