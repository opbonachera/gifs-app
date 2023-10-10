import { Component } from '@angular/core';


import { Gif, SearchResponse } from './gifs/interfaces/gif.request';
import { GifService } from './gifs/services/gif.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gifs-app';
  

}
