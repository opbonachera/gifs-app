import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';
@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  constructor( public gifService: GifService){}

    get tags(){
      return this.gifService.getTagsHistory;
    }

    clearHistory(){
      this.gifService.clearHistory();
    }
}
