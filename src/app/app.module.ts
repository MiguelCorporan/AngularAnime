import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { FavoritesComponent } from './Pages/favorites/favorites.component';
import { PrimemodulesModule } from './Modules/primemodules.module';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarrouselhorizontalComponent } from './components/carrouselhorizontal/carrouselhorizontal.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { BusquedasComponent } from './Pages/busquedas/busquedas.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { FooterComponent } from './components/footer/footer.component';
import { BienComponent } from './components/bien/bien.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    HeaderComponent,
    GalleryComponent,
    CarrouselComponent,
    CardsComponent,
    CarrouselhorizontalComponent,
    LoaderComponent,
    BusquedasComponent,
    DetalleComponent,
    FooterComponent,
    BienComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimemodulesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
