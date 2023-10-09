import { Component, ViewChild, ElementRef } from '@angular/core'

import { GifService } from '../../services/gif.service';
@Component({
    selector:'search',
    templateUrl: './search.component.html',
    styleUrls:['./search.component.css']
})

export class SearchComponent{
    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>

    constructor( private gifService: GifService){}
    
    searchTag(){
        let newTag = this.tagInput.nativeElement.value;
        
        this.gifService.searchTag(newTag);
    }
}
