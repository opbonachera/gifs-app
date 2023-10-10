import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { GifInterface } from '../interfaces/gif.request';
@Injectable({
    providedIn:'root'
})

export class GifService{
    constructor(private http: HttpClient){}

    private _tagsHistory: string[] = ["Cats holding paws"];
    private API_KEY:string = '8leYACb7XHFELRS768Qpw7ucVE4z3INX'
    private _serviceUrl:string = 'https://api.giphy.com/v1/gifs';

    get getTagsHistory(){
        return [...this._tagsHistory];
    }

    private organizeHistory( tag:string ):void{
        // Organizes search history. It removes blank spaces from both ends of the strings and if the current search tag exists in the history, it moves it up to the most recent searched tag. 
        tag = tag.toLowerCase().trim();
        
        this._tagsHistory.unshift(tag)

        if(this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter((t)=>t!==tag)
            this._tagsHistory.unshift(tag)
        }

}

    public searchTag( tag: string ):void{
        // This function is called on every keydown.enter event. Organizes the search history and makes an HTTP request to the GIPHY API.
        if(tag.length === 0) return;
        this.organizeHistory(tag);

        const params = new HttpParams()
        .set('api_key',this.API_KEY)
        .set('limit',10)
        .set('q',tag)

        this.http.get<GifInterface>(`${this._serviceUrl}/search`, {params})
        .subscribe((res)=>console.log(res))
    }

    public clearHistory(): void{
        this._tagsHistory = [];
    }

}