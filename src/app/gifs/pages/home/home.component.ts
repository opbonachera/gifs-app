import { Component } from '@angular/core'

import { Gif, SearchResponse } from '../../interfaces/gif.request';
import { GifService } from '../../services/gif.service';
@Component({
    selector: 'homepage',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'] 
})

export class HomeComponent{ 

  constructor(public gifService: GifService){}

  get gifs(): Gif[]{
    return this.gifService.gifList;
  }
  
}