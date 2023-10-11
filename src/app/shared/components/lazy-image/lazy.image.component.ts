import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector:'lazy-image-component',
    templateUrl:'lazy.image.component.html',
    styleUrls:['./lazy.image.component.css']
})

export class LazyImageComponent implements OnInit{
    constructor(){}

    @Input()
    public url:string="";

    @Input()
    public alt:string="";

    public hasLoaded:boolean = false;
    
    ngOnInit(): void {
        if( this.url ){
            this.hasLoaded = true;
        }
    }

}