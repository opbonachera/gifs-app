import { Component, ViewChild, ElementRef } from '@angular/core'

@Component({
    selector:'search',
    templateUrl: './search.component.html',
    styleUrls:['./search.component.css']
})

export class SearchComponent{
    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>

    constructor(){}
    
    searchTag(){
        const newTag = this.tagInput.nativeElement.value;
        
    }
}
