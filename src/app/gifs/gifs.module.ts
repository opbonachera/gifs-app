import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card-list/card.component';
import { GifCard } from './components/gif-card/gif.card';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    SearchComponent,
    GifCard,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class GifsModule { }
