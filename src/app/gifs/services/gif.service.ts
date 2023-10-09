import { Injectable } from '@angular/core'

@Injectable({
    providedIn:'root'
})

export class GifService{
    constructor(){}

    private _tagsHistory: string[] = ["aaaaaaa"];

    get getTagsHistory(){
        return [...this._tagsHistory];
    }

    public searchTag( tag: string ):void {
        this._tagsHistory.unshift(tag);
    }

    public clearHistory(): void{
        this._tagsHistory = [];
    }
}