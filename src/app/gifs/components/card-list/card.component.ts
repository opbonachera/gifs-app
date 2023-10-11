import { Component, Input } from '@angular/core'

import { Gif } from '../../interfaces/gif.request';
import { GifService } from '../../services/gif.service';

@Component({
    selector: 'card-list',
    templateUrl:'./card.component.html',
    styleUrls:['card.component.css']
})

export class CardComponent{
    @Input()
    public gifs: Gif[] = [];
}