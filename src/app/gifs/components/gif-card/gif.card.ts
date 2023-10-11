import { Component, Input, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';

import { Gif } from '../../interfaces/gif.request';

@Component({
    selector:'gif-card',
    templateUrl:'./gif.card.html'
})

export class GifCard implements OnInit{
    constructor(gifService: GifService){}

    @Input()
    public gif!: Gif;

    ngOnInit():void{
        if(!this.gif) throw new Error("Gif is required")
    }
}